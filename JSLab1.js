//strict mode

"use strict";


//variable definitions

let grantHealth = 10;

let userHealth= 40;

let userWins= 0;

let userName= prompt("What is your name?");

let play1 = prompt("Would you like to play?");

let play = play1.toLowerCase();

//begin while loop

while (play === "yes") {
    //Health loss
    userHealth -= Math.floor(Math.random()*2)+1;
    console.log (`${userName} has ${userHealth} health left.`);
    grantHealth -= Math.floor(Math.random()*2)+1;
    console.log (`Grant has ${grantHealth} health left.`);
    //What happens when grant's health is 0
    if (grantHealth <= 0) {
        userWins += 1;
        grantHealth = 10;
    }
    //What happens when Grant wins
    if (userHealth <= 0) {
        console.log("you suuuuuuuuuck");
        break;
    }
    //What happens when you win
    if (userWins === 3) {
        console.log (`Congrats ${userName}, you win!`);
        break;

    }

}