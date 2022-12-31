# Notification Service

Microservice to send emails that can be scheduled.

## Project Setup

Install all the dependencies by running the following command in the root directory

```
npm install
```

Create a `.env` file in the root directory and add the following varialbles

```
PORT = <PORT_NUMBER>
EMAIL_ID = <YOUR_SMPT_EMAIL_ID>
EMAIL_PASS = <YOUR_SMTP_EMAIL_PASSWORD>
```

To run the app, run the following command in the root directory

```
npm start
```

The server would be started at `<PORT_NUMBER>` specified in the `.env` file
