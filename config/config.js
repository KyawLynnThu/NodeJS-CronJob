require('dotenv').config();

const config = {
    emailUser: process.env.EMAIL_USER,
    emailPassword: process.env.EMAIL_PASSWORD,
}

module.exports = config;