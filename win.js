// // Retrieve turns from local storage

let moves = localStorage.getItem('turns');

document.querySelector(".score").textContent = `Moves: ${moves}`;

// wining phrases

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

