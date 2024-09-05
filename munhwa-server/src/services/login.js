const express = require('express');
const connection = require('../../config/maria');
const router = express.Router();
const bcrypt = require('bcrypt');

// 로그인
router.post('/', async (req, res) => {
    const { email, password } = req.body;

    if (!email) {
        return res.status(400).json({ message: 'email is required' });
    }

    if (!password) {
        return res.status(400).json({ message: 'password is required' });
    }

    try {
        const query = 'SELECT * FROM users WHERE email = ?';
        const [rows] = await connection.query(query, [email]);

        // 사용자 이메일이 존재하지 않는 경우
        if (rows.length === 0) {
            return res.status(401).json({ message: 'Invalid email '});
        }

        const user = rows[0];


        // 비밀번호 비교
        const isMatch = await bcrypt.compare(password, user.password_hash);

        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid password'} );
        }

        // 로그인 성공
        return res.status(200).json({
            message: 'Login successful',
            nickname: user.nickname
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'server error' });
    }


});

module.exports = router;