const mongoose = require('mongoose')


mongoose.set('debug', false)
mongoose.Promise = global.Promise
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
})

module.exports.User = require('./user')
module.exports.Poll = require('./poll')
