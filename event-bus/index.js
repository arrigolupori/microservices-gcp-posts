const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post("/events", (req, res) => {
    const event = req.body;

    axios.post("https://redesigned-space-eureka-gww46gjpwqv2vjv9-4000.app.github.dev/events", event).catch((err) => {
        console.log(err.message);
    });
    axios.post("https://redesigned-space-eureka-gww46gjpwqv2vjv9-4001.app.github.dev/events", event).catch((err) => {
        console.log(err.message);
    });
    axios.post("https://redesigned-space-eureka-gww46gjpwqv2vjv9-4002.app.github.dev/events", event).catch((err) => {
        console.log(err.message);
    });

    res.send({ status: "OK" });
});

app.listen(4005, () => {
    console.log("Listening on 4005");
});