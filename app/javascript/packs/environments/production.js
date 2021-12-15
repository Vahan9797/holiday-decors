const path = require('path');
console.log('FROM PRODUCTION ENV');
require('dotenv').config({ path: path.resolve(__dirname, '.env') });