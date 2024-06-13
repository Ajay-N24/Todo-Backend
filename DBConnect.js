import mongoose from "mongoose";
const mongodbConnect = async () => {
  const mongourl =
    "mongodb+srv://Ajayprmk:ajayprmk@cluster0.pap6tc8.mongodb.net/Todo-Backend";
  await mongoose
    .connect(mongourl)
    .then(async () => {
      console.log("Connected to Mongodb");
    })
    .catch((err) => {
      console.log(err);
    });
};
export default mongodbConnect;
