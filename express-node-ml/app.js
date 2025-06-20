var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require('express-session');

var mainRouter = require('./routes/main');
var usersRouter = require('./routes/users');
var productRouter = require('./routes/product')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session( { secret: "Nuestro TP secreto",
				resave: false,
				saveUninitialized: true }));
      
app.use(function(req, res, next) {
	if (req.session.usuarioLogueado != undefined) {
		res.locals.user = req.session.usuarioLogueado	
     }
return next();
});

app.use(function(req, res, next) {
	if (req.session.usuarioLogueado == undefined && req.cookies.usuarioLogueado != undefined) {
		res.locals.user = req.cookies.usuarioLogueado	
    req.session.usuarioLogueado = req.cookies.usuarioLogueado	
     }
return next();
});

// codigo que se ejecuta

app.use('/', mainRouter);
app.use('/users', usersRouter);
app.use('/product', productRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
