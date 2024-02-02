const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const path = require("path");
const port = process.env.PORT || 3001;

const bodyParser = require("body-parser");


const initializeDbAndServer = async () => {
    try {
      connection.connect((err) => {
        if (err) {
          console.error("Error connecting to MySQL database: ", err);
          return;
        }
        console.log("Connected to MySQL database");
      });
      app.listen(port, () => console.log(`Example app listening on port ${port}!`));
    } catch (error) {
      console.log(`Data base Error is ${error}`);
      process.exit(1);
    }
  };
  
  initializeDbAndServer();

app.get("/", (req, res) => res.send("hello world"));

