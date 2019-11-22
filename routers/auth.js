const express = require('express');
const router = express.Router();


// @route   Get api/Auth
// @desc    Get loggin in user
// @access  Public 
router.get('/',(req, res) =>{ 
    res.send('Get logged in user');
} );

// @route   POST api/Auth
// @desc    Auth user & get token
// @access  Public 
router.post('/',(req, res) =>{
    res.send('log in user')
});

module.exports = router;

