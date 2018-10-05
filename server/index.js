//bringing in express dependency
const express = require('express');
//bring in cors
const cors = require('cors');
//bring in body parser
const bodyParser = require('body-parser');
//bring in morgan
const morgan = require('morgan');

//create express app
const app = express();
//middleware. add functionality to express app
//tiny logger(date, url, etc)
app.use(morgan('tiny'));
app.use(cors());
//add json body-parser
app.use(bodyParser.json());

//create get route
app.get('/', (req,res) => {
    //this function will run on get request
    res.json({
        message: 'full stack player data  base'
    });
})

//start server on a port
const port = process.env.PORT || 2244;
//listen on this port
app.listen(port, () => {
    console.log(`listening on ${port}`);
});