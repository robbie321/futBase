//require in connection from connection.js
const db = require('./connection');
//joi
const Joi = require('joi');
//scheme for joi
const schema = Joi.object().keys({
    name: Joi.string().regex(/^[\w\-\s]+$/).required(),
    dob: Joi.number().integer().min(1900).max(2018).required(),
    currentClub: Joi.string().alphanum().max(100).required(),
    appearances: Joi.string().alphanum(),
    goals: Joi.number().integer(),
    imageURL: Joi.string().uri({
        scheme:[
            /https?/
        ]
    }),
    crestURL: Joi.string().uri({
        scheme:[
            /https?/
        ]
    })
});


const cards = db.get('cards');


//get all
function getAll(){
    // return cards.find().forEach(function(cards){
    //     cards.name;
    // });
    return cards.find();
}
//get by name
function getByName(searchTerm){
    var pattern = searchTerm
    return cards.find(
        // { name:{$regex: '.*'+ (searchTerm) + '.*'} })
        { name:{$regex: pattern, $options: 'i'} })
}
function remove(){
    return cards.remove({_id: "5bb81231f54cf90d940d8b13"});
}
//called when player added
function create(card){
    const result = Joi.validate(card,schema);
    if(result.error == null){
        return cards.insert(card);
    }else{
        return Promise.reject(result.error);
    }

}





module.exports = {
    create,
    getAll,
    getByName,
    remove,
};