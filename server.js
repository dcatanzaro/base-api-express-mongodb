const express = require("express"),
    app = express(),
    port = process.env.PORT || 3100,
    mongoose = require("mongoose"),
    bodyParser = require("body-parser"),
    cors = require("cors"),
    routes = require("./routes");

const urlMongo = "mongodb://localhost:27017/users";

mongoose.connect(urlMongo, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
});

app.use(cors());
app.use(bodyParser.urlencoded({ imit: "50mb", extended: true }));
app.use(bodyParser.json({ limit: "50mb", extended: true }));

routes(app);

app.listen(port);

console.log(`[INFO] RESTful API server started on: ${port}`);
