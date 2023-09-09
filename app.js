const express = require("express");
const adminRoutes = require("./routes/admin");
const mobileRoutes= require("./routes/mobile");
const mongoose = require("mongoose");
const bodyParser = require("body-parser")
const cors= require("cors");
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(cors({
    origin: '*',
    optionsSuccessStatus: 200,
    methods: ['GET' ,'POST' , 'PUT' , 'PATCH' , 'DELETE']
}))


// app.use("/api", adminRoutes);
app.use("/api/mobile",mobileRoutes);
mongoose.connect('mongodb://127.0.0.1:27017/MOBILE').then(result => {
    console.log("connected");
    app.listen(8000);
}
).catch(err => {
    console.log(err);
});
