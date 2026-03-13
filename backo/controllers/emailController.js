const sendEmail = require("../utils/sendEmail");

exports.sendTestEmail = async (req, res) => {

    try {

        const { to, subject, text } = req.body;

        await sendEmail(to, subject, text);

        res.json({ message: "Email sent successfully" });

    } catch (err) {

        res.status(500).json({ error: err.message });

    }

};