const express = require('express')
const app = express()
const bodyParser = require('body-parser')
var mysql      = require('mysql2');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'lewuske',
  password : 'kmjU!r*6]2eKS[]l',
  database : 'lewuske'
});
const port = 2015

async function pobierz(id) {
	let res;
	if (id) {
    	res = await connection.promise().query('SELECT * FROM "uzytkownicy" WHERE id = ' + id);
		console.log(res[0]);
    } else {
    	res = await connection.promise().query('SELECT * FROM uzytkownicy');
		console.log(res[0]);  
    }
	return res[0];
}

async function aktualizuj(id, x, y) {
	let res;
	res = await connection.promise().query('UPDATE tablica SET imie = "' + x + '", nazwisko = "' + y + '" WHERE id = ' + id);
	console.log(res[0]);
	return res[0];
}

async function usun(id) {
	let res;
	res = await connection.promise().query('DELETE FROM tablica WHERE id = ' + id);
    console.log(res[0]);
	return res[0];
}

async function dodaj(id, x, y) {
	let res;
	res = await connection.promise().query(`INSERT INTO tablica VALUES (${id}, "${x}", "${y}")`)
	console.log(res[0]);
	return res[0];
}

app.use(express.static("./strona"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
