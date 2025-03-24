const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000

const app = express()

app.use('/api/clients',require('./routes/SafeRoutes'))
app.listen(port,() => console.log(`radhe radhe server started at ${port}`));

