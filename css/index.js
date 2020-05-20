var express = require('express')
var app = express()

app.get('/',(req,res) =>{
	res.status(200).send('Hello ra Huka');
});
const port  = 3000;
app.listen(port,() =>{
	console.log('Conneted'${port});
})