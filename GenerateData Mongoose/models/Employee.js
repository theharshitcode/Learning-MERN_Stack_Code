import mongoose from "mongoose";
// let name = ["John", "Jane", "Doe", "Alice", "Bob"];
// let randomName = name[Math.floor(Math.random() * name.length)];
// // console.log("Random Name:", randomName);
// let language = ["JavaScript", "Python", "Java", "C++", "Ruby"];
// let randomLanguage = language[Math.floor(Math.random() * language.length)];
// // console.log("Random Language:", randomLanguage);
// let city = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];
// let randomCity = city[Math.floor(Math.random() * city.length)];
// // console.log("Random City:", randomCity);
// let Manager = Math.random() < 0.5; // Randomly assign true or false
// // console.log("Is Manager:", isManager);

// const todoSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         default: randomName,
//     },
//     salary : {
//         type : Number,
//         default: Math.floor(Math.random() * 100000) + 30000,
//     },
//     Language :{
//         type: String,
//         default: randomLanguage,
//     },
//     City:{
//         type: String,
//         default: randomCity,
//     },
//     isManager:{
//         type: Boolean,
//         default: Manager,
//     }
// });

// const Todo = mongoose.model("Todo", todoSchema);
// module.exports = Todo;

const EmployeeSchema = new mongoose.Schema({
    name:String,
    salary:Number,
    language:String,
    city:String,
    isManger:Boolean
})

// const Employee = mongoose.model('Employee' , EmployeeSchema);
// module.exports = Employee;
export default mongoose.model("Employee", EmployeeSchema );
// const salesOnApril4th = db.getCollection('sales')
// console.log(EmployeeSchema)