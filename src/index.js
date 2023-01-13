const express = require("express");
const bodyParser = require("body-parser");

const { PORT } = require("./config/serverConfig");
const { NOTIFICATION_BINDING_KEY } = require("./config/serverConfig");
const { createChannel, subscribeMessage } = require("./utils/messageQueue");
const EmailService = require("./services/email-service");

const setupJobs = require("./utils/cron-job");
const TicketController = require("./controllers/ticket-controller");

const initializeServer = async () => {
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.get("/notification/api/v1/ping", (req, res) => {
    return res.json({ message: "Response from Notificatoin service" });
  });
  app.use("/notification/api/v1/tickets", TicketController.create);

  const channel = await createChannel();
  subscribeMessage(
    channel,
    EmailService.subscribeEvents,
    NOTIFICATION_BINDING_KEY
  );

  app.listen(PORT, async () => {
    console.log(`Notification server started at PORT : ${PORT}`);
    setupJobs();
  });
};

initializeServer();
