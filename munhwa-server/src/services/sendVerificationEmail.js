require('dotenv').config();
const crypto = require('crypto');
const { smtpTransport } = require('../../config/email');

// 토큰 발급
const generateEmailVerificationToken = () => {
    const token = crypto.randomBytes(20).toString('hex');
    const expires_at = new Date();
    expires_at.setHours(expires_at.getHours() + 1); // 1시간 후 만료

    return { token, expires_at };
}


// 인증 메일 발급
const sendVerificationEmail = async (email, token, expires_at) => {

    const verifyLink = `http://localhost:3000/verify?token=${token}`;

    const mailOptions = {
        from : process.env.NAVER_USER, // 발신자 이메일
        to : email,
        subject : 'Verify your email address',
        html: `<p>Please click the following link to verify your email address:</p>
               <p><a href="${verifyLink}">Verify email</a></p>
               <p>This link will expire on ${expires_at}.</p>`
    };

    try {
        await smtpTransport.sendMail(mailOptions);
        console.log('Verification email sent successfully.');
    } catch (error) {
        console.error('Error sending verification email: ', error);
    }
};

module.exports = { sendVerificationEmail, generateEmailVerificationToken };
