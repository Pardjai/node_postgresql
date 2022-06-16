const { Router } = require('express')
const User = require('../models/user')
const bcrypt = require('bcryptjs')
const {validationResult} = require('express-validator/check')
const {registerValidators, loginValidators} = require('../utils/validators')
const router = Router()

//===REGISTRATION===
router.post('/register', registerValidators, async (req, res) => {
    try {

        const errors = validationResult(req);
         if (!errors.isEmpty()) {
            console.log(errors);
            return res.status(422).json('Invalid register-data. Not processed');
         }

        const {name, email, password} = req.body

        const [candidate] = await User.findAll({
            where:{
                email
            }
        })

        if (candidate){
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

//===LOGIN===
router.post('/login', loginValidators, async (req, res) => {
    try {

        const errors = validationResult(req);
         if (!errors.isEmpty()) {
            console.log(errors);
            return res.status(422).json('Invalid login-data. Not processed');
         }

        const {email, password} = req.body
        const [candidate] = await User.findAll({
            where: {
                email
            }
        })

        if (! candidate){
            throw new Error('Received unknown email')
        }
        const userPassword = candidate.password

        const isValidPassword = await bcrypt.compare(password, userPassword)
        if (! isValidPassword){
            throw new Error('Received invalid password')
        }

        res.status(200).json('Authentication was successful')

    } catch (err) {
        console.error(`Login ${err}`);
        res.status(500).json({
            message: 'Server error during login'
        })
    }
})

module.exports = router