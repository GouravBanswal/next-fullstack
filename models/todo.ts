// import exp from "constants";
import mongoose, { models } from "mongoose";

const todoSchama = new mongoose.Schema({
    task: String,
    desc: String,
    complete: {
        type: Boolean,
        default: false      
    }
},{
    timestamps: true
})

const Todo = models.todo || mongoose.model("todo",todoSchama)
export default Todo