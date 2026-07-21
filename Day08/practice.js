const express = require("express");

const app = express();

app.use("/user",

    (req, res, next) => {
        console.log("First");
        // res.send("Hello Ji");
        next();
        console.log("Sixth");
    },

    (req, res, next) => {
        console.log("Second");
        // res.send("I am second");
        next();
        console.log("Fifth");
    },

    (req, res) => {
        console.log("Third");
        res.send("I am Third");
        console.log("Fourth");
    }
);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});