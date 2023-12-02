const User = require("./models/userModel");
const config = require("./config/config");
const nodemailer = require("nodemailer");
const cron = require("node-cron");

const sendMailToAllUsers = async (emailObj) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
      user: config.emailUser,
      pass: config.emailPassword,
    },
  });

  const mailOptions = {
    from: "Node Project",
    to: emailObj,
    subject: "Cron Test Mail",
    html: "<p>Hii this is cron testing mail</p>",
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Mail has been sent: -", info.response);
    }
  });
};

const sendMailAllUser = () => {
  try {
    // * * * * * * = second minute hour day(month) month day(week)
    cron.schedule("*/10 * * * * *", async function () {
      var userData = await User.find({});

      if (userData.length > 0) {
        var emails = [];
        userData.map((key) => {
          emails.push(key.email);
        });

        sendMailToAllUsers(emails);
      }
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  sendMailAllUser,
};
