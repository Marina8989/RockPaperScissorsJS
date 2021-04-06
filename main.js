let userCount = 0;
let compCount = 0;
let userScore = document.querySelector('#userScore');
let compScore = document.querySelector('#compScore');
let messageHeader = document.querySelector('.message > h2');
const r = document.querySelector('.r');
const p = document.querySelector('.p');
const s = document.querySelector('.s');



function compOption() {
    let option = ['r', 'p', 's']
    let randOption = Math.floor(Math.random() * option.length);

    if(randOption === 0) {
       randOption = 'r';
    }
    if(randOption === 1) {
       randOption = 'p';
    }
    if(randOption === 2) {
      randOption = 's';
    }
    return randOption;
}


function game(choice) {
    let computerChosed = compOption();
    
    // console.log('Computer: ' + computerChosed);
    // console.log('User: ' + choice);

    if((choice === 'p' && computerChosed === 'r') || (choice === 'r' && computerChosed === 's') || (choice === 's' && computerChosed === 'p')) {
        userCount++;
        userScore.innerHTML = userCount;
        messageHeader.innerHTML = 'User won';
        console.log('Computer: ' + computerChosed);
        console.log('User: ' + choice);
    }
    if((choice === 'r' && computerChosed === 'p') || (choice === 's' && computerChosed === 'r') || (choice === 'p' && computerChosed === 's')) {
        compCount++;
        compScore.innerHTML = compCount;
        messageHeader.innerHTML = 'Comp won';
        console.log('Computer: ' + computerChosed);
        console.log('User: ' + choice);
    }
    if((choice === 'r' && computerChosed === 'r') || (choice === 'p' && computerChosed === 'p') || (choice === 's' && computerChosed === 's')) {
        messageHeader.innerHTML = 'Draw';
        console.log('Computer: ' + computerChosed);
        console.log('User: ' + choice);
    }

    return choice;
}


function makeGame() {

    r.addEventListener('click', function() {
        game('r');
        r.style.border = '1px solid green';
        
    })
    p.addEventListener('click', function() {
       game('p');
       p.style.border = '1px solid green';
    })
    s.addEventListener('click', function() {
       game('s');
       s.style.border = '1px solid green';
    })

}
makeGame()