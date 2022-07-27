const { User, Thought } = require('../models');
const { signToken } = require('../utils/auth');
const resolvers = {
  Query: {
    // logic here remains the same
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);

    },
    login: async () => {
    }
  }
};

module.exports = resolvers;
