const express = require("express");
const app = express();

const emailRoutes = require("./routes/emailRoutes");

app.use("/api/email", emailRoutes);

app.get("/", (req, res) => {
    res.send("Server working");
});

app.listen(5000, () => {
    console.log("Server running");
});