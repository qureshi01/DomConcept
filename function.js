//Function Expression

let sum3= function(a,b){
    return a+b;
}

//assigning a function as a value to the variable
console.log(sum3(10,20));

//Regular Function

function sum(a,b){
    return a+b;
}

console.log(sum(40,20));
console.log([50,30].reduce(sum));

//Recursive Function (regular function)

function factorial(n){
    if(n==0){
        return 1;
    }
    return n*factorial(n-1);
}

console.log(factorial(4));

