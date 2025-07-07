import mongoose from 'mongoose';
import express from 'express';
import { Todo } from './models/Todo.js';
let conn = await mongoose.connect('mongodb://localhost:27017/todo');
const app = express();
const port = 3000;

app.get('/',(req,res)=>{
    const todo = new Todo({name : "Harshit" , age: 19 , complete : false});
    todo.save();
    res.send('Hello World!');
})

app.get('/a',async(req,res)=>{
    let todo = await Todo.findOne({});
    res.json({
        name: todo.name,
        age: todo.age,
        completed: todo.completed
    });
})


app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
})