
/*
1-first of all im going to ask for user name and greet him/her

2-then i will ask the user 5 questions with yes or no questions about me by using prompts
*/
'use strict';

let qus2, qus3, qus4, qus5,  conf1, conf2, q , quesTion ;
 
let score = 0;
let output=prompt ( ('hello could you please enter your name')) ;
function quesTione (q) {
    let ouTr =confirm (('welcome ' + q + ' to my website'));
    return q,ouTr ;
} 

quesTione(output);

conf2 = confirm("let's see if you know me please answer with yes or no");

qus2 = prompt('my name is khalel?');

function answer1 (ff){
    if (ff.toUpperCase() === 'YES' || ff.toUpperCase() === 'Y') {

        alert('WHO IS KHALEL!!!!!!!!!');
    }
    else if (ff.toUpperCase() === 'NO' || ff.toUpperCase() === 'N') {
        score++;
        alert('Correct! you passed the first question');
    }
    else {
        alert('please answer with just yes or no');
    }
    
    
}
answer1(qus2);


qus3 = prompt('Am i 60 years old ?')
function answer2(rr){
    if (rr.toUpperCase() === 'YES' || rr.toUpperCase() === 'Y') {
        alert('LOL Im not a grandpa');

    }
    else if (rr.toUpperCase() === 'NO' || rr.toUpperCase() === 'N') {
        score++;
        alert('Nice you know that i still young and there is alot of years ahead of me to develop myself ان شاء الله');
    }
    else {
        alert('please answer with just yes or no');
    }

}
 answer2(qus3);
 
 
 qus4 = prompt('Am i a professional coder?')
 
 function answer3(tt){
    if (tt.toUpperCase() === 'YES' || tt.toUpperCase() === 'Y') {
        alert('not correct oneday i will be inshallah');

    }
    else if (tt.toUpperCase() === 'NO' || tt.toUpperCase() === 'N') {
        score++;
        alert('thats correct there is along way in front of me with hardworking i will be a one');
    }
    else {
        alert('please answer with just yes or no');
    }
 }

 answer3(qus4);


 qus5 = prompt('fifth question DO i like cats?')

function answer4 (yy){
    if (yy.toUpperCase() === 'YES' || yy.toUpperCase() === 'Y') {
        alert('exaclty everyone should like cats btw i have two cats & i consider them as my sons');
        score++;
    }
    else if (yy.toUpperCase() === 'NO' || yy.toUpperCase() === 'N') {

        alert('get out of my website!!!');
    }
    else {
        alert('please answer with just yes or no');
    }


}

answer4(qus5);


let deMo = prompt('my name is hamza?');
function answer5(uu){
    switch (uu.toUpperCase()) {
        case 'YES':
        case 'Y':
            score++;    
        alert('correct');
        break;
        case 'NO':
        case 'N':
        alert('not correct');
        break;    
        default: 
        alert('please answer with yes or no');
    }
    

}

answer5(deMo);


let userAnswer = parseInt(prompt('On a Scale out of 10 how much do think i like the nature'));

let count = 0;

function answer6(pp){
    for (let i = 2; i <= 4; i++) {
        if (pp == 10) {
            alert('you got it!');
            score++;
            break;
    
        } else if (pp <10 ){
            alert('try higher');
            pp = prompt('choose between 1 to 10')
            count++;
        }
         else {
            (pp != 10);
            alert('Not correct, try higher');
            pp = prompt('try again how much do think i like the nature')
            count++;
        }
    }
    if (count == 4) {
        alert('i told you its higher the correct answer was 10 :(');
    } 
    
    
}

answer6(userAnswer);







let seRies = ['mind hunter','breaking bad'];
let anSr = prompt('which series i like the most out of these four ( peaky blinders '+'  money heist  '+' breaking bad  '+ ' mind hunter)?');
anSr = anSr.toLocaleLowerCase();
let coUnt = 0;


function answer7(gg){
    for (let i = 0; i < 6; i++) {
        if (gg === seRies[0] || gg === seRies[1] ) {
            alert('that is great you are inside my head ' + gg + ' one of my best series');
            score++;
            break;
        } else {
            alert('try again it should be clear');
            gg = prompt('try again choose one of these peaky blinders money heist breaking bad mind hunter')
            coUnt++;
        }
    }
    if(coUnt==6){
        alert('you should stop watching series you missed up six times it was mind hunter '+' breaking bad')
    }
    console.log(score);
    
    alert('you got  ' + score)

}


answer7(anSr);
            

