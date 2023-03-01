//import { express } from "express";



const express = require('express');

const cors = require('cors')

var corsOptions = {
	origin: 'http://localhost:4200',
	//domain được phép gọi request mà server chấp nhận (vd: request đến từ http://localhost:4200  được server cho phép), 
	//giả sử node server là http://localhost:8000
	optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
};
const app = express();
app.use(cors(corsOptions));


app.listen(8000, () => {
	console.log('Server started!');
});

app.route('/api/get').get((req, res) => {
	console.log('items');
	res.send([{ Name: 'Asus', id: 'id1', Price: '3000$' }, { Name: 'Acer', id: 'id2', Price: '5000$' }, { Name: 'MSI', id: 'id3', Price: '4000$' }]
	);
});

// dung cho phan insert
app.route('/api/insert').post((req, res) => {

	console.log('insert item');
	console.log('item info:' + req.body);
	console.log('item info:' + req.body);
	console.log('item info:' + req.body);
	//res.send(201, req.body);
	res.status(201).send(req.body);
});


app.route('/api/delete').delete((req, res) => {

	console.log('delete item');
	console.log('item info:' + req.body);
	console.log('item info:' + req.body);
	console.log('item info:' + req.body);
	//res.send(201, req.body);
	//res.status(201).send(req.body);
});

app.route('/api/update').get((req, res) => {

	console.log('update item');
	console.log('item info:' + req.body);
	console.log('item info:' + req.body);
	console.log('item info:' + req.body);
	//res.send(201, req.body);
	//res.status(201).send(req.body);
});

