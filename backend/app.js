const express = require('express');
const errorMiddleware = require('./middleware/error')

const app = express();

app.use(express.json())

// Route Imports 
const Prodcuts = require('./routes/prodcutsRoutes');


app.use('/api/v1',Prodcuts)


// Middleware for errors

app.use(errorMiddleware);



module.exports = app;