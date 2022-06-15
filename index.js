const express = require('express')
const path = require('path')
const sequelize = require('./utils/database')
const fileMiddleware = require('./middleware/file')
const apiGetRoutes = require('./api_routes/get')
const apiPostRoutes = require('./api_routes/post')
const apiPutRoutes = require('./api_routes/put')

const app = express()

app.use(express.json())
app.use(fileMiddleware.single('photo_url'))
app.use('/images',express.static(path.join(__dirname, 'images')))

app.use('/GET', apiGetRoutes)
app.use('/POST', apiPostRoutes)
app.use('/PUT', apiPutRoutes)

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