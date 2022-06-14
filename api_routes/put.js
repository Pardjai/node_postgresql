const { Router } = require('express')
const User = require('../models/user')
const router = Router()

router.put('/profile/:id',  async (req, res) => {
    try {
        
    } catch (err) {
        console.error(`Update user error: ${err}`);
    }
})

module.exports = router