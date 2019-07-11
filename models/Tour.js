const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tourSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        duration: {
            type: Number,
            required: false,
        },
        price: {
            type: Number,
            required: false,
        }
    },
    {
        timestamps: true
    }
);

const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;