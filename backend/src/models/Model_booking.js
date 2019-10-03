const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
    date     : String,
    approved : Boolean,
    user     : {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'Model_user'
    },
    spot: {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'Model_spot'
    }
});

module.exports = mongoose.model('Model_booking', BookingSchema);