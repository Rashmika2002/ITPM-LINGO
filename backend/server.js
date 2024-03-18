const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');

const PostRoutes = require('./routes/posts');
const ReplyRoutes = require('./routes/replies');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/users');
const emojiRouter = require('./routes/emoji');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use('/api/posts', PostRoutes);
app.use('/api/replies', ReplyRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/emoji', emojiRouter);

const PORT = process.env.PORT || 3040;

mongoose.connect(process.env.MONGODB_URL)
  .then(() => {
    console.log('Connected to database');
    app.listen(PORT, () => {
      console.log('Listening for requests on port', PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('✅ MongoDB Connection Success! ✅');
});

console.log(`🚀 Server is up and running on port number: ${PORT}`);
