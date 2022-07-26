const db = require('../utils/database')

class UserController {
    async createUser(req, res) {
        const {name, surname} = req.body
        const newUser = await db.query('INSERT INTO person (name, surname) values ($1, $2) RETURNING *', [name, surname]) 
        res.json(newUser.rows[0])
    }

    async getUsers(req, res) {
        const users = await db.query('SELECT * FROM person')
        res.json(users.rows)
    }

    async getUserById(req, res) {
        const userId = req.params.id
        const user = await db.query('SELECT * FROM person where id = $1', [userId])
        res.json(user.rows[0])
    }

    async updateUser(req, res) {
        const { id: userId, name, surname} = req.body
        const user = await db.query('UPDATE person set name = $1, surname = $2 where id = $3 RETURNING *', 
        [name, surname, userId]
        )
        res.json(user.rows[0])
    }

    async deleteUser(req, res) {
        const userId = req.params.id
        const user = await db.query('DELETE FROM person where id = $1', [userId])
        res.json(user.rows[0])
    }
}

module.exports = new UserController()