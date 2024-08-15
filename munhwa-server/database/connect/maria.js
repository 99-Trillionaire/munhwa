require('dotenv').config();

const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
});

// 연결 테스트
connection.connect((err) => {
    if (err) {
        console.log('Host:', process.env.DB_HOST);
        console.log('User:', process.env.DB_USER);
        console.log('Password:', process.env.DB_PASSWORD ? '****' : 'Not set');
        console.log('Database:', process.env.DB_NAME);
        console.log('Port:', process.env.DB_PORT);
        console.error('MariaDB 연결 실패: ', err);
        return;
    }
    console.log('MariaDB 연결 성공');
})

// 연결 종료
connection.end();