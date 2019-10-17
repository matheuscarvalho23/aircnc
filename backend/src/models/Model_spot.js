const mongoose = require('mongoose');

const SpotSchema = new mongoose.Schema({
    thumbnail : String,
    company   : String,
    price     : Number,
    techs     : [String],
    user      : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Model_user'
    }
}, {
    toJSON: {
        virtuals: true
    }
});

SpotSchema.virtual('thumbnail_url').get(function() {
   return `http://192.168.0.106:3333/files/${this.thumbnail}`; 
});

module.exports = mongoose.model('Model_spot', SpotSchema);