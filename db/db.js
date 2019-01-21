const mongoose = require('mongoose'); 
const connectionString = 'mongodb://localhost/artist';

mongoose.connect(connectionString, {
    useNewUrlParser: true, 
    useCreateIndex: true,
    useFindAndModify: false
}); 

mongoose.connection.on('connected', () => {
    console.log(`im connected to ${connectionString}`); 
}); 

mongoose.connection.on('error', (err) => {
    console.log(`you have an ${err}`); 
}); 

mongoose.connection.on('disconnected', () => {
    console.log(`You are disconnected from ${connectionString}`); 
}); 