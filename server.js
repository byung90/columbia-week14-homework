const express = require('express');
const path = require('path');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const exphbs = require('express-hanlebars');
const sequelize = require('./config/connection');
const helpers = require('./utils/helpers');

const hbs = exphbs.create({ helpers });

//Set up Express App
const app = express();
const PORT = process.env.PORT || 3000;

// Create sequelize store with express-session
const sess = {
  secret: 'SECRET', // key to sign the cookie
  cookie: { expires: 3600000 },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  })
};

app.use(session(sess));
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urleconded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(require('./controllers'));

sequelize.sync({ force: false }).then() => {
  app.listen(PORT, () => console.log('Now listening'));
}