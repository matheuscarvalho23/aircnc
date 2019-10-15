const Model_spot = require('../models/Model_spot');

module.exports = {
    async show(req, res) {
        const { user_id } = req.headers;

        const spots = await Model_spot.find({user: user_id});

        return res.json(spots);
    }
}