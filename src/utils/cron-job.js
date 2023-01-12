const cron = require("node-cron");
const sender = require("../config/emailConfig");
const emailService = require("../services/email-service");
/**
 * 10:00am
 * Every 5 minutes
 * Check for 'pending' emails which are expected to be sent by now
 */

const setupJobs = () => {
  cron.schedule("*/10 * * * *", async () => {
    const response = await emailService.fetchPendingEmails();
    response.forEach((email) => {
      sender.sendMail(
        {
          to: email.recepientEmail,
          subject: email.subject,
          text: email.content,
        },
        async (err, data) => {
          if (err) {
            console.log(err);
          } else {
            console.log(data);
            await emailService.updateTicketSent(email.id, {
              status: "SUCCESS",
            });
          }
        }
      );
    });
    console.log(response);
  });
};

module.exports = setupJobs;
