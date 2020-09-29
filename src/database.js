const mongoose = require('mongoose');

const  {NOTES_APP_MONGODB_HOST, NOTES_APP_MONGODB_DATABASE, COSMOS_URI} = process.env;
const MONGODB_URI = `mongodb+srv://${NOTES_APP_MONGODB_HOST}/${NOTES_APP_MONGODB_DATABASE}`;
//const MONGODB_URI = COSMOS_URI;

mongoose.connect(MONGODB_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(db => console.log('DB is connected'))
.catch(err => console.error(err));


