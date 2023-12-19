const express = require("express")
const bodyParser = require('body-parser')
const nunjucks = require('nunjucks')
const indexRouter = require("./routes/index")
const xmasRouter = require('./routes/xmas')
const port = process.env.PORT || 3000

const app = express()

nunjucks.configure('views', {
    autoescape: true,
    express: app
});

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static('public'))

app.use(function (req, res, next){
    res.locals.url = req.originalUrl
    next()
})

app.use("/", indexRouter)
app.use("/xmas", xmasRouter)

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})