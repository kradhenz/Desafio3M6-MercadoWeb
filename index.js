const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const port = 3000;

// Templates engine
app.set('view engine', 'hbs');
app.engine('hbs', exphbs.engine({
    extname: 'hbs',
}));

// Templates directory
app.set('views', __dirname + '/views'); 

// Static Files 
app.use(express.static('assets'));
app.use('/bootstrap', express.static('node_modules/bootstrap/dist'));

const products = ['banana', 'cebollas', 'lechuga', 'papas', 'pimenton', 'tomate'];

// Main route
app.get('/', (req, res) => {
    res.render('home', {products});
});

// Undefined route managament
app.get('*', (req, res) => {
    res.send('<center><h1>This page does not exist...👻</h1></center>');
});

// Express server
app.listen(port, () => {
    console.log(`Server running on port http://localhost:${port}`);
});