
use('Sigma-WebDevelopment');

db.getCollection('Courese').insertMany([
    {
        "name": "Harshit",
        "class": "3rd year",
        "DOB": 20042006,
        "college": "SRMU",
        "Dev": "Web Development"
    },
    {
        "name": "Anjali",
        "class": "2nd year",
        "DOB": 10122005,
        "college": "SRMU",
        "Dev": "Frontend"
    },
    {
        "name": "Rohan",
        "class": "1st year",
        "DOB": 15082007,
        "college": "SRMU",
        "Dev": "Backend"
    },
    {
        "name": "Priya",
        "class": "4th year",
        "DOB": 5062004,
        "college": "SRMU",
        "Dev": "Full Stack"
    },
    {
        "name": "Aman",
        "class": "3rd year",
        "DOB": 23012006,
        "college": "SRMU",
        "Dev": "Web Development"
    },
    {
        "name": "Megha",
        "class": "2nd year",
        "DOB": 30092005,
        "college": "SRMU",
        "Dev": "UI/UX"
    },
    {
        "name": "Aditya",
        "class": "3rd year",
        "DOB": 17072006,
        "college": "SRMU",
        "Dev": "Mobile Development"
    },
    {
        "name": "Sneha",
        "class": "1st year",
        "DOB": 11012008,
        "college": "SRMU",
        "Dev": "Web Development"
    },
    {
        "name": "Karan",
        "class": "4th year",
        "DOB": 19112004,
        "college": "SRMU",
        "Dev": "DevOps"
    },
    {
        "name": "Neha",
        "class": "3rd year",
        "DOB": 24022006,
        "college": "SRMU",
        "Dev": "AI & Web"
    }
]
);


console.log(`Done Inserting Data into the Course Collection`);
