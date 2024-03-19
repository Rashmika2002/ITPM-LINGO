require('dotenv').config()

const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser")


const express = require('express')
const mongoose = require('mongoose')

const PostRoutes = require('./routes/posts')
const ReplyRoutes = require('./routes/replies')
//user profile and authentication

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const emojiRouter = require('./routes/emoji');
const PostRoutes = require('./routes/posts');
const ReplyRoutes = require('./routes/replies');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/users');

dotenv.config();




// express app
const app = express()

// middleware
app.use(express.json())
app.use(cookieParser())
app.use(bodyParser.json());


app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})


// Initialize Express app
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
}));

// Logging middleware
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

// Routes
// app.use('/api/workouts', workoutRoutes);
app.use('/api/posts', PostRoutes);
app.use('/api/replies', ReplyRoutes);

// routes
app.use('/api/posts', PostRoutes)
app.use('/api/replies', ReplyRoutes)
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

// connect to db

mongoose.connect(process.env.MONGODB_URL)
  .then(() => {
    console.log('connected to database')
    // listen to port
    app.listen(process.env.PORT, () => {
      console.log('listening for requests on port', PORT)
    })
  })
  .catch((err) => {
    console.log(err)
  }) 


const PORT = process.env.PORT || 3040;

app.use(cors());


const connection = mongoose.connection;
connection.once("open", () => {
    console.log("✅ Mongodb Connection Success! ✅");
})


app.listen(PORT, () => {
    console.log(`🚀 Server is up and running on port number : ${PORT}`);
})

//emoji to text translater

const emojiRouter = require("./routes/emoji");

app.use("/emoji",emojiRouter)

app.use('/emoji', emojiRouter);

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('✅ MongoDB Connection Success! ✅');

    const PORT = process.env.PORT || 3040;
    app.listen(PORT, () => {
        console.log(`🚀 Server is up and running on port number : ${PORT}`);
    });
}).catch((err) => {
    console.error('Error connecting to MongoDB:', err);
});
