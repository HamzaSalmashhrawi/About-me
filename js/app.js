/*
1-first of all im going to ask for user name and greet him/her

2-then i will ask the user 5 questions with yes or no questions about me by using prompts
*/

'use strict';
let quesTion, qus2, qus3, qus4, qus5, conf1, conf2;
let score = 0;
quesTion = prompt('hello could you please enter your name');
console.log(quesTion);
conf1 = confirm('welcome ' + quesTion + ' to my website');
switch (conf1) {
    case true:
        {
            conf2 = confirm("let's see if you know me please answer with yes or no");

            qus2 = prompt('my name is khalel?');

            if (qus2.toUpperCase() === 'YES' || qus2.toUpperCase() === 'Y') {

                alert('WHO IS KHALEL!!!!!!!!!');
            }
            else if (qus2.toUpperCase() === 'NO' || qus2.toUpperCase() === 'N') {
                score++;
                alert('Correct! you passed the first question');
            }
            else {
                alert('please answer with just yes or no');
            }
            qus3 = prompt('Am i 60 years old ?')
            if (qus3.toUpperCase() === 'YES' || qus3.toUpperCase() === 'Y') {
                alert('LOL Im not a grandpa');

            }
            else if (qus3.toUpperCase() === 'NO' || qus3.toUpperCase() === 'N') {
                score++;
                alert('Nice you know that i still young and there is alot of years ahead of me to develop myself ان شاء الله');
            }
            else {
                alert('please answer with just yes or no');
            }

            qus4 = prompt('Am i a professional coder?')
            if (qus4.toUpperCase() === 'YES' || qus4.toUpperCase() === 'Y') {
                alert('not correct oneday i will be inshallah');

            }
            else if (qus4.toUpperCase() === 'NO' || qus4.toUpperCase() === 'N') {
                score++;
                alert('thats correct there is along way in front of me with hardworking i will be a one');
            }
            else {
                alert('please answer with just yes or no');
            }


            qus5 = prompt('fifth question DO i like cats?')
            if (qus5.toUpperCase() === 'YES' || qus5.toUpperCase() === 'Y') {
                alert('exaclty everyone should like cats btw i have two cats & i consider them as my sons');
                score++;
            }
            else if (qus5.toUpperCase() === 'NO' || qus5.toUpperCase() === 'N') {

                alert('get out of my website!!!');
            }
            else {
                alert('please answer with just yes or no');
            }


        }
}

let deMo = prompt('my name is hamza?');
switch (deMo.toUpperCase()) {
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

// the sixth question for the user


let userAnswer = parseInt(prompt('On a Scale out of 10 how much do think i like the nature'));

let count = 0;

for (let i = 2; i <= 4; i++) {
    if (userAnswer == 10) {
        alert('you got it!');
        score++;
        break;

    } else if (userAnswer <10 ){
        alert('try higher');
        userAnswer = prompt('choose between 1 to 10')
        count++;
    }
     else {
        (userAnswer != 10);
        alert('Not correct, try higher');
        userAnswer = prompt('try again how much do think i like the nature')
        count++;
    }
}
if (count == 4) {
    alert('i told you its higher the correct answer was 10 :(');
} 


// the seventh question 



let seRies = ['mind hunter','breaking bad'];
let anSr = prompt('which series i like the most out of these four ( peaky blinders '+'  money heist  '+' breaking bad  '+ ' mind hunter)?');
anSr = anSr.toLocaleLowerCase();
let coUnt = 0;
for (let i = 0; i < 6; i++) {
    if (anSr === seRies[0] || anSr === seRies[1] ) {
        alert('that is great you are inside my head ' + anSr + ' one of my best series');
        score++;
        break;
    } else {
        alert('try again it should be clear');
        anSr = prompt('try again choose one of these peaky blinders money heist breaking bad mind hunter')
        coUnt++;
    }
}
if(coUnt==6){
    alert('you should stop watching series you missed up six times it was mind hunter '+' breaking bad')
}
console.log(score);

alert('you got  ' + score);
