//go to specific id
//put the html element inside that id

//getElementById
let element=document.getElementById("sumDemo");
console.log(element); //checking purpose

//here we inserting the html using innerHTML code
element.innerHTML= "<p> This was a space for showing the DOM concept</p>";
element.setAttribute("name","form");
element.getAttribute("name"); //used in certain form related projects

//element.innerHTML= "<p> This was a second space for showing the DOM concept</p>"; //here the second space prints by deleting first innerHTML

//getElementsByClassName
let elementClass=document.getElementsByClassName("first");
for (let i=0;i<elementClass.length;i++){
    if(i%2===0){
        elementClass[i].innerHTML = "<h4>This was a bad statement </h4>";
    }
}

//getElementsByTagName
// let elementClass1=document.getElementsByTagName("div");
// for (let i=0;i<elementClass1.length;i++){
//     if(i%2===0){
//         elementClass1[i].innerHTML = "<h4>This was a bad statement </h4>"; 
//         //here the first div is reading and replaced
//     }
// }




//when we are using class the class name can be used multiple time, so we should provide index number

element.style.backgroundColor="red";

