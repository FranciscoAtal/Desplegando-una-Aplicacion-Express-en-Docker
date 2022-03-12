const express = require("express")
const { engine } = require("express-handlebars")
const bodyParser = require("body-parser")
const api = require("./api.js")
const front = require("./front.js")

const port = process.env.PORT || 4000
const app = express()

app.engine('handlebars', engine())
app.set("view engine", "handlebars")
app.set("views", "./views")

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(api)
app.use(front)

app.listen(port, () => {
    console.log(`escuchando en el puerto ${port}`);
})