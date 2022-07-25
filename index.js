const express = require('express')
const path = require('path')
const userRouter = require('./routes/user.routes')
const postRouter = require('./routes/post.routes')

const app = express()

app.use(express.json())

app.use('/api', userRouter)
app.use('/api', postRouter)

const PORT = 8080
app.listen(PORT, () => console.log(`Server has been started on port: ${PORT}`))
