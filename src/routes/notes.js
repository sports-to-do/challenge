const express = require('express');
const router = express.Router();

router.get('/notes',(req,resp)=>{
    resp.send('Notes from database');
});


module.exports = router;