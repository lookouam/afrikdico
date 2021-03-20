const dotenv = require('dotenv');
dotenv.config();

const config = {
    PORT: 5000,
    API_BASE_PATH:'/api/v1',
    mongo:{
        url: process.env.MONGODB_URL || 'cluster0.ggmdj.mongodb.net',
        database: process.env.MONGODB_DB|| 'afrikdico',
        password: process.env.MONGODB_PASSWORD|| 'canal',
        user:process.env.MONGODB_USER || 'loic',
    }
};

module.exports = config;