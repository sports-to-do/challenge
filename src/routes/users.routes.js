const router = require('express').Router();


router.get('/users/signin',(req,resp)=>{
    resp.send('Ingresando a la aplicacion');
});

router.get('/users/singup',(req,res)=>{
 res.send('Formulario de autenticacion');
});


module.exports = router;