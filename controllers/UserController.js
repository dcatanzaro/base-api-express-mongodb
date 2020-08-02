class UserController {
    constructor(userService) {
        this.userService = userService;
    }

    async getUsers(req, res) {
        try {
            const users = await this.userService.getUsers();

            return res.json(users);
        } catch (e) {
            return res.status(500).json({ err: true, message: e.message });
        }
    }
}

module.exports = UserController;
