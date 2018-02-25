console.log('server is starting')
var express = require('express')
var app = express()
app.set('view engine', 'ejs');

var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: true }); // for parsing form data
app.use(urlencodedParser);


//to display garbage.htmnl




app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})





//REQUEST AND RESPONSE

app.get('/', function (req, res) {
  res.send('Hello World!');
});

// getting a query sring vaue
app.get('/a', function(req, res) {
  var textvalue = req.query.name;
	 var data = {name: textvalue};
    res.render('names_patch.ejs', data);
});

//for the input box and submit

app.get('/garbage', function(req, res) {
    res.render('garbage.ejs');
});
//posting to harbage
app.post('/garbage', function(req, res) {
    var textvalue = req.body.textfield;
    var data = {name: textvalue};

    res.render('names_patch.ejs', data);
});
