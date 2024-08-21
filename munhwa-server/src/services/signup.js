const express = require('express');
const connection = require('../../config/maria');
const { sendVerificationEmail, generateEmailVerificationToken } = require('./sendVerificationEmail');
const router = express.Router();


// 이메일 인증 API
router.post('/', async (req, res) => {
    const email = req.body.email;

    try {
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
            await sendVerificationEmail(email);

            return res.status(200).json({ message: 'Email is available' });

        }
    } catch (error) {
        console.error('Server error:', error);
        res.status(500).json({ message: 'Server error' });
    }

});

module.exports = router;