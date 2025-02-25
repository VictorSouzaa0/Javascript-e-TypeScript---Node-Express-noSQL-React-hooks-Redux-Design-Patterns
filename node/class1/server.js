
//cria a variável express para importar o express
const express = require('express');
//cria o app para trabalhar com o express
const app = express();
const routes = require('./routes')

app.use(express.urlencoded({extended: true}))
app.use(routes)
//       Criar let atualizar apagar
//CRUD -> CREATE, READ , UPDATE, DELETE
//        POST    GET     PUT    DELETE


//criando um rota para o app
app.get('/',(req,res) => {
    res.send('Hello World! ');
})
//criando a varíavel onde será usada a porta para rodar o servidor
const PORT = 3000

app.listen(PORT, () => {
    console.log(`Access: http://localhost:${PORT}`)
    console.log('Server has executing')
})