const { Schema } = require("mongoose");

const foodSchema = new Schema({
  fdcId: {
    type: Number,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
    unique: true,
  },
  dataType: {
    type: String,
    //required: true,
    required: false,
    // unique: true,
  },
  publicationDate: {
    type: String,
    //required: true,
    required: false,
   // unique: true,
  },
  foodCode: {
    type: String,
    //required: true,
    required: false,
    unique: true,
  },
  // nbdNumber: {
  //   type: String,
  //   required: false,
  //   //unique: true,
  // },
  foodNutrients: {
    type: String,
    required: false,
    unique: true,
  },
  foodNutrients: [
    {
      type: String,
      required: true,
    },
  ],
});

module.exports = { foodSchema };
