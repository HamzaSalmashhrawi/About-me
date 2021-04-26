/*
1-first of all im going to ask for user name and greet him/her

2-then i will ask the user 5 questions with yes or no questions about me by using prompts
*/

'use strict';
let quesTion, qus2, qus3, qus4, qus5, conf1, conf2;

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

                alert('thats correct there is along way in front of me with hardworking i will be a one');
            }
            else {
                alert('please answer with just yes or no');
            }


            qus5 = prompt('finale question DO i like cats?')
            if (qus5.toUpperCase() === 'YES' || qus5.toUpperCase() === 'Y') {
                alert('exaclty everyone should like cats btw i have two cats & i consider them as my sons');

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
    alert('correct');
    break;
    case 'NO':
    case 'N':
    alert('not correct');
    break;    
    default: 
    alert('please answer with yes or no');
}
