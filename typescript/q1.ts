// Define a class named Student with the following attributes:
// a. name, studentId, grade, address.
// b. Include a method displayInfo() that prints all the student’s details.
class Student{
    name:string;
    studentid:number;
    grade:string;
    address:string
    constructor( name:string,
    studentid:number,
    grade:string,
    address:string){
        this.name=name;
        this.studentid=studentid;
        this.grade=grade;
        this.address=address
    }
    displayinfo(){
        console.log("Question 1")
        console.log(this.name+ " " +this.studentid+" " +this.grade+ " " +this.address)
    }
}

var s1= new Student("Val",23,"A","Khar")
s1.displayinfo()

// 2
// Create a class School that contains:
// a. Static member: totalStudents to track the total number of students.
// b. Non-static member: studentList to store individualstudent details.
// c. Methods to increment the static member and add student details to the nonstatic list.
class School{
    static totalStudents: number=0;
    studentList:string[]
    constructor(){
        this.studentList = [];
    }
    adddetails(studentname:string){
        this.studentList.push(studentname)
      School.totalStudents=School.totalStudents+1;
      console.log(this.studentList+" "+ School.totalStudents)
    }
}
const ss=new School();
ss.adddetails("Valeska")
ss.adddetails("Leandra")
ss.adddetails("Jonny")
// 3
// Create a Course class with a parameterized constructor that takes courseName,
// courseCode, and instructor as parameters and assigns them to class attributes.
class Course{
     coursename:string;
    coursecode: number;
    instructor :string;
    constructor(coursename:string,
    coursecode: number,instructor :string){
        this.coursename=coursename
        this.coursecode=coursecode
        this.instructor=instructor
    }
    display1(){
        console.log(this.coursecode+" "+ this.coursecode+" "+this.instructor)
    }
}
const c1= new Course("INFT",2342,"Prachi")
c1.display1();
// 4
// Define an abstract class Person with abstract methods getDetails() and getRole().
// Create two derived classes Student and Teacher that implement these methodsto
// return their respective details and roles.
abstract class Person {
   abstract getDetails():void;
   abstract getRoles():void;
}
class Student1 extends Person{
     name: string;
     studentId: number;
     classname: string;
     sroles:string
     constructor(name: string, studentId: number,classname: string,sroles:string){
        super()
        this.name= name;
     this.studentId= studentId;
     this.classname=classname;
     }
    getDetails():void {
        console.log(this.name+ " "+ this.studentId+" "+ this.classname)
        
    }
    getRoles() {
        console.log("This is the studentsrole"+this.sroles)
    }
}
class Teacher extends Person{
    tname:string;
    tid:number;
    tsubject:string
    trole:string
    constructor( tname:string,tid:number,tsubject:string,trole:string){
        super()
        this.tid=tid
        this.tname=tname
        this.tsubject=tsubject
        this.trole=trole
    }
     getDetails() {
        console.log(this.tid +""+ this.tname+" "+ this.tsubject)
    }
    getRoles() {
        console.log("This is the teachers role "+this.trole)
    }
}
const stu1=new Student1("Valeska", 23 ,"beit","study")
const t1=new Student1("Ludvin", 45 ,"4c","teach")
stu1.getDetails();
stu1.getRoles();
t1.getDetails()
t1.getRoles();
// 5
// Create an interface Attendance with a method markAttendance().
// Implement this interface in the Student class, and define how attendance is marked
// for a student.
// 6
// Create a generic function getStudentInfo<T>(info: T): T that returns any type of
// student information, such as name, ID, or grade.
// 7
// Define an abstract class Institute with an abstract method getInstitutionType().
// Create a class School implementing the interface Management with methodslike
// addStudent(), removeStudent().
// Combine these in a real-time use case to manage different types of institutionslike
// School and College.
