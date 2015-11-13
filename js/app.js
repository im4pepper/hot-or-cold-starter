$(document).ready(function(){
	/* variables */
	var randomNumber = 0;
    var userGuess = 0;
    var guessCount = 0;
    var finish = false;

  /* Generate a random number to begin play */
    function randomNumberGenerator() {
        randomNumber = (Math.floor(Math.random()*100));
        console.log("Random number = " + randomNumber);
    }

    randomNumberGenerator();

    function negativeAmount() {
        if (userGuess / randomNumber === 1){
            setFeedback("You win");
            finish = true;
        }
    }

    function positiveAmount() {
        if (userGuess / randomNumber === 1){
            setFeedback("You win");
            finish = true;
        }
    }

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

    /* Send feedback to the user function */
    function setFeedback(feedback) {
        $('#feedback').text(feedback);
    }

    /* User attempts counter function */
    function setCount(count){
        $('#count').text(guessCount);
    }

    function comparisonAmount(){
        if (userGuess - randomNumber > 0) {
            negativeAmount();
        } else {
            positiveAmount();
        }
    }

    /* Game reset functions */
    function newGame(){
        guessCount = 0;
        finish = false;
        $('#userGuess').val('');
        $('#count').text(guessCount);
        $('#guessList li').remove();
        randomNumber = (Math.floor(Math.random()*100));
        /*setFeedback("Make your guess!");*/
        console.log('it works! The new random number is ' + randomNumber);
    }

    /* Clear board - begin new game */
    $(".new").click(function() {
    newGame();
  });

    /* Check user input */
function checkInput(){
    if(isNaN(userGuess)) {
        alert("Enter any whole number from 1 - 100!");
    } else if(userGuess === " ") {
        alert("You must input a number to play");
    } else if (userGuess < 0 || userGuess > 100) {
        alert("Plese enter a number from 1 - 100!");
    } else {
        comparisonAmount();
        console.log("User guess = " + userGuess);
        $('#userGuess').val('');
        guessCount++;
        setCount(guessCount);
        $('ul#guessList').append("<li>" + userGuess + "</li>");
    console.log("Guess counter is working");
    }
}
  /*--- Get user input --*/
    $("form").submit(function(event){
        event.preventDefault();
        //if user finished the game, user is not allowed to continue!
        if(!finish){
            userGuess = $('#userGuess').val();
            checkInput();
        } else {
            setFeedback("You've already won! Time to start another game!");
        }
    });

});


