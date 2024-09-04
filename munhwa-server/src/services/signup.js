const express = require('express');
const connection = require('../../config/maria');
const { sendVerificationEmail, generateEmailVerificationToken } = require('./sendVerificationEmail');
const router = express.Router();
const bcrypt = require('bcrypt');


// 이메일 인증
router.post('/', async (req, res) => {
    const email = req.body.email;

    try {
        if (!email) {
            return res.status(400).json({ message: 'email is required' });
        }
        // 이메일 조회
        const [rows] = await connection.query('SELECT * FROM users WHERE email = ?', [email]);

        if (rows.length > 0) {
            return res.status(400).json({ message: 'Email already exists' });
        } else {
            // 이메일 검증 토큰 생성
            const { token, expires_at } = generateEmailVerificationToken();

            // 사용자 이메일 인증 데이터 DB 저장
            await connection.query(
                'INSERT INTO emailverifications (email, token, expires_at) VALUES (?, ?, ?)', [email, token, expires_at]
            );
            
            // 이메일 발송
            await sendVerificationEmail(email, token, expires_at);

            return res.status(200).json({ 
                message: 'Email is available',
                email: email
             });

        }
    } catch (error) {
        console.error('Server error:', error);
        res.status(500).json({ message: 'Server error' });
    }

});


// 닉네임 중복 확인
router.post('/checkNickname', async (req, res) => {
    const { nickname } = req.body;

    if (!nickname) {
        return res.status(400).json({ message: 'Nickname is required' });
    }


    try {
        const query = 'SELECT COUNT(*) AS count FROM users WHERE nickname = ?';
        const [rows] = await connection.query(query, [nickname]);

        const isAvailable = rows[0].count === 0; // 닉네임이 존재하지 않으면 true

        res.status(200).json({ available: isAvailable });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'server error' });
    }

})


// 회원 정보 입력
// 비밀번호 유효성 검사(길이, 복잡성 등) 나중에 추가
router.post('/completeSignup', async (req, res) => {
    const { nickname, password, passwordConfirm, token } = req.body;

    // 비밀번호 확인
    if (password.trim() !== passwordConfirm.trim()) {
        return res.status(400).json({ message: 'Passwords do not match'});
    }


    try {
        const query = 'SELECT * FROM emailVerifications WHERE token = ?';
        const [tokenRows] = await connection.query(query, [token]);

        if (tokenRows.length === 0) {
            return res.status(400).json({ message: 'invalid or expired token' });
        }

        const emailToken = tokenRows[0];
        const currentTime = new Date();

        if (currentTime > emailToken.expires_at) {
            return res.status(400).json({ message: 'expired token' });
        }

        const email = emailToken.email;

        // 비밀번호 해시화
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // 회원 정보 저장
        const insertQuery = 'INSERT INTO users (nickname, password_hash, email, is_verified) VALUES (?, ?, ?, TRUE)';
        await connection.query(insertQuery, [nickname, hashedPassword, email]);

        res.status(201).json({ message: `Welcome ${nickname}!`});

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
})


module.exports = router;