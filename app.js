const express = require("express");

const PORT = process.env.PORT || 2024;
const app = express();
app.use(express.json());


app.get("/", (req, res) => {
    res.status(200).json({
      message: "Server is uP and Running 🚀🚀🚀",
    });
  });

  app.listen(PORT, () => {
    console.log("Server is Up on " + PORT);
  });
