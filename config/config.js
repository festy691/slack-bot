const dotenv = require('dotenv');

dotenv.config();

const config = {
    production:{
        secret: process.env.SECRET,
        MONGO_URI: process.env.MONGO_DB_URL,
        port: process.env.port
    },

    development:{
        secret: process.env.SECRET,
        MONGO_URI: process.env.MONGO_DB_URL,//'mongodb://localhost/bot',
        port: process.env.port || 4000
    }
}

module.exports = env=> config[env] || config.development;