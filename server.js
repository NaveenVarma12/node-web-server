const express = require('express');
const hbs = require('hbs');

const port = process.env.PORT || 3000;
var app = express();

hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs');
app.use(express.static(__dirname+'/public'));

// app.use((req, res, next) => {
//   res.render('maintainance.hbs');
// });

hbs.registerHelper('getCurrentYear', ()=>{
  return new Date().getFullYear()
});

hbs.registerHelper('screamIt', (text)=>{
  return text.toUpperCase();
})

app.get('/', (req, res)=>{
 res.render('home.hbs', {
   pageTitle : 'Home Page',
   message: 'Welcome'
 });
});

app.get('/projects', (req, res) => {
  res.render('projects.hbs', {
    pageTitle:'Projects'
  });
});

app.get('/about',(req, res)=>{
  res.render('about.hbs',{
    pageTitle : 'About Page',
  });
});

app.listen(port, () => {
  console.log(`server is on port ${port}`);
});
