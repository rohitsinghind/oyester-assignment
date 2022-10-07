const express = require("express");
const { connectDatabase } = require("./config/database");
const app = express();
const cookieParser = require("cookie-parser");
const path = require("path");
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({ path: "backend/config/config.env" });
}

connectDatabase();

// Using Middlewares
app.use(express.json({ limit: "50mb" }));
app.use(cookieParser());

// Using Routes
app.use("/api/v1", require("./routes/user"));

app.use(express.static(path.join(__dirname, "../frontend/build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
});

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
  });