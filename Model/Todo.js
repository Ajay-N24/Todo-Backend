import mongoose from "mongoose";
const { Schema } = mongoose;
const TodoModel = new Schema(
  {
    data: { type: String, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    completed: { type: Boolean },
  },
  { timestamps: true }
);
const Todo = mongoose.model("TodoData", TodoModel);
export default Todo;
