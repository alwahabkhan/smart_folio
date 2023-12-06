const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config();

const app = express();
app.use(cors('*'));
app.use(express.json())
// app.use("/", indexRouter);
app.use("/user", require("./app/routes/user/users"));
app.use("/cover-letter", require("./app/routes/main/coverLetterRoute"));


mongoose.connect(process.env.db)
app.listen(process.env.PORT,()=>{
    console.log('listening on port ', process.env.PORT)
})