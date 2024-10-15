const express = require('express');
const UserController = require('../controllers/User');
const  {signUpValidation}  = require('../middleware/validation');

const router = express.Router();

router.post('/sign-up',signUpValidation,  UserController);
router.get('/sign-up', (req,res) => {
    try {
        res.send("<h1>Sign up route</h1>");
    } catch (error) {
        res.status(500).json({message:error.message});
    }
  
})

module.exports = router;