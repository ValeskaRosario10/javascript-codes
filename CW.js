no=[1,2,3,4,5]
//1. Create an object called person with properties name, age, and gender.
// Access and log the name property to the console.
const person={
    name: "Valeska Rosario",
    age:20,
    gender: "female"
}
console.log(person.name);

//2.Create an arrow function named square that takes a number as a parameter
// and returns the square of that number.
const square =(x)=>{
    return x*x;
}
console.log(square(5));

// 3.Implement an anonymousfunction assigned to the variable multiplyByTwo that
// Take number as a parameter and multiplies each element by 2.
const multiplyByTwo=function (numbers) {
        return numbers.map(num=>num*2)}
console.log(multiplyByTwo([1, 2, 3, 4, 5]));

// 4.Write a named function filterEvenNumbers that takes an array of numbers
// as a parameter and returns a new array containing only the even numbers.
function filterEvenNumbers(num){
    return num.filter((x)=>x%2==0)
}
console.log(filterEvenNumbers([1,2,3,4,5]))
// 5.Demonstrate array method (map, filter, reduce)
// a. Map to square each number.
// b. Filterto extract odd number.
// c. Reduce to calculate the sum of all elements.
console.log(no.map(x=>x*x))
console.log(no.filter(x=>x%2!=0))
console.log(no.reduce((x,s)=>(s+x)))
// 6.Create a Function findMax That Accepts an Array of Numbers and Returnsthe
// Largest Number in the Array
function findmax(no){
    return Math.max(...no);
}
console.log(findmax(no));
// 7.Write a Function to Filter Employees Earning More Than a Certain Amount from an
// Array of Employee Objects.
emp=[{name:"Valeska",age:45,sal:78654151},{name:"Tom",age:45,sal:56985},
    {name:"Leandra",age:45,sal:34546},{name:"Ludovin",age:45,sal:13245},
    {name:"Joseph",age:45,sal:8984}]
const filterEmployees = (employees, salth) => {
    return employees.filter(emp=>emp.sal>salth)
}
console.log(filterEmployees(emp, 1000000));
// 8.Write a program to find the total sales from an array of Order objectsin an
// e- commerce system
orders=[
        {id:1,product:"Laptop",quantity:2,price:50000},
        {id:2,product:"Bag",quantity:4,price:288},
        {id:3,product:"book",quantity:3,price:546},
        {id:4,product:"pencil",quantity:1,price:3545},
        {id:5,product:"tops",quantity:5,price:8566}]
const totsal=(order)=>{
    return order.reduce((tot,itm)=>{
        return tot+  (itm.quantity)})
    }
console.log(totsal(orders));
//Q8 redo 