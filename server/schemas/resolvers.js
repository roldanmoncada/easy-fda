const { AuthenticationError } = require("apollo-server-express");
const { User, Food } = require("../models");
const { signToken } = require("../utils/auth");
const fetch = require("node-fetch");

const resolvers = {
  Query: {
    foods: async (_, { description }) => {
      const response = await fetch(
        `https://api.nal.usda.gov/fdc/v1/search?api_key=blRyZDRgqeBVA3sGp7KTJdcUD1U38l754oWn9CbZ&query=${description}`
      );
      const data = await response.json();
      return data.foods.map((food) => ({
        fdcId: food.fdcId,
        description: food.description,
        dataType: food.dataType,
        publicationDate: food.publicationDate,
        foodNutrients: food.foodNutrients.map((nutrient) => ({
          number: nutrient.number,
          name: nutrient.name,
          amount: nutrient.amount,
          unitName: nutrient.unitName,
          derivationCode: nutrient.derivationCode,
          derivationDescription: nutrient.derivationDescription,
        })),
      }));
    },

    foodById: async (parent, { foodId }) => {
      const { description } = Food.description;
      const response = await fetch(
        `https://api.nal.usda.gov/fdc/v1/search?api_key=blRyZDRgqeBVA3sGp7KTJdcUD1U38l754oWn9CbZ&query=${description}`
      );
      return Food.findOne({ _id: foodId });
    },
    // By adding context to our query, we can retrieve the logged in user without specifically searching for them
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      try {
        console.log(username, email, password)
        const user = await User.create({ username, email, password });
        const token = signToken(user);

        return { token, user };
      } catch (e) {
        console.error("addUser :", e); //defensive programming
        throw e;
      }
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No profile with this email found!");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect password!");
      }

      const token = signToken(user);
      return { token, user };
    },

    // Add a third argument to the resolver to access data in our `context`
    // addFood: async (parent, { userId, food }) => {
    //   return User.findOneAndUpdate(
    //     { _id: userId },
    //     {
    //       $addToSet: { foods: food },
    //     },
    //     {
    //       new: true,
    //       runValidators: true,
    //     }
    //   );
    // },
    removeUser: async (parent, { userId }) => {
      return User.findOneAndDelete({ _id: userId });
    },
    removeFood: async (parent, { userId, food }) => {
      return User.findOneAndUpdate(
        { _id: userId },
        { $pull: { foods: food } },
        { new: true }
      );
    },
    savedFood: async (_parent, { foodData }, context) => {
      if (context.user) {
        const updatedUser = await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { savedFoods: foodData } }, // savedFoods would be part of the User model
          { new: true }
        );

        return updatedUser;
      }

      throw new AuthenticationError("You need to be logged in!");
    },
  },
};

module.exports = resolvers;
