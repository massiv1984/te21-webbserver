const express = require("express")
const nunjucks = require('nunjucks')
const app = express()
const indexRouter = require("./routes/index")

const port = process.env.PORT || 3000

nunjucks.configure('views', {
    autoescape: true,
    express: app
});

app.use(express.static('public'))
app.use("/", indexRouter)

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})