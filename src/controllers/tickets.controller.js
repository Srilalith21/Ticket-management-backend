/**
 * Importing DATA / MODELS
 */
const ticketsData = require("../models/tickets.model");
const { comments } = require("../models/comments.model");

let tickets_count = 5;

// Sends all the tickets to the client
exports.getAllTickets = (req, res) => {
  res.status(200).send(ticketsData);
};

exports.getTicketById = (req, res, next) => {
  const ticket_id = req.params.id;
  const ticket = ticketsData.find((item) => item.id == ticket_id);
  if (ticket != undefined) {
    res.status(200).send(ticket);
  }
  next();
};

exports.noTicketsAvailable = (req, res) => {
  res.status(404).send(`Resource does not exist for id : ${req.params.id}`);
};

/**
 * Create a new ticket { POST }
 */
exports.addNewTicket = (req, res) => {
  req.body.id = ++tickets_count + 1000;
  ticketsData.push(req.body);
  res.status(200).send(`{ message: "Ticket created successfully" }`);
};

/**
 * Update the status of existing ticket (This activity is only permitted for the IT support team)
 */
exports.updateTicketStatus = (req, res) => {
  // console.log(req.ticket_data);
  req.ticket_data.status = req.body.status;
  res.status(200).send(req.ticket_data);
};

exports.assignTicket = (req, res) => {
  req._ticket.assigneeId = req.body.assigneeId;
  res.status(200).send({ message: "Ticket assigned successfull" });
};

exports.addComments = (req, res, next) => {
  try {
    comments.push(req.body);
  } catch (error) {
    return next(error.message);
  }
  res.status(200).send({ message: "Comments inserted successfully" });
};

