const Model_spot = require('../models/Model_spot');
const Model_user = require('../models/Model_user');

module.exports = {

    async index(req, res) {
        const { tech } = req.query;

        const spots = await Model_spot.find({ techs: tech });
        return res.json(spots);
    },

    async store(req, res) {
        const { filename } = req.file;
        const { company, techs, price } = req.body;
        const { user_id } = req.headers;

        const user = await Model_user.findById(user_id);

        if (!user) {
            return res.status(400).json({ error: 'User does not exists' });
        }

        const spot = await Model_spot.create({
           user     : user_id,
           thumbnail: filename,
           company,
           techs: techs.split(',').map(tech => tech.trim()),
           price    
        });
        
        return res.json(spot);
    }
};