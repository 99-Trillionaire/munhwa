const express = require('express');
const connection = require('../../config/maria');
const router = express.Router();

router.get('/', async (req, res) => {
    const { token } = req.query;

    try {
        const [verificationResult] = await connection.query('SELECT email FROM emailverifications WHERE token = ?', [token]);

        if (verificationResult.length == 0) {
            return res.status(400).json({ message: 'Invalid or expired token' });
        }

        await connection.query('UPDATE emailverifications SET is_verified = TRUE WHERE token = ? AND is_verified = FALSE', token);

        return res.status(200).json({ message: 'Email successfully verified' });


    } catch (error) {
        console.error('Database error: ', error);
        return res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;