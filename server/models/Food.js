const { Schema } = require('mongoose');



const foodSchema = new Schema({
  fdcId: {
    type: Integer,
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
    required: true,
    unique: true,
  },
  publicationDate: {
    type: String,
    required: true,
    unique: true,
  },
  foodCode: {
    type: String,
    required: true,
    unique: true,
  },
  nbdNumber: {
    type: String,
    required: false,
    unique: true,
  },
  foodNutrients: {
    type: String,
    required: false,
    unique: true,
  },
  foodNutrients: [
    {
      type: String,
      required: true
    }
  ]
});


module.exports = foodSchema;
