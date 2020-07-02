const dotenv = require('dotenv');

// Read .env file at project root
dotenv.config();

// Global app configuration
const config = {
    PORT: process.env.PORT || 8000,

    MYSQL_HOST: process.env.MYSQL_HOST || 'localhost',
    MYSQL_PORT: process.env.MYSQL_PORT || 3306,
    MYSQL_DATABASE: process.env.MYSQL_DATABASE || 'snkrs',
    MYSQL_USER: process.env.MYSQL_USER || 'admin',
    MYSQL_PASSWORD: process.env.MYSQL_PASSWORD || 's3cr3t',

    MAILER_HOST: process.env.MAILER_HOST,
    MAILER_PORT: process.env.MAILER_PORT,
    MAILER_SECURED: process.env.MAILER_SECURED,
    MAILER_USER: process.env.MAILER_USER,
    MAILER_PASSWORD: process.env.MAILER_PASSWORD
};

module.exports = config;