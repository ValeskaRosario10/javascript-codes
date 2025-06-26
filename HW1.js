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
var marks=[23,54,65,75,34]
console.log(increaseMarks(marks))
// 4
// Write a named function filterPassedStudents that takes an array of student marks
// and returns a new array containing only the students who passed.
stuMarks=[34,56,67,67,86,45];
function filterPassedStudents(arr){
    return arr.filter((x)=>x>35 )
}
console.log(filterPassedStudents(stuMarks))
// 5
// Demonstrate array methods(map, filter, reduce):
// a. Use map to convert marksto grades.
// b. Use filter to extract students who scored above 75.
// c. Use reduce to calculate the total marks of all students.
marks=[{name:"John", marks: 23},{name:"paul", marks: 82},{name:"sone", marks: 89}]

const grades=marks.map(x=>(x.marks>75?'A' :"B"))
console.log(grades);

const marFil= marks.filter((x)=>(
     x.marks> 75 
))
console.log(marFil);

const totmark=marks.reduce((t,x)=> (t+x.marks),0)
console.log(totmark);

// 6
// Create a function findTopper that accepts an array ofstudent marks and returns
// the highest mark.
var student1=[43,67,89,90,87,56]
function findTopper(arr){
        return Math.max(...arr)
}
console.log(findTopper(student1));


// 7
// Write a function to filterstudents with marks greater than 80 from an array of
// student objects.
marks=[{name:"John", marks: 23},{name:"paul", marks: 82},{name:"sone", marks: 89}]
function greter80(arr1){
      return  arr1.filter(x=>   x.marks>80).map(x=>x.name)
}
console.log(greter80(marks));


// 8 Write a program to find the total marks scored by allstudentsin a class.
const totmark1=marks.reduce((tot,m)=> (tot+m.marks),0)
console.log(totmark1);


//all question done