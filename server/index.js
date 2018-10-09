//bringing in express dependency
const express = require('express');
//bring in cors
const cors = require('cors');
//bring in body parser
const bodyParser = require('body-parser');
//bring in morgan
const morgan = require('morgan');
//cards
const cards = require('./db/cards');
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

app.get('/cards', (req,res) =>{
    cards.getAll().then((cards) => {
        res.json(cards);
    });
});

app.get('/cards/club/:club', (req,res) => {
    var club = req.params.currentClub;
    cards.getByClub(club).then((cards) =>{
        res.json(cards);
    }).catch((error) => {
        res.status(500);
        res.json(error);
    });
});

app.get('/cards/:name', (req,res)=>{
    var name = req.params.name;
    cards.getByName(name).then((cards) => {
        res.json(cards);
    });
});
app.post('/cards', (req,res) => {
    console.log(req.body);
    cards.create(req.body).then((card) =>{
        res.json(card);
    }).catch((error) => {
        res.status(500);
        res.json(error);
    });
});

app.delete('/cards', (req,res) => {
    cards.remove(req.body).then((card) =>{
        res.json(card);
    })
});
//start server on a port
const port = process.env.PORT || 2244;
//listen on this port
app.listen(port, () => {
    console.log(`listening on ${port}`);
});