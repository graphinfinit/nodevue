// graphinfinit test
var express = require('express');
var app = express();
var r = require('request')
const cors = require('cors')
app.use(express.json())
app.use(cors())


app.get('/', function (req, res) {
  res.send([
  {"title":"title",
  "body":"This is main route"}
  ]); 
  
});


function sort_by_query(employees,query) {
	sorted_employees = employees.sort(function(a,b) {
	let ai = a[query].toLowerCase(), bi = b[query].toLowerCase()
		if(ai<bi) {return -1}
		if (ai>bi) {return 1}
		else {return 0}
	});
	return sorted_employees;
}


// Отдает массив emloyees /employes?sort=&filter=34:45
app.get('/employee', function(req, res) {
	let age_interval = req.query.filter.split(':')
	const url = 'http://dummy.restapiexample.com/api/v1/employees'
	r(url, (err, response, body) => {
		if (err) {
			return res.status(500).send({message:err});
		} 
		else {
			
		// фильтрация и сортировка
		
		if (body[0] == "{") {
			let body_object = JSON.parse(body);
			let employees = body_object["data"];
			let filtered_employees = employees.filter(function (i) {return Number(age_interval[0])< Number(i.employee_age) && Number(i.employee_age) < Number(age_interval[1])})
			let sorted_employees = sort_by_query(filtered_employees, req.query.sort)
			
			return res.send(sorted_employees);	
			}
		else {return res.send({'Error':'Limit is over. Try this request later'})}
		}
	})
	
});


app.post('/employee', function (req, res) {	
	if (req.body.data.age < 100) {
		let url_post = 'http://dummy.restapiexample.com/api/v1/create';
		r({
			url: url_post,
			method: "POST",
			json: true,
			body: req.body
			}, function (error, response, body){
			res.send(body);
			});	
	}
	else {
		res.send({"Error":'AgeValidationError'});
	}
});

app.listen(3000, () => {console.log("Start app nodevue...")})
