//requires 
const express = require('express'); 
const router = express.Router(); 

//model data 

const Artist = require('../models/artist'); 

//index 

router.get('/', (req, res) => {

})

//new

router.get('/new', (req, res) => {

}); 

//create

router.post('/', (req, res) => {

}); 

//edit 

router.get('/:id/edit', (req, res) => {

}); 

//update

router.put('/:id', (req, res) => {

}); 

//show

router.get('/:id', (req, res) => {

}); 

//delete

router.delete('/:id', (req, res) => {

}); 

module.exports = router; 
