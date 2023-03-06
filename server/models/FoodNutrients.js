const { Schema } = require("mongoose");

const foodNutrientsSchema = new Schema({
    foodNutrients: {
        number: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        amount: {
            type: String,
            required: true,
        },
        unitName: {
            type: String,
            required: true,
        }
    }
});

module.exports = { foodNutrientsSchema };
