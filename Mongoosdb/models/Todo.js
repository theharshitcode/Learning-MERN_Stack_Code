import mongoose from 'mongoose';

let TodoSchema = new mongoose.Schema({
    name : String,
    age : Number,
    completed : Boolean, 
});

export const Todo = mongoose.model('Todo', TodoSchema);