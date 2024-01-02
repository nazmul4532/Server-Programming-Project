const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: "markooziut@gmail.com",
        pass: "wubv spei sofg hjcl",
    },
});

module.exports = transporter;
