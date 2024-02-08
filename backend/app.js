const express = require("express");
const app = express();
const cookieParser = require("cookie-parser") ;
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cors = require("cors");

app.use(cors());
const errorMiddleware = require("./middleware/error")

dotenv.config({path:"backend/config/config.env"});
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:true}));

const complaint = require("./routes/complaintRoute");
const user = require("./routes/userRoute")


app.use("/api/v2",complaint);
app.use("/api/v2",user);

app.use(errorMiddleware);


module.exports = app