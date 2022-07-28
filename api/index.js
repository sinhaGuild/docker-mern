require("colors");
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./db/connectDB");
const session = require("express-session");

const PORT = process.env.PORT || 4000;
const st = `Server is listening on PORT ${PORT}...`;
const app = express();

/** Basic express options */
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

/** Authentication session store */
app.use(
  session({
    store: require("./db/connectStore"),
    resave: true,
    saveUninitialized: true,
    secret: process.env.SESSION_SECRET || "Secret",
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7, // 1w
    },
  })
);

/** Routes */
//Posts
app.use("/posts", require("./routes/postRoutes"));
//Users, Auth
app.use("/users", require("./routes/userRoutes"));

/** Start Server with async for future await microservices (like db, lambda functions etc.) */
const startServer = async () => {
  try {
    //connect to the database
    await connectDB(process.env.MONGO_URI);
    //base route
    app.get("/", (req, res) => {
      res.status(200).send(`<h1>${st}</h1><hr />`);
    });
    //start server
    app.listen(PORT, () => console.log(`${st}`.magenta.italic));
  } catch (error) {
    console.log(`Server failed with err ${error}`.bgRed.italic);
  }
};

startServer();
