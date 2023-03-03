const { AuthenticationError } = require('apollo-server-express');
const { User, Food } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    foods: async () => {
      return Food.find();
    },

    food: async (parent, { foodId }) => {
      return Food.findOne({ _id: foodId });
    },
    // By adding context to our query, we can retrieve the logged in user without specifically searching for them
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
  }
},

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No profile with this email found!');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect password!');
      }

      const token = signToken(user);
      return { token, user };
    },

    // Add a third argument to the resolver to access data in our `context`
    addFood: async (parent, { userId, food }) => {
      return User.findOneAndUpdate(
        { _id: userId },
        {
          $addToSet: { foods: food },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },
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
    bookmarkedFood: async (_parent, { foodData }, context) => {
      if (context.user) {
        const updatedUser = await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { savedFood: foodData } }, // savedFood would be part of the User model
          { new: true }
        );

        return updatedUser;
      }

      throw new AuthenticationError("You need to be logged in!");
    },
},
};

module.exports = resolvers;
