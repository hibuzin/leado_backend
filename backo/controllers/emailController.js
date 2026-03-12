const sendEmail = require("../utils/sendEmail");

exports.sendTestEmail = async (req, res) => {

    try {

        await sendEmail(
            "a54527177@gmail.com",
            "Welcome",
            "hiiiiii"
        );

        res.json({ message: "Email sent successfully" });

    } catch (err) {

        console.error(err);

        res.status(500).json({ error: err.message });

    }

};