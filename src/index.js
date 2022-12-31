const express = require("express");
const bodyParser = require("body-parser");

// const { sendBasicEmail } = require("./services/email-service");

const { PORT } = require("./config/serverConfig");

const initializeServer = () => {
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.listen(PORT, async () => {
    console.log(`Notification server started at PORT : ${PORT}`);

    // sendBasicEmail(
    //   "support@admin.com",
    //   "nw6k5@emergentvillage.org",
    //   "TEST EMAIL",
    //   "This is a test email from notification service"
    // );
  });
};

initializeServer();
