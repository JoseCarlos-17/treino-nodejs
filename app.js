const express = require('express')
const app = express()
const port = 3000
const database = require('./src/db/database')

app.use(express.json())

database()

app.listen(port, () => {
  console.log('treino-node.js server is running!')
})
