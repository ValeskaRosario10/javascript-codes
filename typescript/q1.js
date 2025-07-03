var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Define a class named Student with the following attributes:
// a. name, studentId, grade, address.
// b. Include a method displayInfo() that prints all the student’s details.
var Student = /** @class */ (function () {
    function Student(name, studentid, grade, address) {
        this.name = name;
        this.studentid = studentid;
        this.grade = grade;
        this.address = address;
    }
    Student.prototype.displayinfo = function () {
        console.log("Question 1");
        console.log(this.name + " " + this.studentid + " " + this.grade + " " + this.address);
    };
    return Student;
}());
var s1 = new Student("Val", 23, "A", "Khar");
s1.displayinfo();
// 2
// Create a class School that contains:
// a. Static member: totalStudents to track the total number of students.
// b. Non-static member: studentList to store individualstudent details.
// c. Methods to increment the static member and add student details to the nonstatic list.
var School = /** @class */ (function () {
    function School() {
        this.studentList = [];
    }
    School.prototype.adddetails = function (studentname) {
        this.studentList.push(studentname);
        School.totalStudents = School.totalStudents + 1;
        console.log(this.studentList + " " + School.totalStudents);
    };
    School.totalStudents = 0;
    return School;
}());
var ss = new School();
ss.adddetails("Valeska");
ss.adddetails("Leandra");
ss.adddetails("Jonny");
// 3
// Create a Course class with a parameterized constructor that takes courseName,
// courseCode, and instructor as parameters and assigns them to class attributes.
var Course = /** @class */ (function () {
    function Course(coursename, coursecode, instructor) {
        this.coursename = coursename;
        this.coursecode = coursecode;
        this.instructor = instructor;
    }
    Course.prototype.display1 = function () {
        console.log(this.coursecode + " " + this.coursecode + " " + this.instructor);
    };
    return Course;
}());
var c1 = new Course("INFT", 2342, "Prachi");
c1.display1();
// 4
// Define an abstract class Person with abstract methods getDetails() and getRole().
// Create two derived classes Student and Teacher that implement these methodsto
// return their respective details and roles.
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
var Student1 = /** @class */ (function (_super) {
    __extends(Student1, _super);
    function Student1(name, studentId, classname, sroles) {
        var _this = _super.call(this) || this;
        _this.name = name;
        _this.studentId = studentId;
        _this.classname = classname;
        return _this;
    }
    Student1.prototype.getDetails = function () {
        console.log(this.name + " " + this.studentId + " " + this.classname);
    };
    Student1.prototype.getRoles = function () {
        console.log("This is the studentsrole" + this.sroles);
    };
    return Student1;
}(Person));
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher(tname, tid, tsubject, trole) {
        var _this = _super.call(this) || this;
        _this.tid = tid;
        _this.tname = tname;
        _this.tsubject = tsubject;
        _this.trole = trole;
        return _this;
    }
    Teacher.prototype.getDetails = function () {
        console.log(this.tid + "" + this.tname + " " + this.tsubject);
    };
    Teacher.prototype.getRoles = function () {
        console.log("This is the teachers role " + this.trole);
    };
    return Teacher;
}(Person));
var stu1 = new Student1("Valeska", 23, "beit", "study");
var t1 = new Student1("Ludvin", 45, "4c", "teach");
stu1.getDetails();
stu1.getRoles();
t1.getDetails();
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
