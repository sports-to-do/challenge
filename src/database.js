const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://testing:Aa123456!@cluster0.slm1h.azure.mongodb.net/std-db-app?retryWrites=true&w=majority',{
    useCreateIndex:true,
    useNewUrlParser:true,
    useFindAndModify:false,
    useUnifiedTopology:true
})
.then(db => console.log('DB is connected'))
.catch(err => console.error(err));


