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

const subscribeEvents = async (payload) => {
  let service = payload.service;
  let data = payload.data;
  switch (service) {
    case "CREATE_TICKET":
      await createNotification(data);
      break;
    case "SEND_BASIC_EMAIL":
      await sendBasicEmail(data);
      break;
    default:
      console.log("No valid event received");
      break;
  }
  // console.log("Inside service layer", data);
};

module.exports = {
  sendBasicEmail,
  fetchPendingEmails,
  createNotification,
  updateTicketSent,
  subscribeEvents,
};
