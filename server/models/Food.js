const { Schema } = require("mongoose");
const { foodNutrientsSchema } = require('./FoodNutrients')

const foodSchema = new Schema({
  fdcId: {
    type: Number,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  dataType: {
    type: String,

    required: true,
  },
  foodClass: {
    type: String,
    required: true,
  },
  publicationDate: {
    type: String,
    required: true,

    //required: true,
    required: false,
    // unique: true,
  },

  brandOwner: {
    type: String,

    required: true,
  },
  brandName: {
    type: String,
    required: true,
  },
  servingSize: {
    //required: true,
    required: false,
   // unique: true,
  },
  // nbdNumber: {
  //   type: String,
  //   required: false,
  //   //unique: true,
  // },
  foodNutrients: {
    type: String,
    required: true,
  },
  servingSizeUnit: {
    type: String,
    required: true,
  },
  ingredients: {
    type: String,
    required: true,
  },
  foodNutrients: {
    foodNutrientsSchema,
  },
});

module.exports = { foodSchema };
