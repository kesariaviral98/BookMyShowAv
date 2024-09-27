const express = require("express");
const app = express();
require('dotenv').config()
const dbConfig = require("./config/dbConfig");
const userRouter = require("./routes/userRouter");
const movieRouter = require("./routes/movieRouter");
const theatreRouter = require("./routes/theatreRouter");
const bookingRouter = require("./routes/bookingRouter");

app.use(express.static("./public"));
app.use(express.json());
app.use("/app/v1/users", userRouter);
app.use("/app/v1/users/admin", movieRouter);
app.use("/app/v1/users/theatres", theatreRouter);
app.use("/app/v1/users/bookings", bookingRouter);
app.get("/", (req, res) => {
    res.send("hello world");
  });

app.listen(process.env.PORT, () => {
    console.log(`server is listening to port no ${process.env.PORT}`);
  });