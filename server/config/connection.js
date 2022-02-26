const mongoose = require('mongoose');

mongoose.connect(`mongodb+srv://daveUconn:Doozer1127@cluster0.yikty.mongodb.net/bookSearchEngine`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

module.exports = mongoose.connection;
