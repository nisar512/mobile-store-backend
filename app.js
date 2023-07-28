const express=require("express");
const mongoose=require("mongoose");
const bodyParser=require("body-parser")
const app= express();
app.use(bodyParser.json());
mongoose.connect('mongodb://127.0.0.1:27017/MOBILE').then(result => {
    console.log("connected");   
    app.listen(8000);
}
).catch(err => {
    console.log(err);
});
