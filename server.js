const path = require('path');
const express = require('express');
const session = require('express-session');



const app = express();




app.set('view-engine', 'ejs');
app.use(express.static(__dirname));
app.use(express.urlencoded({ extended: false}))


app.get("./", (req, res) => {
  res.sendFile(__dirname + "./index.html");
});

app.get('./login-register', (req, res) => {
  res.render('./login-register.ejs')
});

app.post('./login-register', (req, res) => {

});



const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

const helpers = require('./utils/helpers');
const { Server } = require('http');






app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./controllers/'));

app.listen(3001, () => {
  console.log('on port 3001');
});