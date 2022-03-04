const express = require("express");

const app = express();


app.get('/xxx', function (req, res) {
  res.send('Saludos desde express YES');
});

app.listen (8080, () => { 
	console.log("El servidor está inicializado en el puerto 8080");
});

