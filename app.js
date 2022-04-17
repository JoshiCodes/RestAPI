const express = require('express');
const path = require('path');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

app.set('json spaces', 4)
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use((req, res, bext) => {
  res.header("Content-Type",'application/json');
})

// catch 404
app.get('*', function(req, res){
    res.status(404).
      json({code: 404, msg: 'The requested Page does not exist. Please have a look at /endpoints'});
});

module.exports = app;
