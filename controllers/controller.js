const People = require("../models/people");

async function add(req, res){
    try{
        const person = req.body;
        await People.create(person);
        res.status(200).redirect("/");
    }
    catch (err) {
        console.log(err);
        res.status(500).send("Error!");
    }
}

async function display(req, res){
    try{
        const people = await People.find();
        const length = people.length;
        res.render("index", {
            people: people,
            length: length
        });
    }
    catch (err) {
        console.log(err);
        res.status(500).send("Error!");
    }
}

async function api(req, res){
    try{
        const people = await People.find();
        res.json(people);
    }
    catch (err) {
        console.log(err);
        res.status(500).send("Error!");
    }
}

module.exports = {
    add,
    display,
    api
};