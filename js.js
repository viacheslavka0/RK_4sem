const http = require('http');
const fs = require('fs');
const PORT = 5500;

const express = require("express");
   
const app = express();
   
const urlencodedParser = express.urlencoded({extended: false});

app.get("/", function (request, response) {
    response.sendFile(__dirname + "/index.html");
});

app.post("/", urlencodedParser, function (request, response) {

    if(!request.body) return response.sendStatus(400);
   
    console.log(request.body);
    
    let JSON = {
       helmet:request.body.helmet,
        diameter:request.body.d,
        manufactor:request.body.manufactor
    };
    response.send(JSON);

    
});

app.listen(5500, ()=>console.log("Сервер запущен..."));

