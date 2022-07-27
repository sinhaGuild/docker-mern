require("colors");
require("dotenv").config();
const express = require("express");

const app = express();

const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("<h1>Home Route</h1>");
});

app.listen(PORT, () =>
  console.log(`Server running on PORT ${PORT}, http://localhost:${PORT}`)
);
