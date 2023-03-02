// const { Tech, Matchup } = require('../models');
const { User, Food } = require('../models')


const resolvers = {
  Query: {
    foods: () => {
      return getAllFoods();
    }
    },
  },
  Mutation: {
    bookmarkedFood: async (parent, { foodkData }, context) => {
      if (context.user) {
        const updatedUser = await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { savedFood: foodData } }, // savedFood would be part of the User model
          { new: true }
        );

        return updatedUser;
      }

      throw new AuthenticationError('You need to be logged in!');
    },

    // saveBook: async (parent, { bookData }, context) => {
    //   if (context.user) {
    //     const updatedUser = await User.findByIdAndUpdate(
    //       { _id: context.user._id },
    //       { $push: { savedBooks: bookData } },
    //       { new: true }
    //     );

    //     return updatedUser;
    //   }

    //   throw new AuthenticationError('You need to be logged in!');
    // },
  },
};

module.exports = resolvers;
