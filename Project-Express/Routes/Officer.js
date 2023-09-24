const express = require('express');
const router = express.Router();

router.get('/Officer',(req,res) => {
    res.send('Hello Officer')
})

module.exports = router