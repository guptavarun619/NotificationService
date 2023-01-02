const express = require("express");
const bodyParser = require("body-parser");

const { PORT } = require("./config/serverConfig");

const setupJobs = require("./utils/cron-job");
const TicketController = require("./controllers/ticket-controller");

const initializeServer = () => {
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use("/api/v1/tickets", TicketController.create);

  app.listen(PORT, async () => {
    console.log(`Notification server started at PORT : ${PORT}`);
    setupJobs();
    // sendBasicEmail(
    //   "support@admin.com",
    //   "nw6k5@emergentvillage.org",
    //   "TEST EMAIL",
    //   "This is a test email from notification service"
    // );
  });
};

initializeServer();
