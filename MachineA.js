// 1.Create an object called player with properties: name, team, and position. Access and
// log the team property to the console.
const player=[{name:"Valeska",team:"sfit",postion :10,score:76},
              {name:"Gargi",team:"sfithostal",postion :15,score:89},
              {name:"Leandra",team:"chetna",postion :20,score:45}
]
console.log(player[0].name)
// 2.Create an arrow function named calculatePerformanceLevel that takes a score as a
// parameter and returns the performance level (e.g., Excellent, Good, Average).
const calculatePerformanceLevel=(score)=>{
    if(score>90){
        console.log("Excellent");
    }
    else if(score>75){
        console.log("Good")
    }
    else{
        console.log("Average")
    }
}
calculatePerformanceLevel(89)
// 3.Implement an anonymous function assigned to the variable boostPlayerStats that
// takes an array of player scores and increases each score by 10.
var scores=[23,56,75,56,78,88,89,90]
const boostPlayerStats= function (arr){
         return arr.map(s=> s+10 )
}
console.log(boostPlayerStats(scores))

// 4.Write a named function filterQualifiedPlayers that takes an array of player scores and
// returns a new array containing only players who qualified (score above a threshold).
const filterQualifiedPlayers= (arr)=>{
    return arr.filter((x)=> x>75)
}
console.log(filterQualifiedPlayers(scores))
// 5.Demonstrate array methods (map, filter, reduce):
// a. Use map to convert player scores to performance levels.
score=[34,56,78,99,67]
const plevel=function(p){
    return p.map((x)=>{
        if(x>90 ){return "great performace "}
        else if (x>75 ){return "good  performace "}
        else{
            return "need to imporve "
        }
    })
}
console.log(plevel(score))
// b. Use filter to extract players who scored above 75.
const filterScore= (arr)=>{
    return arr.filter((x)=> x>75)
}
console.log(filterScore(score))
// c. Use reduce to calculate the total points,scored by all players.
const caltot=(x)=>{
    return x.reduce((tot,s)=> tot+s )} 
console.log(caltot(score))
// 6.Create a function findStarPlayer that accepts an array of player scores and returns the
// highest score.
const findStarPlayer=function(arr){
    return Math.max(...arr)
}
console.log(findStarPlayer(score))
// 7.Write a function to filter players with scores greater than 80 from an array of player
// objects.
// const player=[{name:"Valeska",team:"sfit",postion :10,score:76},
//               {name:"Gargi",team:"sfithostal",postion :15,score:89},
//               {name:"Leandra",team:"chetna",postion :20,score:45}
// ]
const filPlayer=(obj)=>{
        return    obj.filter((x) =>x.score >80 ).map((x)=>x.name)
}
console.log(filPlayer(player))


// 8.Write a program to find the total points scored by all players in a tournament.

const caltot1=(x)=>{
    return x.reduce((tot,s)=> tot+s )} 
console.log(caltot1(score))
//9. Demonstrate an example of array and object destructuring to extract coach names
// from an array of coaches and their details from a coach object.
const [c1,c2,c3]=["john ","paul","saul"]
const coach=[{name:"john",team:"sfit",age :56,score:76},
              {name:"paul",team:"sfithostal",age :45,score:89},
              {name:"saul",team:"chetna",age :35,score:45}
]
// 10. Create a class named Coach with attributes: coachld, name, email, and a method
// displayInfo. Provide code to access and display these details for a coach.
class Coach{
    coachld; name; email
    constructor(coachld,name,email){
        this.coachld=coachld;
        this.name=name;
        this.email=email
    }
    displayInfo(){
        console.log("this is the coach info " +this.coachld+" " +this.name+" "+ this.email)
    }
}
var c=new Coach(32,"John" ,"john@gmail.com")
c.displayInfo()
// 11. Demonstrate an example of a Promise that simulates checking match confirmation
// status for a player.
const checkingMatch=(match)=>{


    return new Promise((resolve,reject)=>{
        if(match){
            resolve("done status")
        }
        else{
            reject("not done status ")
        }
    })}

    checkingMatch(true).then((x)=>{
        console.log("done status")
    }).catch((e)=>{
        console.log("not done status")
    })
// 12. Demonstrate an example of async/await to simulate fetching and displaying match
// highlights for a specific game.
// <!redo !>
const f1= async (s)=>{
    try{
        const d= await checkingMatch (false);
        console.log(d)
    }
    catch(e){
        console.log(e.name+ e.message)
    }
}
f1(true)
// 13. Show an example of default parameters and rest parameters in a function that
// calculates the total training cost based on session hours. Use a default parameter for
// standard session charges and rest parameters for additional fees.

// function calculateTrainingCost(hours, charge = 500, ...additionalFees) {
//   const sessionCost = hours * charge;
//   const extraCost = additionalFees.reduce((total, fee) => total + fee, 0);
//   const total = sessionCost + extraCost;

//   console.log(`🕒 Hours: ${hours}`);
//   console.log(`💰 Charge/hour: ₹${charge}`);
//   console.log(`➕ Extra charges: ₹${extraCost}`);
//   console.log(`📦 Total training cost: ₹${total}`);
  
//   return total;
// }
// calculateTrainingCost(5); 
// // uses default ₹500/hour, no extra fees

// calculateTrainingCost(3, 600, 200, 150); 
// // 3 hrs × ₹600 + ₹200 (material) + ₹150 (certification)
