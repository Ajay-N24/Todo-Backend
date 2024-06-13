import { Router } from "express";
import Authenticate from "../Middleware/Authenticate.js";
import Todo from "../Model/Todo.js";
import User from "../Model/User.js";

const router = Router();

router.post("/getTodoDataByUser", Authenticate, async (req, res) => {
  try {
    const userFound = await Todo.find({ user: user._id });
    res.send(userFound);
  } catch (err) {
    res.status(400).send({ error: "Failed to get todo data" });
  }
});
router.post("/getAllTodoData", Authenticate, async (req, res) => {
  const userFound = await Todo.find();
  res.status(201).send(userFound);
});
router.post("/CreateTodo", Authenticate, async (req, res) => {
  const { text } = req.body;
  try {
    const todo = await Todo.create({ data: text, user: req.user._id });
    res.status(201).send(todo);
  } catch (err) {
    res.status(400).send({ error: "Failed to create todo" });
  }
});
router.put("/UpdateTodo", Authenticate, async (req, res) => {
  const { text, todoid, user } = req.body;
  try {
    const todo = await Todo.findOneAndUpdate(
      { _id: todoid, user: user._id },
      text
    );
    res.status(201).send(todo);
  } catch (err) {
    res.status(400).send({ error: "Failed to create todo" });
  }
});
router.delete("/UpdateTodo", Authenticate, async (req, res) => {
  const { todoid } = req.body;
  try {
    const todo = await Todo.findOneAndDelete({
      _id: todoid,
      user: req.user._id,
    });
    if (!todo) {
      return res.status(404).send({ error: "Todo not found" });
    }
    res.send({ message: "Todo deleted successfully" });
  } catch (err) {
    res.status(400).send({ error: "Failed to delete todo" });
  }
});
router.post("/getTodoId", Authenticate, async (req, res) => {
  const { todoid } = req.body;
  try {
    const todo = await Todo.findOne({
      _id: todoid,
      user: req.user._id,
    });
    if (!todo) {
      return res.status(404).send({ error: "Todo not found" });
    }
    res.send(todo);
  } catch (err) {
    res.status(400).send({ error: "Failed to get todo" });
  }
});
router.post("/Addfavourite", Authenticate, async (req, res) => {
  const { email, todoId } = req.body;
  try {
    const todo = await Todo.findById(todoId);
    const user = await User.findById(req.user._id);
    await User.findOneAndUpdate(
      { username: user.username },
      { $push: { favourites: user } },
      { new: true }
    );
    if (!todo) {
      return res.status(404).send({ error: "Todo not found" });
    }
    res.send(todo);
  } catch (err) {
    res.status(400).send({ error: "Failed to get todo" });
  }
});
export default router;
