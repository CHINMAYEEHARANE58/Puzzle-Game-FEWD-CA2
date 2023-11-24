
var rows = 4;
var columns = 4;

var presentBlock; //the block we are going to move
var sideBlock; // empty block

var score = 0;

var orgOrder = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16"];  // orginal order 
var imgOrder = ["5", "8", "15", "9", "1", "16", "14", "6", "12", "11", "2", "3", "4", "10", "7", "13"];  //I didn't randomize as it can create unsolvable puzzles


window.onload = function(){
    startTime = new Date();  //start time when the page loads

    for(let i=0; i<rows; i++){
        for(let j=0; j<columns; j++){

            //created an img tag with id for example id="0-0"

            let block = document.createElement("img");
            block.id = j.toString() + "-" + i.toString();
            block.src = imgOrder.shift() + ".png";
            block.classList.add('blockImg');
            block.style.width = '9rem';
            block.style.height = '6rem';


            //drag function
            block.addEventListener("dragstart", dragStart); //for clicking an image to drag
            block.addEventListener("dragover", dragOver); //moving image while clicking
            block.addEventListener("dragenter", dragEnter); //draging image over another
            block.addEventListener("dragleave", dragLeave); //dragged img leaving another img
            block.addEventListener("drop", dragDrop); // drag an image over another img, drop the image 
            block.addEventListener("dragend", dragEnd); //after drag drop to swap the two blocks

            document.getElementById("puzzle").append(block);
        }
    }
}

function dragStart(){
    presentBlock = this; //this refers to the img block being dragged
}

function dragOver(e){
    e.preventDefault();
}

function dragEnter(e){
    e.preventDefault();
}

function dragLeave(){

}

function dragDrop(){
    sideBlock = this; //this refers to the img block being dropped on
}

function dragEnd(){

    // if(!sideBlock.src.includes("16.png")){
    //     return;
    // }

    // let presentCoords = presentBlock.id.split("-"); //to convert "0-0" to ["0", "0"]
    // let i = parseInt(presentCoords[0]);
    // let j = parseInt(presentCoords[1]);

    // let sideCoords = sideBlock.id.split("-");
    // let i2 = parseInt(sideCoords[0]);
    // let j2 = parseInt(sideCoords[1]);

    // let moveLeft = i == i2 && j2 == j-1;
    // let moveRight = i == i2 && j2 == j+1;

    // let moveUp = j == j2 && i2 == i-1;
    // let moveDown = j == j2 && i2 == i+1;

    // let isAdjacent = moveLeft || moveRight || moveUp || moveDown;

    // if(isAdjacent){
        let presentImg = presentBlock.src;
        let sideImg = sideBlock.src;

        presentBlock.src = sideImg;
        sideBlock.src = presentImg;

        score+=1;

        //calculating time diffrence in minutes
        let endTime = new Date();
        let timeDiff = (endTime -startTime) /60000;

        
        if (timeDiff <= 5) {
            score += 100;
        } else if (timeDiff <= 10) {
            score += 80;
        } else if (timeDiff <= 15) {
            score += 60;
        } else if (timeDiff <= 20) {
            score += 40;
        } else if (timeDiff <= 25) {
            score += 20;
        }

        console.log("Score:", score);

        localStorage.setItem('score',score);
        
    // }

}


let levelSound = new Audio("./level bg music.mp3");
levelSound.play();
levelSound.loop = true;
levelSound.volume = 0.2;

// let sound = new Audio("https://www.jiosaavn.com/song/chill-gaming-music/ODsSYyBEZ1w");
// sound.play();
// sound.loop = true;
// sound.volume = 0.2;

// let levelSound = new Audio("https://www.jiosaavn.com/song/chill-gaming-music/ODsSYyBEZ1w");

// // Play audio in response to a user action, e.g., a button click
// document.getElementById('song').addEventListener('click', function () {
//     levelSound.play();
//     levelSound.volume = 0.3;
// });



// let levelSound = new Audio("./sounds/level bg music.mp3");
// levelSound.volume = 0.3;

// levelSound.addEventListener('loadeddata', function() {
//     levelSound.play();
// });

// levelSound.loop = true;


// // drag sound
// let dragSound = new Audio("./sounds/drag sound.mp3");

// let blockSound = document.getElementById('puzzle')
// blockSound.onclick = () =>{
//     dragSound.pause();
//     dragSound.currentTime = 0;
//     dragSound.play();
//     dragSound.volume = 2;
// }

// // drag sound
// let dragSound = new Audio("./sounds/drag sound.mp3");

// // Check if the 'puzzle' element exists before attaching the event listener
// let blockSound = document.getElementById('puzzle');
// if (blockSound) {
//     blockSound.onclick = () => {
//         dragSound.pause();
//         dragSound.currentTime = 0;
        
//         // Set the volume before playing the audio
//         dragSound.volume = 0.5; 
//         dragSound.play();
//     }
// } else {
//     console.error("Element with ID 'puzzle' not found.");
// }

// randomized lose phrases
function losePhrases() {
    const loseTexts = [
        "Great effort! Better luck next time!",
        "Keep your head up, you'll get it!",
        "Close call! Try again!",
        "Almost there! Another attempt?",
        "Don't give up, puzzles can be tricky!"
    ];

    // Get a random index from the loseTexts array
    const randomPhrase = Math.floor(Math.random() * loseTexts.length);

    // Display the randomly selected message on the win page
    const loseTextElement = document.querySelector('h4');
    loseTextElement.textContent = loseTexts[randomPhrase];
}
// Call the losePhrases function when the win page is loaded
losePhrases();


// let blockSound = document.getElementById('puzzle');

// let dragSound = new Audio('./drag sound.wav')
// dragSound.volume = 0.8;

// button.onclick = () => {
//     dragSound.pause();
//     dragSound.currentTime = 0;
//     dragSound.play();
// }