use("SRMU-Update")
// console.log(db)
db.createCollection("Students");

//insertion many
db.Students.insertMany([
    {
        "name": "Harshit",
        "class": "3rd year",
        "DOB": 20042006,
        "Dev": "Web Development"
    },
    {
        "name": "Anjali",
        "class": "2nd year",
        "DOB": 10122005,
        "Dev": "Frontend"
    },
    {
        "name": "Rohan",
        "class": "1st year",
        "DOB": 15082007,
        "Dev": "Backend"
    },
    {
        "name": "Priya",
        "class": "4th year",
        "DOB": 5062004,
        "Dev": "Full Stack"
    },
    {
        "name": "Aman",
        "class": "3rd year",
        "DOB": 23012006,
        "Dev": "Web Development"
    },
    {
        "name": "Megha",
        "class": "2nd year",
        "DOB": 30092005,
        "Dev": "UI/UX"
    },
    {
        "name": "Aditya",
        "class": "3rd year",
        "DOB": 17072006,
        "Dev": "Mob Development"
    }
]
)

// Read operation for MANY documents
db.Students.updateMany({ "class": "4th year" }, {$set : { "Dev": "Game Development" }});

// Read operation for ONE document
// db.Students.updateOne({ "name": "Harshit" }, {$set : { "name": "Harshit Saxena" , "job": "Software Engineer" }});