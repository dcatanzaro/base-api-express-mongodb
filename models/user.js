const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    email: String,
});

module.exports = mongoose.model("user", userSchema);
