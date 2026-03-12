const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "elyasarshath6963@gmail.com",
        pass: "xdzeplnellslyruy"
    }
});

async function sendEmail(to, subject, text) {

    await transporter.sendMail({
        from: "a54527177@gmail.com",
        to: [
            "a54527177@gmail.com",
            "arshabinhami@gmail.com",
            "asgar81244@gmail.com"
        ],
        subject: subject,
        text: text
    });

}

module.exports = sendEmail;