const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

// set path of views
app.set("view engine", "ejs");
app.set("views", path.join(__dirname,"views"));
app.use(express.static(path.join (__dirname,"public")));

app.get("/instagram",(req,res)=>{
    res.render("index.ejs");
});









app.listen(port,()=>{
    console.log(`lisining port ${port}`);
});
