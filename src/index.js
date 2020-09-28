const express =require ('express');
//Initialiazations
const app = express();

// Settings
app.set('port', process.env.PORT ||3000);

//Middlewares

// Global Variables

//Routes

//Static Files

//Server is listenning
app.listen(app.get('port'),()=>{
    console.log('Server on port', app.get('port'));
});