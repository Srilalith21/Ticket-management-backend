const express = require("express");

// Importing the routers modules
const ticketsRoute = require("./src/routers/tickets.route");
const userRoute = require("./src/routers/users.route");

// Importing Middlewares
const morgan = require("morgan");

// Initilise the Application
const app = express();

// Internal Body parser Middleware
app.use((err, req, res, next) => {
  try {
    express.json();
  } catch (error) {
    next(error.message);
  }
});
/**
 * Activity Logging Middleware
 */
app.use(morgan("dev"));

// Application level Router
app.get("/", (req, res) => {
  res.send("Hello from the server");
});

// -------- Router Level routes ---------
/**
 * Tickets Route Handlers
 */
app.use("/api/tickets", ticketsRoute);

/**
 * User Route Handlers
 */
app.use("/api/users", userRoute);

/**
 * Error Route handler
 */
app.use((err, req, res, next) => {
  res.status(400).send(err.message);
});

app.listen(9090, () => {
  console.log("Server Listening at port 9090");
});
