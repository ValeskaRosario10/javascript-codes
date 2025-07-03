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
var Institute = /** @class */ (function () {
    function Institute() {
    }
    return Institute;
}());
var Student = /** @class */ (function () {
    function Student(name, id, institute) {
        this.name = name;
        this.id = id;
        this.institute = institute;
    }
    return Student;
}());
var School = /** @class */ (function (_super) {
    __extends(School, _super);
    function School() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.studentList = [];
        return _this;
    }
    School.prototype.addStudent = function (s) {
        this.studentList.push(s);
        console.log(this.studentList);
    };
    School.prototype.getInstituteType = function () {
        return "University";
    };
    School.prototype.removeStudent = function (s) {
        this.studentList.pop();
    };
    School.prototype.displayInfo = function () {
        console.log(this.studentList);
        console.log(this.getInstituteType());
    };
    return School;
}(Institute));
var s1 = new Student("Leandra", 1, "SFIT");
var s2 = new Student("Valeska", 2, "FR.CRCE");
var sc = new School();
sc.addStudent(s1);
sc.addStudent(s2);
sc.removeStudent(s1);
sc.displayInfo();
