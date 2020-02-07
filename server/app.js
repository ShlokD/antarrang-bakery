require("dotenv").config();
const express = require("express");
const port = process.env.port;

const startup = () => {
  const app = express();
  const router = express.Router();

  app.use(express.static("dist"));

  router.get("/", (req, res) => {
    res.json({ working: true });
  });

  app.use("/api", router);
  
  app.listen(port, () => {
    console.log(`Server started at ${port}`);
  });
};

startup();
