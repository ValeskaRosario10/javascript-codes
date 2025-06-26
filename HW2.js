// 9. Provide an example of array destructuring and object destructuring in JavaScript to
// extract product names from an array of products and their details from a product
// object in an online shopping system.

const Product=["apple","mango","banana"];
const [a1,a2,a3]=Product;
console.log(a1);

const Product1= {name:"apple", id: 1, quantity: "5kg"}
const {name,id,quantity}=Product1;
console.log(quantity)
// 10. Create a class named Product with the following attributes: name, productId, price,
// and a displayDetails method. Provide code to access and display these details for a
// product.
class ProductClass {
    name;
    productId;
     price

     constructor(name,productId,price){
        this.name=name;
        this.productId=productId;
        this.price=price;
     }
     display(){
        console.log(this.productId+""+this.price+" "+this.name)
     }
}
var p1= new ProductClass("b00k",23,2309);
p1.display();
// 11. Demonstrate an example of a Promise that simulates fetching product details (e.g.,
// name, price, availability) from an online store's server.

const server=[    {name:"Dell XPS 13", price: 1200, availability: true},
    {name:"Apple MacBook Pro", price: 1500, availability: false}]
// const server=[]
const fetchDetatils=(status)=>{
    return new Promise((resolve,reject)=>{
        if(status){
            resolve(server.map((product) => {
                return `Product Name :${product.name}}`;
                //  Price: $${product.price}, Availability: ${product.availability ? 'In Stock' : 'Out of Stock'
        }))}
        else{
            reject("No product found,error occurred");
        }
    })
}
fetchDetatils(false).then((x)=>{
    console.log("Product details fetched successfully: " + x);
}).catch((e)=>{
    console.log("Error fetching product details: " + e);
})
// 12. Demonstrate an example of async and await to simulate fetching and displaying a
// customer's order history from an online shopping system.

const fetchDetatilsAsync=async(s)=>{
    try{
        const data = await fetchDetatils(s)
        console.log("Order history fetched successfully: " + data);
    }
    catch(e){
        console.log(e);
    }
}
fetchDetatilsAsync()
// 13. Demonstrate an example for default parameters and rest parameters in a function
// that calculates the total cost of items in a customer's shopping cart. Use a default
// parameter for applying a discount rate and rest parameters for the list of product
// prices.
// 14. Show the uses of try/catch when processing a payment during the checkout process,
// handling possible errors like payment failure or network issues.
// 15. Show an example of exception propagation when adding an item to a shopping cart
// if the product is out of stock in the online store's inventory.
// 16. Show an example of a finally block that executes when updating customer profile
// information, regardless of whether the operation was successful or resulted in an
// error.
profiles=[{name:"John", age: 30, email: "hjohn@gmail"},
{name:"Doe", age: 25, email: "doe@gmail"}]
function updateProfile(profile,newprofile){
    try{
        profiles.forEach((p)=>{
            if(p.name===profile){
                p.name=newprofile.name;
                p.age=newprofile.age;
                p.email=newprofile.email;
                console.log("Profile updated successfully for " + p.name);
            }
        })
    }
    catch(e){
        console.log("Error updating profile: " + e);
    }
    finally{
        console.log("Tried to update the profile");
    }
}
updateProfile("John",{name:"to", age: 31, email: ""})
// 17. Create a user-defined exception called InvalidCouponCode and demonstrate how it
// is used when a customer tries to apply an invalid coupon code during checkout.
class InvalidCouponCode extends Error{
    constructor(message){
        super(message);
        this.message=message;
    }
}
function applycoupon(code){
    if (code!="doscount"){
        try{
            throw new InvalidCouponCode("Invalid code prodeivde" +code);
        }
        catch(e){
            console.log(e.message+":" + e.name);
        }
    }
}
console.log(applycoupon("fsf"))
// 18. Show an example of throw where a function throws an exception if a product's
// quantity in the inventory falls below a certain threshold (e.g., less than 5 units)