require('dotenv').config()
const { json } = require('body-parser')
const express = require('express')
const massive = require('massive')
const app = express()
const { SESSION_SECRET, SERVER_PORT, CONNECTION_STRING } = process.env

app.use(json())
//database
massive(CONNECTION_STRING)
  .then(db => {
    app.set('db', db)
    console.log('database is connected')
  })
  .catch(err => {
    console.log(err)
  })


app.listen(4000, () => {
  console.log('listening on port 4000')
})
