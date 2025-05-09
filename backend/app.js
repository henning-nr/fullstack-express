var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')
require('dotenv').config()

const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

// Configuração do Swagger
const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'API de Estudantes',
            version: '1.0.0',
            description: 'API para gerenciar estudantes',
        },
        servers: [
            {
                url: 'http://localhost:3000',
                description: 'Servidor local',
            },
            {
                url: process.env.URL_API,
                description: 'Servidor remoto',
            },
        ],
    },
    apis: ['./routes/*.js'], // Caminho para os arquivos de rotas
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

console.log('envirooment', process.env.URL_ORIGIN)

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var studentsRouter = require('./routes/students')
var teachersRouter = require('./routes/teachers')

var app = express();

app.use(cors(
  {
    origin: [process.env.URL_ORIGIN, process.env.URL_API],
    methods: ['GET', 'POST', 'PUT', 'DELETE']
  }
))

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/students', studentsRouter)
app.use('/teachers', teachersRouter)

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
