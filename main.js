let userCount = 0;
let compCount = 0;
let userScore = document.querySelector('#userScore');
let compScore = document.querySelector('#compScore');
let messageHeader = document.querySelector('.message > h2');
const r = document.querySelector('.r');
const p = document.querySelector('.p');
const s = document.querySelector('.s');


function findOption() {
    let option = ['r', 'p', 's']
    let randOption = Math.floor(Math.random() * option.length);
    console.log(randOption);
}


function game(choice) {
    schoice = findOption();
}


function makeGame() {

    r.addEventListener('click', function() {
        game('r');
    })
    p.addEventListener('click', function() {
       game('p');
    })
    s.addEventListener('click', function() {
       game('s');
    })

}
makeGame()