const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");

//Use Middleware
app.use(express.json());
app.use(cors());
dotenv.config();

//Import Routes
const authRoute = require('./routes/auth');
const referenceRoute = require('./routes/references');
const usersRoute = require('./routes/users');
const mailRoute = require('./routes/mail');

//Connect to DB
const envconfig = require('./config/config');
mongoose.connect(process.env.mongoURI,      // cannot use config here instead of dotenv
    { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
).then(() => console.log('Connected to DB !')).catch(err => console.log(err));


//Set Routes
app.use('/api/auth', authRoute);
app.use('/api/users', usersRoute);
app.use('/api/references', referenceRoute);

app.use('/api/mail', mailRoute);

// define static dir
app.use('/avatars', express.static('public/uploads'));

//App port
const port = envconfig.PORT || 5000;
app.listen(port, () => console.log(`Server up and running on port ${port}`));