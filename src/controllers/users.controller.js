/**
 * Importing tickets data
 */
const ticketsData = require("../models/tickets.model");

exports.getTicketsByUserId = (req, res) => {
  const userId = req.params.userId;
  const tickets =
    ticketsData.filter((item) => item.requesterId == userId) || null;
  if (tickets[0] == undefined) return res.status(200).send("No tickets found");
  res.status(200).send(tickets);
};
