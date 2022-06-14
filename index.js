const util = require('util')
const express = require('express')
const connection = require('./utils/database')
const profileRoutes = require('./routes/profile')
const app = express()

const PORT = process.env.PORT || 3000

app.use(express.json())

app.use('/profile', profileRoutes)

// делаем метод connection.connect асинхронным
const connect = util.promisify(connection.connect)

async function start(){

  await connect.call(connection) // вызываем в контексте connection чтобы избежать ошибок при рименении util.promisify к методам
    .then(res => console.log(`Connection DB successful`))
    .catch(err => console.error(`Connection is failed with: ${err.sqlMessage}`))

    app.listen(PORT)
    console.log(`Server has been started on port: ${PORT}`); 
}

start()