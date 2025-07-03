abstract class Institute{
    abstract getInstituteType():void

}
interface Management{
    addStudent(s:Student):void;
    removeStudent(s:Student):void;
}
class Student{
    name: string
    id: number
    institute: string
    constructor(name: string, id: number, institute:string){
        this.name=name;
        this.id=id;
        this.institute=institute
    }
}
class School extends Institute implements Management{
    studentList:any=[]
    addStudent(s:Student): void {
        this.studentList.push(s)
        console.log(this.studentList);
        
    }
    getInstituteType(): string {
        return "University";
    }
    removeStudent(s:Student): void {
        this.studentList.pop()
    }

    displayInfo():void{
        console.log(this.studentList);
        console.log(this.getInstituteType());
        
        
    }
}

const s1=new Student("Leandra",1,"SFIT")
const s2=new Student("Valeska",2,"FR.CRCE")


const sc=new School();
sc.addStudent(s1)
sc.addStudent(s2)

sc.removeStudent(s1)
sc.displayInfo()