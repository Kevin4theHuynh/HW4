// Varibles
const questionEl = document.getElementById('questions');
const TextA = document.getElementById('textA');
const TextB = document.getElementById('textB');
const TextC = document.getElementById('textC');
const TextD = document.getElementById('textD');
const results = document.getElementById('.results');
const answerEls = document.querySelectorAll('.chosen');

let currentQuestion = 0;
let score = 0;

// Array of questions
const pokeQuiz = [
    {
        question: "How many evolutions does Eevee have?",
        a: '3',
        b: '5',
        c: '7',
        d: '8',
        correct: 'd',
    },
    {
        question: "In Pokemon Saphire/Ruby who are the main villians?",
        a: 'Team Rocket',
        b: 'Team Skull',
        c: 'Team Aqua/Magma',
        d: 'Team Galactic',
        correct: 'c',
    },
    {
        question: "Who is the mascot of Pokemon?",
        a: 'Pikachu',
        b: 'Togepi',
        c: 'Meowth',
        d: 'Slowpoke',
        correct: 'a',
    },
    {
        question: 'What stone do you use to evolve Pikachu?', 
        a: 'Fire stone',
        b: 'Water stone',
        c: 'Leaf stone',
        d: 'Thunder stone',
        correct: 'd',
    },
    {
        question: 'What year was Pokemon the series released?', 
        a: '1997',
        b: '1999',
        c: '2002',
        d: '2006',
        correct: 'a',
    },

];

playGame();

let timer = document.getElementById("timer")
let timeLeft = 50;


// Play game function
function playGame() {
    const currentQuizData = pokeQuiz[currentQuestion];
    questionEl.innerText = currentQuizData.question;
    TextA.innerText = currentQuizData.a;
    TextB.innerText = currentQuizData.b;
    TextC.innerText = currentQuizData.c;
    TextD.innerText = currentQuizData.d;
    unChosen();

    const setTimer = setInterval(function() {
        timer.textContent = "Time Left: " + timeLeft + "s"
        timeLeft -= 1;

        if (timeLeft === 0 || pokeQuiz.length === currentQuestion+1) {
            
        }
    }, 1000)
}

//  Selects answers
function getSelected() {
    
    let selected = undefined;

    answerEls.forEach((choice) => {
        if(choice.checked) {
            selected = choice.id;
        }
    });
    return selected; 
}

// Deselects answers for the next question
function unChosen() {
    answerEls.forEach((selected) => {
        selected.checked = false;
    });
}

// Controls the display
function text() {
    var x = document.querySelector(".styleSquare");
    var xEl = getComputedStyle(x)
    if (xEl.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none"
    }
   document.getElementById("hope").style.display = "none";
}

// Loops through each question checking if they are correct or not
subBtn.addEventListener('click', () => {
    const answer = getSelected();
    console.log(answer)
    if (answer) {
        if (answer === pokeQuiz[currentQuestion].correct) {
            console.log('You got it right')
            score++;
        } else {
            console.log('You got it wrong')
        }
    }
    currentQuestion++;
        if (currentQuestion < pokeQuiz.length) {
            playGame();
        } else {
            console.log('You finished the test')
            scoreText()
        }
});  


function scoreText() {
    var y = document.querySelector(".score")
    var yEl = getComputedStyle(y)
    
    if (yEl.display === "none") {
        y.style.display = "block";
        highScore.innerHTML = `<p> You scored ${score}/${pokeQuiz.length} <p>`
    } else {
        console.log('it did not work')
    }
}


