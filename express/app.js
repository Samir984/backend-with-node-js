const express = require('express');
const morgan = require('morgan');

const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();
console.log(app.get('env'));

// 1) Middleware


app.use(morgan('dev'));
app.use(express.json());
app.use((req, res, next) => {
  console.log('hello from Middleware');
  next();
});

// 3) Routers
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

//servering lisinig
module.exports = app;
