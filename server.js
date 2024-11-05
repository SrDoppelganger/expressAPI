//faz a conexão com o banco de dados
var express = require('express'); // chama o express
var app = express();//usado para representar o express
var fs = require('fs'); // usado para representar o File System

// Pega a lista de usuários
app.get('/getUsers', function(req, res){
    fs.readFile(__dirname + "/" + "users.json", 'utf8', function(err, data){
        console.log(data);
        res.end(data); // you can also use res.send()
    });
})

// Cria um servidor na porta 8080
var server = app.listen(8080, function(){
    var host = server.address().address
    var port = server.address().port
    console.log("REST API demo app listening at http://%s:%s", host, port)
})