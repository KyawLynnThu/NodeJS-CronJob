const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const customCron = require("./cron");

customCron.sendMailAllUser();

mongoose.connect(process.env.DATABASE).then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
  });
});
