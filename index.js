const express = require('express') // estou chamando tudo que tem dentro do pacote express
const app = express() //executando ele e colocando dentro da app

app.get('/', (req, res) => {
  res.send('Hello World')
}) // get e o petodo http de pegar alguma coisa, quando o usuario acessar a rota barra, temos uma função de callback (função executada por traz de outra, no caso, a get) que vai retornar a resposta.

app.listen(3000) // vai rodar o sistema na porta 300 do localhost