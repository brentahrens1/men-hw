//requires

const express = require('express'); 
const app = express(); 
const bodyParser = require('body-parser'); 
const methodOverride = require('method-override'); 

//middleware
app.use(bodyParser.urlencoded({extended: true})); 
app.use(methodOverride('_method')); 
app.use(express.static('public')); 

//routers 

//listener

app.listen(3000, function() {
    console.log('listening on port 3000')
})