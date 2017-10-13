$(document).ready(functon(){



// var userText = document.getElementById("user-text");
// console.log(userText)

// doncument.onkeyup = function(event) {
// 	userText.textContent = event.key;
// };

	var userText = document.getElementById("user-text");
      
      console.log(userText)

      var wins = 0;
      var losses = 0;

      function updateWins() {
      	document.querySelector("#wins").innerHTML = "Wins: " + wins;
      };

      function updateLosses() {
      	document.querySelector("#losses").innerHTML = "Losses: " + losses;
      };

      updateWins();

      updateLosses();
     
      document.onkeyup = function(event) {

      	// var userGuess = event.key;

        userText.textContent = event.key;

        // var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

        // if ((userGuess === computerGuess)){

        // 	var html =
        // 		"<p>Wins: " + wins + "</p>" +
        // 		"<p>Losses: " + losses + "</p>" +
        // 		"<p>Guesses Left: " + userGuess + "</p>" +
        // 		"<p>Your Guesses so far: " + userGuess + "</p>";

        // }
      
      };
      
});