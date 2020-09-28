const mongoose = require('mongoose');

const MONGODB_URI = 'mongodb+srv://testing:Aa123456!@cluster0.slm1h.azure.mongodb.net/std-db-app?retryWrites=true&w=majority';


mongoose.connect(MONGODB_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(db => console.log('DB is connected'))
.catch(err => console.error(err));


