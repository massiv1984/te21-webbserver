const express = require("express")
const router = express.Router()

router.get("/", function (req, res) {
  res.render('index.njk', { title: 'SMAUELS SPAGHETTERIA' })
})

router.get("/about", function (req, res) {
  res.render('about.njk', { title: 'SMAUEL SER DIG' })
})

module.exports = router