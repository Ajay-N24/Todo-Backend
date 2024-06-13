import mongoose from "mongoose";
const mongodbConnect = async () => {
  const mongourl = MongoDB_URI_HERE;
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
