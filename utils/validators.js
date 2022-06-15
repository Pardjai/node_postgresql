const {body} = require('express-validator/check')

module.exports = {
    registerValidators: [
        body('name').notEmpty().escape().isString(),
        body('email').notEmpty().escape().isEmail().normalizeEmail().trim(),
        body('password').notEmpty().escape().trim()
    ],
    loginValidators: [
        body('email').notEmpty().escape().isEmail().normalizeEmail(),
        body('password').notEmpty().escape().trim()
    ],
    profileEditValidators: [
        body('name').optional().notEmpty().escape().isString(),
        body('surname').optional().notEmpty().escape().isString(),
        body('gender').optional().notEmpty().escape().isString(),
        body('email').optional().notEmpty().escape().isEmail().normalizeEmail().trim(),
    ]
}