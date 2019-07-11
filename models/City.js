const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const citySchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: false,
        },
        tour_id: {
            type: Schema.Types.ObjectId, ref: 'Tour',
            required: true,
        }
    },
    {
        timestamps: true   
    }
);

const City = mongoose.model('City', citySchema);

module.exports = City;