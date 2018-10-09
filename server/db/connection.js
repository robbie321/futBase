//define connection to mongoDB
const monk = require('monk');
const connectionString = 'mongodb://robbie321:Munster50@ds125423.mlab.com:25423/futbase';//connects to databse
const db = monk(connectionString);

module.exports = db;