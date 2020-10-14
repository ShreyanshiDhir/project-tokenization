const express = require('express');
const app = express();
const connectDB = require('./config/db');
const morgan = require("morgan");
connectDB();
// Init Middleware
app.use(express.json({ extended: false }));
//Dev Logging Middleware
if (process.env.NODE_ENV === "development") {
	app.use(morgan("dev"));
  }
app.use('/api/auth',require('./routes/auth'))
app.use('/api/user',require('./routes/user'))
app.get('/api/',(req,res)=>{
	res.send('hello world');
})
const PORT = process.env.PORT || 5000;
app.listen(PORT,()=> console.log(`Server started on ${PORT}`));