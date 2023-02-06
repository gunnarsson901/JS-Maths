document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByTagName('button');

    for(let button of buttons){
        button.addEventListener('click', function(){
            if(this.getAttribute('data-type') == 'submit'){
                checkAnswer();
            }else{
                let gameType = this.getAttribute('data-type');
                runGame(gameType);
            }
        })
    }
    
    runGame('multiplication');

})

/**
 * The main game "loop", called when the script is loaded and 
 * the users answer has been processed
 */
function runGame(gameType){

    // create two random numbers between 1 and 25
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    if(gameType === 'addition') {
        displayAdditionQuestion(num1, num2);
    } else if(gameType === 'multiplication'){
        displayMultiplyQuestion(operand1, operand2);
    }
}

function checkAnswer(){
    let userAnswer = parseInt(document.getElementById('answer-box').value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];

    if(isCorrect) {
        incrementScore();
        alert("Hey you got it right!")
    } else {
        incrementWrongAnswer();
        alert(`Woomp Womp, no Einestein here... 
        You answerd "${userAnswer}", the correct answer was "${calculatedAnswer[0]}"`)
    }

    runGame(calculatedAnswer[1]);
}

/**
 * Gets the operands (the numbers) and the operator ( plus, minus .. )
 * directly from the dom, and returns the correct answer.
 */
function calculateCorrectAnswer(){
    // parseInt makes the returned string in to an int. this allows us to calculate.
    let operand1 = parseInt(document.getElementById('operand1').innerText);
    let operand2 = parseInt(document.getElementById('operand2').innerText);
    let operator = document.getElementById('operator').innerText;
    
    if (operator == "+") {
        return [operand1 + operand2, "addition"];
    } else {
        alert(`Unlimplimented operator ${operator}`);
        trow `Unlimplimented operator ${operator}.Aborting!`;
    }

}

function incrementScore(){
    let oldScore = parseInt(document.getElementById('score').innerText);
    document.getElementById('score').innerText = ++oldScore;
}

function incrementWrongAnswer(){
    let incorrectScore = parseInt(document.getElementById('incorrect').innerText);
    document.getElementById('incorrect').innerText = ++incorrectScore;
}

function displayAdditionQuestion(operand1, operand2){
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent= operand2;
    document.getElementById('operator').textContent = "+";
}

function displayMultiplyQuestion(operand1, operand2){
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent= operand2;
    document.getElementById('operator').textContent = "x";
}