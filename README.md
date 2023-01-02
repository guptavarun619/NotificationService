# Notification Service

Microservice to send notification email(s) via api that can also be scheduled.

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

Create a `config.json` file in directory : `./src/config/` for database configuration and the following json to it :

```
{
  "development": {
    "username": `<YOUR_DB_USER_NAME>`,
    "password": `<YOUR_DB_PASSWORD>`,
    "database": "NOTIFICATION_DB_DEV", // <DB_NAME>
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```

Now inorder to create the database for this project, go to `./src/` directory and run the following command :

```
npx sequelize db:create
```

To create all the tables from the migration, run (from `./src` directory) :

```
npx sequelize db:migrate
```

To run the app, run the following command in the root directory

```
npm start
```

The server would be started at `<PORT_NUMBER>` specified in the `.env` file
