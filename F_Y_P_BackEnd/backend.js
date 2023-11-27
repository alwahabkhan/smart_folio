const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config();

const app = express();
app.use(cors('*'));
// app.use("/", indexRouter);
app.use("/user", require("./app/routes/users"));

app.use(express.json())
mongoose.connect(process.env.db)
app.listen(process.env.PORT,()=>{
    console.log('listening on port ', process.env.PORT)
})