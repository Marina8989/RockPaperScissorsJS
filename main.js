let userCount = 0;
let compCount = 0;
let userScore = document.querySelector('#userScore');
let compScore = document.querySelector('#compScore');
let messageHeader = document.querySelector('.message > h2');
const r = document.querySelector('.r');
const p = document.querySelector('.p');
const s = document.querySelector('.s');
const reset = document.querySelector('.reset');
const userH4 = document.querySelector('#user');
const compH4 = document.querySelector('#comp');


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

    
    if(userCount == 10){
        userScore.style.color = 'green';
        messageHeader.innerHTML = 'User WON!!!!! 🎉'
        setTimeout(startOver, 2000);
    }
    if(compCount == 10){
       compScore.style.color = 'green';
       messageHeader.innerHTML = 'Computer WON!!!! 🎉'
       setTimeout(startOver, 2000);
       
    }

    //return choice;
}

function startOver() {
    userCount = 0;
    compCount = 0;
    userScore.innerHTML = userCount;
    compScore.innerHTML = compCount;
    compScore.style.color = 'white';
    userScore.style.color = 'white';
    messageHeader.innerHTML = `Let's Play!`;
}


function resetGame() {

    reset.addEventListener('click', () => {
        userCount = 0;
        userScore.innerHTML = userCount;

        compCount = 0;
        compScore.innerHTML = compCount;

        messageHeader.innerHTML = `Let's play!`;
    })

}
resetGame();

function makeGame() {

    r.addEventListener('click', function() {
        game('r');
        console.log('userUser:' + userCount);
        console.log('compCompcomp:' + compCount);
    })
    p.addEventListener('click', function() {
       game('p');
       console.log('userUser:' + userCount);
       console.log('compCompcomp:' + compCount);
    })
    s.addEventListener('click', function() {
       game('s');
       console.log('userUser:' + userCount);
       console.log('compCompcomp:' + compCount);
    })

}
makeGame();
