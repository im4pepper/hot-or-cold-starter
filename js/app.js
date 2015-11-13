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
        } else if ((userGuess - randomNumber) > 60.5){
            setFeedback("You're absolutely freezing now!");
        } else if ((userGuess - randomNumber) > 55.5){
            setFeedback("Brrr! Its freezing cold!");
        } else if ((userGuess - randomNumber) > 50.5){
            setFeedback("You are very cold!");
        } else if ((userGuess - randomNumber) > 40.5) {
            setFeedback("You are cold!");
        } else if ((userGuess - randomNumber) > 30.5) {
            setFeedback("You're getting warm");
        } else if((userGuess - randomNumber) > 20.5) {
            setFeedback("It's getting really warm now!");
        } else if((userGuess - randomNumber) > 15.5) {
            setFeedback("You're getting very warm!");
        } else if ((userGuess - randomNumber) > 7.5){
            setFeedback("You are hot!");
        } else if ((userGuess - randomNumber) > 5.5){
            setFeedback("Yikes! You're really hot!");
        } else if((userGuess - userGuess) > 1.5){
            setFeedback("Its burning hot!");
        }else if ((userGuess - randomNumber) > 0.5){
            setFeedback("So hot, you can feel the burn of winning!");
        } else {
        }
    }

    function positiveAmount() {
        if (userGuess / randomNumber === 1){
            setFeedback("You win");
            finish = true;
          } else if ((userGuess - randomNumber) > 60.5){
            setFeedback("You're absolutely freezing now!");
        } else if ((userGuess - randomNumber) > 55.5){
            setFeedback("Brrr! Its freezing cold!");
        } else if ((userGuess - randomNumber) > 50.5){
            setFeedback("You are very cold!");
        } else if ((userGuess - randomNumber) > 40.5) {
            setFeedback("You are cold!");
        } else if ((userGuess - randomNumber) > 30.5) {
            setFeedback("You're getting warm");
        } else if((userGuess - randomNumber) > 20.5) {
            setFeedback("It's getting really warm now!");
        } else if((userGuess - randomNumber) > 15.5) {
            setFeedback("You're getting very warm!");
        } else if ((userGuess - randomNumber) > 7.5){
            setFeedback("You are hot!");
        } else if ((userGuess - randomNumber) > 5.5){
            setFeedback("Yikes! You're really hot!");
        } else if((userGuess - userGuess) > 1.5){
            setFeedback("Its burning hot!");
        }else if ((userGuess - randomNumber) > 0.5){
            setFeedback("So hot, you can feel the burn of winning!");
        } else {
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
        setFeedback("Make your guess!");
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


