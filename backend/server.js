const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
/* Loading the environment variables from the .env file. */
dotenv.config();

//
// ─── SET UP SERVER ──────────────────────────────────────────────────────────────
//

/* Creating an instance of express. */
const app = express();

/* Setting the port to 8060. */
const PORT = process.env.PORT || 8060;

/* Starting the server on the port 8060. */
app.listen(PORT, () => console.log(`Successfully Server started on : ${PORT}`));

/* A middleware that parses the body of the request and makes it available in the req.body property. */
app.use(express.json());
/* Parsing the cookie and making it available in the req.cookies property. */
app.use(cookieParser());
/* Allowing the server to accept requests from the client. */
app.use(
  cors({
    origin: ["http://localhost:3000 "],
    credentials: true,
  })
);
app.use(bodyParser.json());

//
// ─── CONNECT TO MONGODB ─────────────────────────────────────────────────────────
//

mongoose.set("strictQuery", false);

// Update the connection code to use a promise instead of a callback
mongoose
  .connect(process.env.DBLINK, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successfully Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

//
// ─── SET UP ROUTES ──────────────────────────────────────────────────────────────
//

//User management routes
app.use("/beaches", require("./routes/beach.route"));
