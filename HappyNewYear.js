const express = require("express");
const path = require("path");
const route = require("./route1");

const app = express();

app.set("port", process.env.PORT || 1234);

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./main.html"));
});

app.use("/happyURL", route);

app.listen(app.get("port"), () => {
    console.log(`server is running at http://localhost:${app.get("port")}`);
});
