const session = require("express-session");
/** Create Session store for authentication */
const MongoDBStore = require("connect-mongodb-session")(session);

const StoreRef = new MongoDBStore({
  uri: process.env.MONGO_URI,
  collection: "userSessions",
});

//error if session store connection did not work.
StoreRef.on("error", function (error) {
  console.log(`Sessions store could not be retreived. Error: ${error}`);
});

module.exports = StoreRef;
