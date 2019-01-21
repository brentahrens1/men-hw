//requires 
const express = require('express'); 
const router = express.Router(); 

//model data 

const Artist = require('../models/artist'); 

//index 

router.get('/', (req, res) => {
    Artist.find({}, (err, allArtist) => {
        if(err) {
            res.send(arr);
        } else {
            res.render('../views/index.ejs', {
                artists: allArtist //the key becomes a var inside the tempelated
            }); 
        }
    }); 
})

//new

router.get('/new', (req, res) => {
    res.render('../views/new.ejs'); 
}); 

//create

router.post('/', (req, res) => {
    Artist.create(req.body, (err, newArtist) => {
        if(err) {
            res.send(err); 
        } else {
            console.log(newArtist); 
            res.redirect('/artists'); 
        }
    }); 
}); 

//edit 

router.get('/:id/edit', (req, res) => {

}); 

//update

router.put('/:id', (req, res) => {

}); 

//show

router.get('/:id', (req, res) => {
    Artist.findById(req.params.id, (err, foundArtist) => {
        if(err) {
            res.send(err);
        } else {
            res.render('../views/show.ejs'); 
        }
    })
}); 

//delete

router.delete('/:id', (req, res) => {
    Artist.findOneAndRemove(req.params.id, (err, deletedArtist) => {
        if(err) {
            res.send(err); 
        } else {
            res.redirect('/artists'); 
        }
    })
}); 

module.exports = router; 
