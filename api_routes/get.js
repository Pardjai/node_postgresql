const { Router } = require('express')
const User = require('../models/user')
const router = Router()

router.get('/profile/:id', async (req, res) => {
    try {
        
    } catch (err) {
        console.error(`Get user error: ${err}`);
    }
})

router.get('/profiles', async (req, res) => {
    try {
        
    } catch (err) {
        console.error(`Get users error: ${err}`);
    }
})

module.exports = router