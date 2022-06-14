const { Router } = require('express')
const connection = require('../utils/database')
const router = Router()

router.get('/:id', (req, res) => {
        const userId = req.params.id
        connection.query(
            `SELECT * FROM users WHERE id = ${userId}`,
            (err, result) => {
                if (err){
                    return console.error(err);
                }
                const user = result[0]
                res.status(200).json(user)
            }
        )
})

module.exports = router