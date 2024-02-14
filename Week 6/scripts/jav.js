var name= "Samuel";
var lastName= "Murray";
var  message= `Hello wellcome to JS lesson ${name}`;
outputToConsole(message);
alert(message);
var message2= "Hello "+ name + " " + lastName + " welcome";
outputToConsole(message2);

var addProb = 12 + 4;
outputToConsole(addProb);

function outputToConsole(data){
    console.log(data);
}

var myButton= document.querySelector("button");
myButton.addEventListener("click",changePage);

function changePage(){
document.getElementById("header").innerHTML = message;
document.querySelector("body").style.background = "#699020";            
}

var youName = prompt("please enter your name.");
document.querySelector("h1").innerHTML = `Hello ${youName} thanks for entering your name`;


var dataPromptButton = document.getElementById("promptButton");
dataPromptButton.addEventListener("click", dataPrompt)

function dataPrompt(){
    alert(`My name is ${name}`)
    var yourName = prompt("please tell me your name")
    alert(`Hello ${yourName}, nice to meet you.`)

    var yourLastName = prompt("what is your last name")
    alert(`Great your full name is ${yourName} ${yourLastName}!`)

    var firstNumber = prompt("Lets add some numbers. what is the first number tto add?")
    var secondNumber = prompt("ender secound number")

    var result = Number(firstNumber) + Number(secondNumber)

    alert(`the ans is ${result}`)

    var documentBody = document.querySelector('body')

    var outputData = document.createElement('p')

    outputData.innerHTML = `Your name is ${yourName} ${yourLastName} <br> The result of your last name is ${result} <br> Thanks from ${name} ${lastName}`
    documentBody.appendChild(outputData)
}