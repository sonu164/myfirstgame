//object & class
//-----Prototypes------------
// A javaScript object is an entity having state and behavior (properties and Method).
//js objects have a special property called prototype.
// mean hamare obj ke ander ek or objet hota hai use ham prototype khate hai.------------
// how to add the new prototype use __proto__  
//example

const employee = {
    calTax() {
        console.log("tax rate is 10%");
    },
    calTax : function(){
         console.log("tax rate is 10%");
    },
};

const sonu = {
    salary: 5000,
};
const sonu2 = {
    salary: 5000,
};

// when we use the employee in sonu than we used the prototype --------- example------
sonu.__proto__ = employee;

sonu2.__proto__ = employee;
// if object & prototype have same method, objects method will be used.

// Classes in Js --------
// Class is a program-code template for creating onject 
// example of class

class ToyotaCar {  
           // constructer 
           constructor(brand, milage, companyName){
            console.log("they are auto select the all class and with print") // example
             this.brand = brand;
             this.milage = milage;
             this.companyName = companyName;
           }
    start(){
        console.log("start the car");
    }
    stop(){
        console.log("stop the car");
    }
   /*  setBrand(brand){
        this.brandName = brand; --------  ham ye na used kar ke constructer ko used kare ge ---
    } */
}
let fortuner = new ToyotaCar("fortuner", 10 , "Ambani Industry"); // construtor are create the object first// new are invole the constructer --------

let Tata = new ToyotaCar("Tata", 12 , "Ambani Industry");  // construtor are create the object first 

// Inheritance in Js -- means it is passing down properties & methods from parent class to child class.
// Example --------
/* class Parent {
    hello(){
        console.log("hello parent");

    }
}
class Child extends Parent{}

let obj = new Child(); */

class Person{
    constructor(JObType, Boss, CompanyType){
            this.JObType = JObType;
            this.Boss = Boss;
            this.CompanyType = CompanyType;
    }
    eat(){
        console.log("Your are eating the food!");
    }
    drink(){
        console.log("Now Rest time brother!");
    }
    walk(){
        console.log("Walk and fit Your body");
    }

}

class Engg extends Person{
    constructor(bio){
        super();
        this.bio = bio;
    }
    work(){
        console.log("treat patients");
    }
    skill(){
        console.log("Best Skill is C++");
    }
}

let Aman = new Engg("Malva","software Engg", "MR.Sonu", "TechYourSkill");

// Method Overriding means if child class & parant have same Method, Child's Method will be used.

// super KeyWord ---

// Question 1 ---
/* let User = "View Data";

class saahu{
     constructor(name, Email){
        this.name = name;
        this.Email = Email;
     }
     ViewData(){
        console.log("You Are Login in Our System", User);
     }

}

let student = new saahu("Sonu", "sonuk24227@gmail.com");
let student2 = new saahu("Adi", "fjkjlads@gmail.com"); */
// More logic build-------

class Saahu{
    constructor(Name, Email, RollNo, PassWord){

    }
    Marks(){
              console.log("My Marks");
    }
    BooKs(){
               console.log("MyBooks");
    }
    Attand(){
                console.log("MyAttandence");
    }
}

class Enggenring extends Saahu{
    studentOfEnggBook(){
               console.log("EnggBooks");
    }

    studentOfBcaBook(){
        console.log("BcaBooks");
    }
    teacher(){
        console.log("Pray with Our student");
    }
}
 let student = new Saahu("sonu", "sonu2423@gmail.com", "089", "Drawsapp");

 let teacher = new Enggenring("sonali, RimtUniversity@gmail.com", "4554", "5645gd#543sd");
