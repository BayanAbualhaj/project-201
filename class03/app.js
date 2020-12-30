'use strict';
var b=0;
var naame= prompt('What is your name?');
// console.log(naame);
alert("Hi " + naame +" , my name is Bayan");
alert("Welcome to my own website "+ naame + " hope taht you like it:)");
alert("Lets play a short yeror no game about me^^");

var userasnswer = prompt('Am I university graduate?yes/no');
// console.log(userasnswer);
if (userasnswer.toLowerCase()==="yes"){
    alert("YEESSS");
    b++
}else{
    alert("yes I am ^^");
}

var userans2 = prompt ('Is Black my favorate color ?yes/no');
// console.log(userans2);
if (userans2.toLowerCase()==="yes"){
    alert("You got it right");
    b++
}else {
    alert("Why not its the king of colors");
}

var userans3 =prompt("Am I a night pesron?yes/no");
// console.log(userans3);
if (userans3.toLowerCase()==="yes"){
    alert("No I don't like the dark");
}else {
    alert("from dusk till down :D");
    b++
}

var userans4 = prompt("Am I a reader?yes/no") ;
// console.log(userans4);
if (userans4.toLowerCase()==="yes"){
    alert("3 books a mounth ");
    b++
}else{
    alert("I love reading");
}

var userans5= prompt("Do I love pets? yes/no");
// console.log(userans5);
if (userans5.toLowerCase()==="yes"){
    alert("they are the cutest thing ever");
    b++
}else{
    alert("I adore them");
}

for (var i =0; i<4;i++){
    var siblings= prompt("How many siblings I have ? hint:it's a pair num");
    var num = parseInt (siblings);
    console.log(siblings);
    if (num===6){
        alert("That's right I have 3 brothers and 3 sisters in total of 6");
        b++
        break;
    }else if (num< 6){
        alert("they are more than that ! try again please");
    }else {
        alert("they are less than that please try again");
    }
}

var brothersArray= ['ahmad','mohammad','mahmoud'];
var counter =0;
while(counter <6 ){

    var brotherName = prompt("What do you think my brothers name is? hint: they are all named in one of our profet names");
    console.log(brotherName);

    for (var index = 0; index< 3 ; index++){
        console.log(brothersArray[index])
        if (brotherName.toLowerCase()===brothersArray[index]){
            alert("Its right there names are Ahmad, mohammad and mahmoud");
            b++
            counter=6
            
        }else{
            counter++
        }
        
        if (counter===6){
            alert("Thier names are Mohammad, Ahmad and Mahmoud");
        }
    }
}

alert ("you got "+ b +" out of 7");
