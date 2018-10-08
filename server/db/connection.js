//define connection to mongoDB
const monk = require('monk');
const connectionString = 'localhost/futbase';
//connects to databse
const db = monk(connectionString);

module.exports = db;