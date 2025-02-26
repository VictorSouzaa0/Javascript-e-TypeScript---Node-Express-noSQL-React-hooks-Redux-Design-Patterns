const express =  require('express');
const  app =  express();

//CRUD -> CREATE -> READ -> UPDATE -> DELETE
//         POST      GET      PUT     DELETE
//http://mysite.com/ <- GET -> Entregue a página

//criando a rota
app.get('/', (req, res) => {
    res.send(`
    <form action="" method="post">
    Client Name: <input type="text" name="name">
    <button>SUBMIT</button>
    </form>
        `)
}) ;

app.get('/contact', (req,res) =>{
    res.send('<h1>CONTACT<h1>')
})

let PORT = 3000;

app.listen(PORT, () =>{
    console.log(`http://localhost:${PORT}`)
    console.log(`SERVIDOR RODANDO NA PORTA ${PORT}`)
})