const express = require('express')
const cors = require('cors')
const gradient = require('gradient-string')

const app = express()

app.use(express.json())
app.use(cors())

const {
    login,
    register
} = require('./controllers/auth')

app.post(`/api/login`, login)
app.post(`/api/register`, register)

app.listen(4004, () => console.log(gradient.instagram(`Running on 4004`)));