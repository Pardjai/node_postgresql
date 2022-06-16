const { Router } = require('express')
const User = require('../models/user')
const {validationResult} = require('express-validator/check')
const {profileEditValidators} = require('../utils/validators')
const {CHANGEABLE_FIELDS} = require('../keys')
const router = Router()

router.get('/:id', async (req, res) => {
    try {

        const user = await User.findByPk(+req.params.id)

        res.status(200).json({user})
        
    } catch (err) {
        console.error(`Get user error: ${err}`);
    }
})

router.put('/:id', profileEditValidators, async (req, res) => {
    try {

        const errors = validationResult(req);
         if (!errors.isEmpty()) {
            console.log(errors);
            return res.status(422).json('Invalid profile-edit-data. Not processed');
         }

        const user = await User.findByPk(+req.params.id)

        CHANGEABLE_FIELDS.forEach(fieldName => {
            user[fieldName] = req.body[fieldName] ?? user[fieldName]
        })

        if (req.file) {
            user.photo_url = req.file.path
        }
        
        await user.save()
        
        res.status(200).json(user)
    } catch (err) {
        console.error(`Update user ${err}`);
    }
})

module.exports = router