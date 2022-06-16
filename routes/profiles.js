const { Router } = require('express')
const User = require('../models/user')
const router = Router()

router.get('', async (req, res) => {
    try {
        const limit = 10
        const page = +req.query.page
        let offset = (page - 1) * limit 
        if (Number.isNaN(offset)){
            offset = 0
        }
        const users = await User.findAll({
            order: [['createdAt']],
            limit,
            offset
        })

        res.status(200).json(users)
    } catch (err) {
        console.error(`Get users error: ${err}`);
    }
})

module.exports = router