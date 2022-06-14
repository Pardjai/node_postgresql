const { Router } = require('express')
const User = require('../models/user')
const bcrypt = require('bcryptjs')
const router = Router()

router.put('/profile/:id',  async (req, res) => {
    try {

        const newData = {...req.body}
        newData.password = await bcrypt.hash(newData.password, 12)
        const user = await User.findByPk(+req.params.id)

        const newUser = Object.assign(user, newData)
        await user.save()
        
        res.status(200).json({newUser})
    } catch (err) {
        console.error(`Update user ${err}`);
    }
})

module.exports = router