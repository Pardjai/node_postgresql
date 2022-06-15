const { Router } = require('express')
const User = require('../models/user')
const router = Router()

router.get('/profile/:id', async (req, res) => {
    try {

        const user = await User.findByPk(+req.params.id)

        res.status(200).json({user})
        
    } catch (err) {
        console.error(`Get user error: ${err}`);
    }
})

router.get('/profiles', async (req, res) => {
    try {
        const limit = 10
        const page = +req.query.page
        let offset = (page - 1) * limit 
        if (Number.isNaN(offset)){
            offset = 0
        }
        const users = await User.findAll({
            order: [['createdAt', 'DESC']],
            limit,
            offset
        })

        res.status(200).json(users)
    } catch (err) {
        console.error(`Get users error: ${err}`);
    }
})

module.exports = router