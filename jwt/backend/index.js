const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

dotenv.config();

const app = express();
const authRoute = require('./routes/auth');
const userRoute = require('./routes/user');


app.use(cors());
app.use(cookieParser());
app.use(express.json());

mongoose.connect(process.env.MOONGODB_URL)
  .then(() => console.log('✅ MongoDB connected'))
  .catch((err) => console.error('❌ MongoDB connection error:', err));

app.use('/v1/auth', authRoute); 
app.use('/v1/user', userRoute); 

app.listen(8000, () => {
  console.log('Server is running on http://localhost:8000');
});
