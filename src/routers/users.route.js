const express = require("express");
const router = express.Router();

const userController = require("../controllers/users.controller");

// # TODO -- LIST USER ID TICKETS
router.get("/:userId/tickets", userController.getTicketsByUserId);

// Error handler
router.use((err, req, res, next) => {
  if (err) {
    return res.status(400).send(err.message);
  }
  next();
});

// Invalid Route handler
router.use("/", (req, res) => {
  res.status(404).send(`Cannot Get Route ${req.url}`);
});

module.exports = router;
