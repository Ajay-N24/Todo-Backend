import express from "express";
const app = express();
import dotenv from "dotenv";
import DBConnect from "./DBConnect.js";
dotenv.config({ path: "./Config/.env" });
import bodyParser from "body-parser";
import auth from "./Routes/auth.js";
import actions from "./Routes/actions.js";

app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:5000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-type, Accept"
  );
  next();
});
import cors from "cors";
// const corsOptions = {
//   origin: "*",
//   credentials: true, //access-control-allow-credentials:true
//   optionSuccessStatus: 200,
// };
app.use(cors());
app.use(express.json());
DBConnect();
app.use(auth);
app.use(actions);
app.listen(process.env.PORT, () => {
  console.log(`Server is running at Port ${process.env.PORT}`);
});
