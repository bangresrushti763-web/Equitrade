require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const { HoldingsModel } = require("./model/HoldingsModel");

const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get("/allHoldings", async (req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

app.post("/newOrder", async (req, res) => {
  let newOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });

  newOrder.save();

  res.send("Order saved!");
});

app.listen(PORT, () => {
  console.log(`App started on port ${PORT}!`);
  
  // Updated MongoDB connection with additional options for better connectivity
  mongoose.connect(uri, {
    serverSelectionTimeoutMS: 30000, // Increase server selection timeout
    socketTimeoutMS: 45000, // Increase socket timeout
  })
    .then(() => {
      console.log("DB connected successfully!");
    })
    .catch((err) => {
      console.error("DB connection error:", err);
      console.log("\n=== MongoDB Atlas Connection Troubleshooting ===");
      console.log("1. Check if your IP address is whitelisted in MongoDB Atlas");
      console.log("2. Make sure your username and password are correct");
      console.log("3. Verify your cluster is running and accessible");
      console.log("4. Check MongoDB Atlas dashboard for any alerts or issues");
      console.log("\nTo whitelist your IP:");
      console.log("- Go to MongoDB Atlas dashboard");
      console.log("- Select your cluster");
      console.log("- Go to Network Access in the left sidebar");
      console.log("- Click 'Add IP Address'");
      console.log("- Add your current IP or 0.0.0.0/0 for testing (less secure)");
      console.log("\nFor testing purposes, you can temporarily add 0.0.0.0/0 to allow all IPs");
    });
});
