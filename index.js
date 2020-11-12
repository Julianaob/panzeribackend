const express = require('express')
const PORT = 3000
const HOST = '0.0.0.0'

const app = express()

app.get('/', (req, res) =>{
    res.send('Hello World Home Panzeri')
})


app.get('/evaluation', (req, res) =>{
    res.send('Hello ')
})

app.get('/dbhealthcheck', (req, res) => {
    res.send('OK')
})
app.listen(PORT, HOST)