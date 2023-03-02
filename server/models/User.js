const { Schema, model } = require('mongoose');
const { foodSchema } = require('./Food')

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must use a valid email address'],
  },
  password: {
    type: String,
    required: true,
  },
  // set savedBooks to be an array of data that adheres to the bookSchema
  savedFood: [foodSchema],
},
// set this to use virtual below
{
  toJSON: {
    virtuals: true,
  },

});

userSchema.virtual('foodCount').get(function () {
  return this.savedFood.length;
});


const User = model('User', userSchema);

module.exports = User;
