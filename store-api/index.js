//Modulo
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express()

//Middlewares
app.use(express.json())
app.use(cors());
app.use(morgan('dev'))
//settings
app.set('port', process.env.PORT || 3000);

// Routes
app.use('/api/store',require('./routes/store'));

// Starting the server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'), '...');
})

