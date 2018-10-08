//require in connection from connection.js
const db = require('./connection');
//joi
const Joi = require('joi');
//scheme for joi
const schema = Joi.object().keys({
    name: Joi.string().alphanum().required(),
    dob: Joi.number().integer().min(1900).max(2018).required(),
    currentClub: Joi.string().alphanum().max(100).required(),
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

    return cards.find({ name: searchTerm}, {fields: {name: searchTerm}})
}
function remove(){
    return cards.remove({_id: "5bb80b9ef54cf90d940d8b12"});
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

function post(path, params, method) {
    method = method || "post"; // Set method to post by default if not specified.

    // The rest of this code assumes you are not using a library.
    // It can be made less wordy if you use one.
    var form = document.createElement("form");
    form.setAttribute("method", method);
    form.setAttribute("action", path);

    for(var key in params) {
        if(params.hasOwnProperty(key)) {
            var hiddenField = document.createElement("input");
            hiddenField.setAttribute("type", "hidden");
            hiddenField.setAttribute("name", key);
            hiddenField.setAttribute("value", params[key]);

            form.appendChild(hiddenField);
        }
    }

    document.body.appendChild(form);
    form.submit();
}



module.exports = {
    create,
    getAll,
    getByName,
    post,
    remove,
};