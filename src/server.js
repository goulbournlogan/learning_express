const express = require("express");

const app = express();

app.use(express.json());

const myFunction = (req, res, next) => {
    console.log("this happens first")
}

app.get("/", (req, res) => {
    console.log("test123");
    res.send("hqwewqerr");
});

app.get("/data", (req, res) => {
    console.log(req.query)
    res.send({ message: req.query});
});

 app.get("/something", (req, res) => {
     res.send({name: "logan", age:35});
 });

 app.get("/person/:id", (req, res) => {
    console.log(req.params.id);
    res.send("wqer");
 })

app.listen(5000, () => {
    console.log("listening on port 5000")
});