//Game values
let min = 1,
    max = 10,
    winningNum = getWININGNUM(min,max),
    guessesLeft = 3;
    
// ui Elements
const game = document.querySelector('#game'),
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    guessBtn = document.querySelector('#guess-btn'),
    guessInput = document.querySelector('#guess-input'),
    message = document.querySelector('.message');
//Assign ui min and max
minNum.textContent = min;
maxNum.textContent = max;
//Play Again eventlistener
game.addEventListener('mousedown',function(e){
    if(e.target.className === 'play-again'){
        window.location.reload();
    }

})

// Listen for guess
guessBtn.addEventListener('click',function(){
    let guess = parseInt(guessInput.value);

    //Validate
    if(isNaN(guess) || guess>max || guess<min){
        setMessage(`Please enter a number between ${min} and  ${max}`,'red');
    }
    if(guess === winningNum){
        //Game over won
        //Disable the input 
        gameOver(true,`${winningNum} is correct, You win!`);

    }else{
        //wRONG NUMBER
        guessesLeft -=1
        if(guessesLeft===0){
            //Game over -Lost
           gameOver(false,`Game over Lost!! The correct number was ${winningNum}`)


        }
        else{
            //Game continues -answer wrong
          
            setMessage(`You have ${guessesLeft} guesses left! `,'orange')
            guessInput.value = '';
        }
    }
});
function gameOver(won,msg){
     //Disable the input 
     let color;
     won === true ?color='green':color = 'orange';
     //Set textcolor
     message.style.color = color
     guessInput.disabled=true;
     
     guessInput.style.borderColor = color;
     //message
     setMessage(msg)
     //Playagain
     guessBtn.value = 'PLAY AGAIN';
     guessBtn.className += 'play-again';
}
function setMessage(msg,color){
  
    message.style.color = color;
    message.textContent = msg
}



function getWININGNUM(min,max){
    return parseInt((Math.random()*(max-min+1)));

}