const express = require("express");
const cors = require("cors");
const requireDir = require("require-dir");

require("dotenv/config");

requireDir("./models");
requireDir("./config");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api", require("./routes"));

app.listen(process.env.PORT || 3000);
