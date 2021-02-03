const express = require('express');
const path = require('path');
const helmet = require('helmet')
const logger = require('morgan');

// for .env working
require('dotenv').config()

// router path
const indexRouter = require('./routes/index');

const app = express();

app.use(helmet());
// view engine setup
app.set('view engine', 'ejs');
// para ver os logs no command-line
app.use(logger('dev'));
// middleware para modificar os parametros recebidos para um objecto
app.use(express.json());
app.use(express.urlencoded({extended:false}))
// middleware para dizer ao server onde fica todos os ficheiros staticos
app.use(express.static(path.join(__dirname, 'public')));

// routers
app.use('/', indexRouter);

// error page handler
app.use((req, res) => {
  res.status(404);
  res.send({message: 'Nothing to see were'})
});

app.listen(80, () => {
  console.log('server is up')
})

app.listen(443, () => {
  console.log('server is up')
})