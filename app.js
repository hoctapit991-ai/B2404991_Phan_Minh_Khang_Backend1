const contactRouter = require("./app/routes/contact.route.js");
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/contacts", contactRouter);

module.exports = app;
