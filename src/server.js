// yarn dev - to start the server

const express = require('express');
const routes = require('./routes');
const nunjucks = require('nunjucks');
const bodyParser = require('body-parser');

require('./database');

const app = express();

app.use(express.json());
app.use(routes);
app.listen(3333);

console.log("Listen on port 3333...");
console.log("Check the connection with postgres...")

// BODY-PARSER CONFIGURATION
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
extended: true
}));

// PAGES - HTML 
let env = nunjucks.configure('views', {
    autoescape: true,
    express: app
});

app.set('engine', env);

app.set('views', __dirname + '/views');

app.set('view engine', 'html');

app.get('/', function(req, res){
    res.render('home.html');
});



