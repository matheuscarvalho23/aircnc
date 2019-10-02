const mongoose = require('mongoose');

const SpotSchema = new mongoose.Schema({
    image  : String,
    company: String,
    price  : Number,
    techs  : [String],
    user   : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Model_user'
    }
});

module.exports = mongoose.model('Model_spot', SpotSchema);