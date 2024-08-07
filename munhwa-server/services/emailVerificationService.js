import crypto from 'crypto';
import { smtpTransport } from "../config/email";

// 토큰 발급
const generateEmailVerificationToken = () => {
    const token = crypto.randomBytes(20).toString('hex');
    const expires = new Date();
    expires.setHours(expires.getHours() + 1); // 1시간 후 만료

    return { token, expires };
}


// 인증 메일 발급 코드
export const emailLinkauth = (req, res) => {

    const result = generateEmailVerificationToken();

    const { email } = req.body;
    const mailOptions = {
        from : "email@naver.com", // 발신자 이메일
        to : email,
        subject : 'Verify your email address',
        html: `<p>Please click the following link to verify your email address:</p>
        <p> <a href="http://localhost:3000/verify-email/?email=${email}?token=${result.token}">Verify email</a></p>
        <p>This link will expire on ${result.expires}.</p>`
    }

    smtpTransport.sendMail(mailOptions, (err, response) => {
        console.log(response);

        if (err) {
            res.json({ ok : false, msg : '메일 전송에 실패했습니다.' })
        } else {
            res.json({ ok : true, msg : '메일 전송에 성공했습니다', authNum : number })
        }
        smtpTransport.close();
        return;
    })
}
