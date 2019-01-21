const mongoose = require('mongoose'); 


const artistSchema = new mongoose.Schema({
    name: {type: String, required: true},
    team: String, 
    championships: Number
})

const Artist = mongoose.model('Artist', artistSchema); 

module.exports = Artist; 

