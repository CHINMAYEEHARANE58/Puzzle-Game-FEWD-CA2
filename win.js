// // Retrieve turns from local storage
// var score = localStorage.getItem('score') ? parseInt(localStorage.getItem('score')) : 0;

// // Display the score on the page
//  console.log(score);
var storedScore = localStorage.getItem('score');

if (storedScore) {
    // Parse the score as an integer
    var score = parseInt(storedScore);

    // Display the score on the page
    document.querySelector(".score").textContent = "Score: " + score;
} else {
    document.querySelector(".score").textContent = "No score found.";
}


 function winPhrases() {
    const winTexts = [
        "Congratulations, you cracked it! Puzzle master!",
        "Victory is yours! Puzzle conquered!",
        "Bravo! You've successfully solved the puzzle",
        "Fantastic job! Puzzle completed",
        "Hats off to you! Puzzle triumph is yours!"
    ];

    // Get a random index from the winTexts array
    const randomPhrase = Math.floor(Math.random() * winTexts.length);

    // Display the randomly selected message on the win page
    const winTextElement = document.querySelector('h2');
    winTextElement.textContent = winTexts[randomPhrase];
}
// Call the winPhrases function when the win page is loaded
winPhrases();

