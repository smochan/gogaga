const express = require("express");
const database = require("./database");
require("dotenv").config();
const { add, display, api}= require("./controllers/controller");

const app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

const start = async () => {
    await database.connect();

    app.get("/", display);
    app.get("/api", api);
    
    app.post("/", add);
    
    const port = process.env.PORT || 3000;
    app.listen(port, function(){
        console.log(`Server started on port ${port}`);
    })
}

start();