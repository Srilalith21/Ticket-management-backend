// Importing the ticket Data
const ticketData = require("../models/tickets.model");

exports.validateTheTicketFields = (req, res, next) => {
  const ticket_fields = [
    "title",
    "description",
    "requesterId",
    "assigneeId",
    "category",
    "priority",
    "status",
    "createdAt",
  ];

  const body = req.body;
  const keys = Object.keys(body);
  const excluded_fields = []; // Store the fields that are not present in the request body

  ticket_fields.forEach((item) => {
    if (keys.includes(item) == false) {
      excluded_fields.push(item);
    }
  });

  if (excluded_fields.length > 0) {
    return res.status(400).send(`Missing fields ${[...excluded_fields]}`);
  }

  next();
};

/**
 * This method is incomplete (IC-1)
 */
// exports.validateTheTicketIssuer = (req, res, next) => {};

exports.checkExistanceOfTicket = (req, res, next) => {
  const ticket_id = req.params?.id || null;

  let ticket = ticketData.find((item) => item?.id == ticket_id) || null;

  if (!ticket) {
    return res.status(400).send(`{
          "message" : "No ticket found by ID : ${ticket_id}"
        }`);
  }

  req.ticket_data = ticket;
  next();
};

exports.validateTicketStatus = (req, res, next) => {
  const format = ["OPEN", "IN_PROGRESS", "RESOLVED"];
  format.find((item) => item === req.body.status)
    ? next()
    : res.status(400).send({ message: `Cannot set state ${req.body.status}` });
};

exports.findTicket = (req, res, next) => {
  const ticket =
    ticketData.find((item) => (item.id = parseInt(req.params.id))) || null;

  if (ticket != null) {
    req._ticket = ticket;
    return next();
  }
  res.status(400).send({ message: `No ticket found by id : ${req.param.id}` });
};

exports.validateCommentFields = (req, res, next) => {
  const fields = ["id", "ticketId", "userId", "message", "createdAt"];

  const keys = Object.keys(req.body);
  const excluded_keys = [];

  fields.forEach((item) => {
    if (keys.includes(item) == false) {
      excluded_keys.push(item);
    }
  });

  if (excluded_keys.length > 0) {
    return res.status(400).send(`Missing fields {${[...excluded_keys]}}`);
  }

  next();
};
