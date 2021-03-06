const express = require('express');
const app = express();
const multer  = require('multer')({dest: 'uploads/'});
const { connect } = require('./db-config');
const controllers = require('./src/controllers');

// connect to database
connect();

// api endpoints
app.post('/api/v1/providers/upload', multer.single('file'), controllers.providers.upload);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`App listening at http://localhost:${port}`));