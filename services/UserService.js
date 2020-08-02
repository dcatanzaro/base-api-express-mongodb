const User = require("../models/user");

class UserService {
    async getUsers() {
        const users = await User.find().lean();

        return users;
    }
}

module.exports = UserService;
