const squares = document.querySelectorAll('.square');
const mole = document.querySelector('.mole');
const timeLeft =  document.querySelector('#time-left');
const score = document.querySelector('#score');

let result = 0;
let hitPostition
let currentTime = 60
let timerId = null

function randomsquare(){
    squares.forEach(square => {
        square.classList.remove('mole')
    })

 let randomsquare = squares[Math.floor(Math.random() * 9)];
 randomsquare.classList.add('mole')

 hitPostition = randomsquare.id
}

squares.forEach(square =>  {
    square.addEventListener('mousedown', () => {
        if (square.id == hitPostition)  {
            result++
            score.textContent = result
            hitPostition = null
        }

    })
})


function moveMole(){
    timerId = setInterval(randomsquare, 800)
}

moveMole()

function countDown() {
    currentTime--
    timeLeft.textContent = currentTime

    if (currentTime == 0) {
        clearInterval(countDownTimerId)
        clearInterval(timerId)
        alert('GAME OVER! Your final score is ' + result)
        
    }

}

let countDownTimerId = setInterval(countDown,1000)