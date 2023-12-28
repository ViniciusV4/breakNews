const express = require('express') // estou chamando tudo que tem dentro do pacote express

const userRoute = require("./src/routes/user.route")
const app = express() //executando ele e colocando dentro da app

app.use("/soma", userRoute)

app.listen(3000) // vai rodar o sistema na porta 300 do localhost