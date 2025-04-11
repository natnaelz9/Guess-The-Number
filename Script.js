'use strict';

/*console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '.....correct number';
document.querySelector('.score').textContent='10';
document.querySelector('.number').textContent='13'

document.querySelector('.Guess').value = 23;
console.log(document.querySelector('.Guess').value);
*/ 
let secretnumber=Math.trunc(Math.random()*20)+1;
let score=20;
let highscore=0;
const displaymessage=function(message){
document.querySelector('.message').textContent=message;
}
document.querySelector('.check').addEventListener
('click', function(){
    const guess= Number(document.querySelector('.Guess').value)
    console.log(guess, typeof guess)

    if(!guess){
        displaymessage( 'No number Please write some number');

    }else if(guess===secretnumber){
        displaymessage( 'You got the correct number')
        document.querySelector('body').style.backgroundColor=' #60b436';
        document.querySelector('.number').textContent=secretnumber;
        document.querySelector('.message').style.fontSize='40px';
        if(score>highscore){
            highscore =score;
            document.querySelector('.highscore').textContent=highscore;
            
        }

    }else if(guess!==secretnumber){
        if(score>1){
            document.querySelector('.message').textContent = guess<secretnumber ?'too low':'too high' ;
            score--;
            document.querySelector('.score').textContent=score;
        }else{
            document.querySelector('.message').textContent = 'you lose the game';
            document.querySelector('.score').textContent=0;

    }
}
    
    /*else if(guess<secretnumber){
        if(score>1){
        document.querySelector('.message').textContent = 'too low';
        score--;
        document.querySelector('.score').textContent=score;
    }else{
        document.querySelector('.message').textContent = 'you lose the game';
        document.querySelector('.score').textContent=0;

    }
    }else if(guess>secretnumber){
        if(score>1){
        document.querySelector('.message').textContent = 'too high';
        score--;
        document.querySelector('.score').textContent=score;
    }else{
        document.querySelector('.message').textContent = 'you lose the game';
        document.querySelector('.score').textContent=0;
    }
}*/
})
document.querySelector('.btnAgain').addEventListener
('click',function(){
    score=20;
    secretnumber=Math.trunc(Math.random()*20)+1;

    document.querySelector('.message').textContent = 'start guessing....';
    document.querySelector('.message').style.fontSize = '20px';
    document.querySelector('.score').textContent=score;
    document.querySelector('.number').textContent='?';
    document.querySelector('body').style.backgroundColor='rgb(32, 30, 30)';
   // document.querySelector('.guess').value=' ';

})