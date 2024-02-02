const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 3001;

const app = express();

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

app.get("/", (req, res) => res.send("hello world"));
