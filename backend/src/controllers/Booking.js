const Model_booking = require('../models/Model_booking');

module.exports = {
    async store(req, res) {
        const { user_id } = req.headers;
        const { spot_id } = req.params;
        const { date }    = req.body;

        const booking = await Model_booking.create({
            user: user_id,
            spot: spot_id,
            date
        });

        await booking.populate('spot').populate('user').execPopulate();

        return res.json(booking);
    }
}