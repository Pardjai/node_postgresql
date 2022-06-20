const express = require('express')
const path = require('path')
const sequelize = require('./utils/database')
const bcrypt = require('bcryptjs')
const fileMiddleware = require('./middleware/file')
const User = require('./models/user')
const {validationResult} = require('express-validator/check')
const {profileEditValidators, registerValidators, loginValidators} = require('./utils/validators')
const {CHANGEABLE_FIELDS} = require('./keys')

const app = express()

app.use(express.json())
app.use(fileMiddleware.single('photo_url'))
app.use('/images',express.static(path.join(__dirname, 'images')))

// === ROUTES *START* ===

//=== /profiles.  (GET) ===
//
app.get('/profiles',  async (req, res) => {
  try {
      const limit = 10
      const page = +req.query.page
      let offset = (page - 1) * limit 
      if (Number.isNaN(offset)){
          offset = 0
      }
      const users = await User.findAll({
          order: [['createdAt']],
          limit,
          offset
      })

      res.status(200).json(users)
  } catch (err) {
      console.error(`Get users error: ${err}`);
  }
})

//=== /profile. (GET, PUT) ===
//
app.get('/profile/:id', async (req, res) => {
  try {

      const user = await User.findByPk(+req.params.id)

      res.status(200).json({user})
      
  } catch (err) {
      console.error(`Get user error: ${err}`);
  }
})
//======================================
app.put('/profile/:id', profileEditValidators, async (req, res) => {
  try {

      const errors = validationResult(req);
       if (!errors.isEmpty()) {
          console.log(errors);
          return res.status(422).json('Invalid profile-edit-data. Not processed');
       }

      const user = await User.findByPk(+req.params.id)

      /*
        в req.body могут быть ключи для свойств пользователя, которые нельзя обновлять. цикл ниже проходится по свойствам, которые можно
        изменять и изменяет их, если в req.body данное свойство не null или undefined 
      */
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

//=== /user. (POST) ===
//
app.post('/user/register',  registerValidators, async (req, res) => {
  try {

      const errors = validationResult(req);
       if (!errors.isEmpty()) {
          console.log(errors);
          return res.status(422).json('Invalid register-data. Not processed');
       }

      const {name, email, password} = req.body

      const [candidate] = await User.findAll({
          where:{
              email
          }
      })

      if (candidate){
          throw new Error('Attempt to add an existing user')
      }

      const hashPassword = await bcrypt.hash(password, 12)
      const user = await User.create({
          name,
          email,
          password: hashPassword
      })

      res.status(201).json({user})

  } catch (err) {
      console.error(`Register ${err}`);
      res.status(500).json({
          message: 'Server error during registration'
      })
  }
})
//======================================
app.post('/user/login',  loginValidators, async (req, res) => {
  try {

      const errors = validationResult(req);
       if (!errors.isEmpty()) {
          console.log(errors);
          return res.status(422).json('Invalid login-data. Not processed');
       }

      const {email, password} = req.body
      const [candidate] = await User.findAll({
          where: {
              email
          }
      })

      if (! candidate){
          throw new Error('Received unknown email')
      }
      const userPassword = candidate.password

      const isValidPassword = await bcrypt.compare(password, userPassword)
      if (! isValidPassword){
          throw new Error('Received invalid password')
      }

      res.status(200).json('Authentication was successful')

  } catch (err) {
      console.error(`Login ${err}`);
      res.status(500).json({
          message: 'Server error during login'
      })
  }
})

// === *END* ROUTES ===

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