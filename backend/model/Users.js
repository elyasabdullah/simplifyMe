const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usersSchema = new Schema({
  username: {
      type: String,
      required: true,
  },
  roles: {
      User: {
          type: Number,
          default: 2001
      },
      Admin: Number
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  registrationDate: {
    type: Date,
    default: Date.now
  },
  password: {
      type: String,
      required: true
  },
  emailVerification: {
    otp: {
      type: String,
      default: ''
    },
    verified: {
      type: Boolean,
      default: false
    },
    expiresAt: {
      type: Date,
      default: Date.now
    }
  },
  refreshToken: {
    type: String,
    default: null
  }
});

module.exports = mongoose.model('Users', usersSchema);