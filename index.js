const express = require('express')
const path = require('path')
const sequelize = require('./utils/database')
const apiGetRoutes = require('./api_routes/get')
const apiPostRoutes = require('./api_routes/post')
const apiPutRoutes = require('./api_routes/put')

const app = express()

app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/GET', apiGetRoutes)
app.use('/POST', apiPostRoutes)
app.use('/PUT', apiPutRoutes)

const PORT = process.env.PORT || 3000
async function start(){

  try {
    await sequelize.sync()
    app.listen(PORT)
    console.log(`Server has been started on port: ${PORT}`); 
  } catch (err) {
    console.error(`Connection DB is failed with error: ${err}`);
  }
}

start()