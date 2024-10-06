require("dotenv").config();
require("express-async-errors");

const express = require("express");
const app = express();

const morgan = require("morgan");

app.use(morgan("tiny"));
app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "api is working" });
});

const port = 8000;

app.listen(port, () => console.log(`listening on: http://localhost:${port}`));
