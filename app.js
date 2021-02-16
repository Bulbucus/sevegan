const fs = require('fs');
const http = require('http');
const https = require('https');
const express = require('express');
const path = require('path');
const logger = require('morgan');

// for .env working
require('dotenv').config()

// router path
const indexRouter = require('./routes/index');

// Certificate
const privateKey = fs.readFileSync('/etc/letsencrypt/live/sevegan.xyz/privkey.pem', 'utf8');
const certificate = fs.readFileSync('/etc/letsencrypt/live/sevegan.xyz/cert.pem', 'utf8');
const ca = fs.readFileSync('/etc/letsencrypt/live/sevegan.xyz/chain.pem', 'utf8');

const credentials = {
	key: privateKey,
	cert: certificate,
	ca: ca
};

const app = express();

// view engine setup
app.set('view engine', 'ejs');
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
const httpsServer = https.createServer(credentials, app);

httpsServer.listen(443, () => {
	console.log('HTTPS Server running on port 443');
});
