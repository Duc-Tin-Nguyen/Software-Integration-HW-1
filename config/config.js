const config = require('config');
const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    db: config.get('db')
};
