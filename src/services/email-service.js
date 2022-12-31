const sender = require("../config/emailConfig");

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

module.exports = {
  sendBasicEmail,
};
