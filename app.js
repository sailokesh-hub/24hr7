const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const path = require("path");

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
      app.listen(3002, () => {
        console.log("Server Is running on http://localhost:3002");
      });
    } catch (error) {
      console.log(`Data base Error is ${error}`);
      process.exit(1);
    }
  };
  
  initializeDbAndServer();

