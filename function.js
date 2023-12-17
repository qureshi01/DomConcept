//Function Expression

let sum3= function(a,b){
    return a+b;
}

//assigning a function as a value to the variable
console.log(sum3(10,20));
console.log(typeof sum3);

//Regular Function

function sum(a,b){
    return a+b;
}

console.log(sum(40,20));
console.log([50,30].reduce(sum));

//Recursive Function (regular function)

//Factorial code

function factorial(n){
    if(n==0){
        return 1;
    }
    return n*factorial(n-1);
}

console.log(factorial(4));

let obj ={
    name: "Hashim",
    roll: 12,
    play: function(){
        console.log("Function call")
        return 10+20;
    },
    sleep: function(){
        console.log("Function call")
        return 10+20;
    }
}

console.log(obj.name);
console.log(obj.play()); //function can be implemented inside the object and called.

console.log("-----------------");


//Anonymous Function :- Function without name and declared in a variable
let y= function(){
    console.log("Function Called")
}
y();

console.log("-----------------");


//Short Hand Method Defintion

let obj1 ={
    name: "Hashim",
    roll: 12,
    subjects:["Science","CS","Maths"],
    play(...subject){
        this.subjects.push(...subject);
        this.subjects.map(function(subject){
            console.log(subject);
        })
    }
}

console.log(obj1.name);
obj1.play("history","geography");


