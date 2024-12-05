const express = require("express");
require('dotenv').config();
require('./config/db')
const userRoute = require('./router/userRoute');
const PORT = process.env.PORT || 2024;
const app = express();
app.use(express.json());


app.get("/", (req, res) => {
    res.status(200).json({
      message: "Server is uP and Running 🚀🚀🚀",
    });
  });

  app.use('/api/v1', userRoute);
  app.listen(PORT, () => {
    console.log("Server is Up on " + PORT);
  });
