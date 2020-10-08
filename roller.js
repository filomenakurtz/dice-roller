
console.log("Hi Cramer");

let RollsInput= document.querySelector('#dice-rolls');
let rollButton = document.querySelector('#number-rolls');
let resultsButton= document.querySelector('#roll-times');
let resultsList=document.querySelector('#results-list');
const resetbutton = document.querySelector("#reset-button");

let rollsArray=[];


function rollRandomNumber(){
    return Math.floor(Math.random() * 6) + 1;
}

rollButton.addEventListener("click", function(){

let rollsInput = Number(RollsInput.value);

let count = 0;
rollsArray = []

while (count<rollsInput) {
rollsArray.push(rollRandomNumber())

count ++;

}
console.log(rollsArray)
})


resultsButton.addEventListener("click", function(){
    let count = 0;
    resultsList.innerHtml = "";


 while(count < rollsArray.length){
    
     resultsList.innerHTML +='<li>roll:' + (count +1) + 'on:' + rollsArray[count] + '</li>'
     count++;

 }

})
 
resetbutton.addEventListener("click", function () {
    console.log("resets")
    resultsList.innerHTML = 0;
    

})
