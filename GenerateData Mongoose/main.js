import express from 'express';
import mongoose from "mongoose";
import Employee from "./models/Employee.js"; 
mongoose.connect('mongodb://localhost:27017/company')
const app = express();
const port = 3000;

app.set('view engine', 'ejs');


const getRandom = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};
app.get('/generate', async (req, res) => {

  await Employee.deleteMany({})

  let name = ["John", "Jane", "Doe", "Alice", "Bob"]
  let language = ["JavaScript", "Python", "Java", "C++", "Ruby"]

  let city = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"]

  console.log("new started!!!!!!!!!!!!!!!!!!!!!!!")
  for (let i = 0; i < 10; i++) {
    let e = await Employee.create({
      name:  getRandom(name),
      salary:  Math.floor(Math.random() * (22000,100000)),
      language: getRandom(language),
      city: getRandom(city),
      isManager: Math.random() < 0.5 ? true : false
    });
    console.log("it is e: ", e)
  }
  // res.json({ success: true, message: '10 employees created' }); // ✅ JSON response
  // res.render('i',{foo:'foo'})
    res.json({
    success: true,
    message: '10 employees created',
    data: Employee
  });
  });


app.listen(port,()=>{
console.log(`http://localhost:${port}/generate`);
})