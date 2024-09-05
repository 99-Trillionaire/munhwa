const express = require('express');
const bodyParser = require('body-parser');
const signupRouter = require('./services/signup');
const verifyEmailRouter = require('./services/verifyEmail');
const loginRouter = require('./services/login');

const app = express();

app.use(bodyParser.json());

app.use('/signup', signupRouter);
app.use('/verify', verifyEmailRouter);
app.use('/login', loginRouter);

app.get('/', (req, res) => {
    res.send('Hello World!');
})

// 서버 포트 설정
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});