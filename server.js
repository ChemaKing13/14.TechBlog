// Dependencies
const express = require('express');
// Import express-handlebars
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
const path = require('path');
const moment = require('moment');


// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3001;

// Describe what the following two lines of code are doing.
// The following two lines of code are setting Handlebars.js as the default template engine.
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, 'public')));
app.use(require('./controllers/homeRoutes'));

  

// Starts the server to begin listening
app.listen(PORT, () => {
    console.log('Server listening on: http://localhost:' + PORT);
});



// Register the format_date helper
hbs.handlebars.registerHelper('format_date', (date) => {
  return moment(date).format('MMM DD, YYYY');
});

