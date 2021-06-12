const express = require("express");
const db = require("./data/dataBase")
const estudios = require("./routes/estudio.routes")
const titulos = require("./routes/titulo.routes")

db.connect()

const app = express()
app.use(express.json())


app.use("/estudios", estudios )
app.use("/titulos", titulos)




module.exports = app