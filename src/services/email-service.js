const sender = require("../config/emailConfig");
const TicketRepository = require("../repository/ticket-repository");

const ticketRepo = new TicketRepository();

const sendBasicEmail = async (
  senderMailId,
  receiverMailId,
  mailSubject,
  mailBody
) => {
  try {
    const response = await sender.sendMail({
      from: senderMailId,
      to: receiverMailId,
      subject: mailSubject,
      text: mailBody,
    });
  } catch (error) {
    console.log("Something went wrong while sending email", error);
  }
};

const fetchPendingEmails = async () => {
  try {
    const response = await ticketRepo.get({ status: "PENDING" });
    return response;
  } catch (error) {
    console.log(error);
  }
};

const createNotification = async (data) => {
  try {
    const response = await ticketRepo.create(data);
    return response;
  } catch (error) {
    console.log(error);
  }
};

const updateTicketSent = async (ticketId, data) => {
  try {
    const response = await ticketRepo.update(ticketId, data);
    return response;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  sendBasicEmail,
  fetchPendingEmails,
  createNotification,
  updateTicketSent,
};
