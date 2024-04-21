const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

app.use(express.urlencoded({extended:true})); // when client side, our form will submited so that data express will udnderstand thats why it will be used

// set path of views
app.set("view engine", "ejs");
app.set("views", path.join(__dirname,"views"));
app.use(express.static(path.join (__dirname,"public")));

let users =[
    {   
        username :"omkardaswadkar___",
        image : "https://plus.unsplash.com/premium_photo-1677545182067-26ac518ef64f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2F0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        caption : " this is caption",
        followers : 25000,
        following : 5,
        likes : 200,
    },
    {
        username :"shubzz",
        image : "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        caption : "this is caption 2 ....",
        followers : 25000,
        following : 5,
        likes : 20,
    },
    {
        username :"rohandeshmukh",
        image : "https://images.unsplash.com/photo-1577023311546-cdc07a8454d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2F0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        caption : "this is caption 3...",
        followers : 25000,
        following : 5,
        likes : 6000,
    },
    {
        username :"roshan_koditkar_012",
        image : "https://images.unsplash.com/photo-1598133894008-61f7fdb8cc3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZG9nc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        caption : "this is caption 3...",
        followers : 25000,
        following : 5,
        likes : 6000,
    },
    {
        username :"yash3672",
        image : "https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGRvZ3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
        caption : "this is caption 3...",
        followers : 25000,
        following : 5,
        likes : 6000,
    },
    {
        username :"surajaaa...",
        image : "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGRvZ3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
        caption : "this is caption 3...",
        followers : 25000,
        following : 5,
        likes : 6000,
    },

];


//home index route
app.get("/instagram",(req,res)=>{
    res.render("index.ejs",{users});
});

//user
app.get("/instagram/username", (req,res)=>{
    let {username} = req.params;
    let user = users.find((u) => username == u.username);
    res.render("user.ejs",{user});
});








app.listen(port,()=>{
    console.log(`lisining port ${port}`);
});
