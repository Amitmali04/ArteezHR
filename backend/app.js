const express = require('express');
require('dotenv').config();

const cors = require('cors');

const app = express();
const mongoose = require('mongoose');

require('./database/conn');

const contact = require('./Modals/ContactUsSchema');

const PORT = process.env.PORT || 8003;

const routes = require('./Routes/routes');

app.use(cors());
app.use(express.json());
app.use(routes);



app.listen(PORT, () =>{
    console.log('Server is Running' , PORT)
})