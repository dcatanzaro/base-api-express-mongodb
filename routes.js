module.exports = (app) => {
    const UserController = require("./controllers/UserController");
    const UserService = require("./services/UserService");
    const userService = new UserService();
    const UserInstance = new UserController(userService);

    app.get("/users", (req, res) => UserInstance.getUsers(req, res));
};
