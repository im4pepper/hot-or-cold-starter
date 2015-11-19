$(document).ready(function(){
	/* variables */
	var randomNumber;
    var userGuess = 0;
    var guessCount = 0;
    var finish = false;

  /* Generate a random number to begin play */
    function randomNumberGenerator() {
        randomNumber = (Math.floor(Math.random()*100) + 1);
        console.log("Random number = " + randomNumber);
    }

    randomNumberGenerator();

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
        var difference = Math.abs(userGuess - randomNumber);
        
        if (userGuess == randomNumber){
            setFeedback("You win!");
            finish = true;

        } else if (difference >= 1 && difference <= 2) {
            setFeedback("So hot you can feel the burn of winning!");
        } else if (difference > 2 && difference < 10) {
            setFeedback("You are hot!");
        } else if (difference > 10 && difference < 20) {
            setFeedback("You are warm!");
        } else if (difference > 20 && difference < 35) {
            setFeedback("Try again!");
        } else if (difference > 35 && difference < 50) {
            setFeedback("You are cold!");
        } else if (difference > 50) {
            setFeedback("You are freezing cold!");
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
        setFeedback("Make your guess!");
        console.log("The new random number = " + randomNumber);
    }

    /* Clear board - begin new game */
    $(".new").click(function() {
    newGame();
  });

    /* Check user input */
function checkInput(){
    if(isNaN(userGuess)) {
        setFeedback("Enter any whole number from 1 - 100 to play!");
    } else if(userGuess === " ") {
        setFeedback("You must input a number to play");
    } else if (userGuess < 1 || userGuess > 100) {
        setFeedback("Plese enter a number from 1 - 100!");
    } else {
        comparisonAmount();
        /*console.log("User guess = " + userGuess);*/
        $('#userGuess').val('');
        guessCount++;
        setCount(guessCount);
        $('ul#guessList').append("<li>" + userGuess + "</li>");
        /*console.log("Guess counter is working");*/
    }
}
  /*--- Get user input --*/
    $("form").submit(function(event){
        event.preventDefault();
        //if user finished the game, user is not allowed to continue!
        if(!finish){
            userGuess = Number($('#userGuess').val());
            checkInput();
        } else {
            setFeedback("You've already won! Time to start another game!");
        }
    });

});
