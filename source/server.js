const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const app = express()

app.use(require('prerender-node').set('prerenderServiceUrl', 'http://localhost:3000'));

// assets. Static JS, CSS, fonts
app.use('/public', express.static(path.join(__dirname, './public')))
app.use('/assets', express.static(path.join(__dirname, './public/assets')))
app.use('/js', express.static(path.join(__dirname, './public/js')))
app.use('/css', express.static(path.join(__dirname, './public/css')))
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())

// SPA default configuration
// it is important to declare this after the assets rule
app.get('*', (req, res, next) => {
    res.sendFile(path.join(__dirname, './public/index.html'))
})

// start server
const server = app.listen(process.env.PORT || 9000, () => {
    console.log(`server running on port ${server.address().port}`)
})