const express = require("express");
const router = express.Router();

// Importing Middlewares
const ticketsMiddleware = require("../middlewares/ticket.middleware");
const authMiddleware = require("../middlewares/auth.middleware");

// Importing Router handler from controller
const ticketsController = require("../controllers/tickets.controller");

router.use(express.json());

router.get("/", ticketsController.getAllTickets);

router.get(
  "/:id",
  ticketsController.getTicketById,
  ticketsController.noTicketsAvailable,
);

router.post(
  "/",
  ticketsMiddleware.validateTheTicketFields,
  ticketsController.addNewTicket,
);

router.patch(
  "/:id/status",
  ticketsMiddleware.checkExistanceOfTicket,
  ticketsMiddleware.validateTicketStatus,
  ticketsController.updateTicketStatus,
);

router.patch(
  "/:id/assign",
  authMiddleware.authenticateTheAssigner,
  ticketsMiddleware.findTicket,
  ticketsController.assignTicket,
);

router.post(
  "/:id/comments",

  ticketsMiddleware.validateCommentFields,
  ticketsController.addComments,
);

/**
 * Error handler
 */
router.use((err, req, res, next) => {
  if (err) {
    return res.status(500).send(`Internal server error ${err}`);
  }
  next();
});
/**
 * Invalid route handler
 */
router.use("/", (req, res) => {
  res.status(404).send(`Cannot Get Route ${req.url}`);
});

module.exports = router;
