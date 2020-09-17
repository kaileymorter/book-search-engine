const { User, Book } = require('../models');
const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user.id })
                .select('-__v -password')
                .populate('savedBooks');

                return userData
            }
            throw new AuthenticationError('Not logged in');
        }
    }
  };
  
  module.exports = resolvers;