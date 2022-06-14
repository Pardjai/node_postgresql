const { Router } = require('express')
const User = require('../models/user')
const bcrypt = require('bcryptjs')
const router = Router()

router.post('/user/register', async (req, res) => {
    try {
        const {name, email, password} = req.body

        const [candidate] = await User.findAll({
            where:{
                email: email
            }
        })

        if(candidate){
            throw new Error('Attempt to add an existing user')
        }

        const hashPassword = await bcrypt.hash(password, 12)
        const user = await User.create({
            name,
            email,
            password: hashPassword
        })

        res.status(201).json({user})

    } catch (err) {
        console.error(`Register ${err}`);
        res.status(500).json({
            message: 'Server error during registration'
        })
    }
})

router.post('/user/login', async (req, res) => {
    try {
        
    } catch (err) {
        console.error(`Login error: ${err}`);
    }
})

module.exports = router