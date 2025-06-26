// 1 Create an object called student with properties: name, grade, and subject. Access
// and log the grade property to the console.
const student=[
    {name:"john", grade: "A", subject: "Math"},
    {name:"doe", grade: "B", subject: "Science"},
    {name:"jane", grade: "C", subject: "History"},
]
console.log(student[0].grade)
// 2
// Create an arrow function named calculateGrade that takes a score as a parameter
// and returns the grade (e.g., A, B, C).
const calGrage=(score)=>{
    if(score>=90){
        return "A";
    }
    else if    (score>=80){
        return "B";
    }
    else{
        return "C"
    }
}
console.log(calGrage(85))
// 3
// Implement an anonymousfunction assigned to the variable increaseMarks that
// takes an array of marks as a parameter and increases each mark by 10.
const increaseMarks=function(m){
    return marks.map(m=>m+10)
}
const marks=[23,54,65,75,34]
console.log(increaseMarks(marks))
// 4
// Write a named function filterPassedStudents that takes an array of student marks
// and returns a new array containing only the students who passed.
// function filterPassedStudents(arr)
// 5
// Demonstrate array methods(map, filter, reduce):
// a. Use map to convert marksto grades.
// b. Use filter to extract students who scored above 75.
// c. Use reduce to calculate the total marks of all students.

// 6
// Create a function findTopper that accepts an array ofstudent marks and returns
// the highest mark.
// 7
// Write a function to filterstudents with marks greater than 80 from an array of
// student objects.
// 8 Write a program to find the total marks scored by allstudentsin a class.