const express = require('express')
const path = require('path')
const sequelize = require('./utils/database')
const fileMiddleware = require('./middleware/file')
const profilesRoutes = require('./routes/profiles')
const profileRoutes = require('./routes/profile')
const userRoutes = require('./routes/user')

const app = express()

app.use(express.json())
app.use(fileMiddleware.single('photo_url'))
app.use('/images',express.static(path.join(__dirname, 'images')))

app.use('/profiles', profilesRoutes)
app.use('/profile', profileRoutes)
app.use('/user', userRoutes)

const PORT = process.env.PORT || 3000
async function start(){

  try {
    await sequelize.sync()
    app.listen(PORT, () => console.log(`Server has been started on port: ${PORT}`))
  } catch (err) {
    console.error(`Connection DB is failed with error: ${err}`);
  }
}

start()