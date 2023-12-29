require('dotenv').config()

const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('This is backend app.')
})

app.listen(process.env.PORT, () => {
  console.log(`Backend app listening on port ${process.env.PORT}`)
})