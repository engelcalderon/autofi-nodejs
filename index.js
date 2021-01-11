const express = require('express');
const app = express();
const { connect } = require('./db-config');

// connect to database
connect();

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`App listening at http://localhost:${port}`));