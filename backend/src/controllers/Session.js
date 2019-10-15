const Model_user = require('../models/Model_user')

module.exports = {
    async store(req, res) {
        const {email} = req.body;

        let user = await Model_user.findOne({email});

        if (!user) {
            user = await Model_user.create({ email });
        }

        return res.json(user);
    }
};