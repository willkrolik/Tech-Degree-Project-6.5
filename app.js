const express = require('express');
const data = require('./data.json');
const app = express();
const {
    projects
} = data;

app.set('view engine', 'pug');

app.use('/static', express.static('public'));

app.get('/', (req, res) => {
    res.render('index', {
        projects: projects
    });
});

app.get('/project/:id', (req, res) => {
    res.render('project', { data: data, id: req.params.id });
  });

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/layout', (req, res) => {
    res.render('layout');
});

app.get('/project/:id', (req, res) => {
    res.render('project', { data, id: req.params.id });
  });
  
app.use((req, res, next) => {
    const err = new Error('Page Not Found ');
    err.status = 404;
    next(err);
  });
  
app.use((err, req, res, next) => {
    res.locals.error = err;
    res.render('error');
  });

app.listen(3000, () => {
    console.log('Your app is ready!')
});