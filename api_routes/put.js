const { Router } = require('express')
const User = require('../models/user')
const router = Router()

router.put('/profile/:id',  async (req, res) => {
    try {

        const {name, surname, email, gender} = req.body
        const user = await User.findByPk(+req.params.id)

        const newData = {
            name: name ?? user.name,
            surname: surname ?? user.surname,
            email: email ?? user.email,
            gender: gender ?? user.gender
        }

        if (req.file) {
            console.log(req.file.path);
            newData.photo_url = req.file.path
        }
        
        Object.assign(user, newData)
        await user.save()
        
        res.status(200).json(user)
    } catch (err) {
        console.error(`Update user ${err}`);
    }
})

module.exports = router