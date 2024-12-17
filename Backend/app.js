const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const {router} = require('./Routers/taskRoutes');
dotenv.config();

const app = new express();

app.use(express.json());
app.use('/tasks',router);

app.listen(process.env.PORT,()=>{
    console.log('Listening');
    console.log(process.env.MONGOOSE_PATH); // This should print the correct MongoDB URI
    mongoose.connect(process.env.MONGOOSE_PATH).then(()=>{
        console.log('connected :)');
    })
    })

