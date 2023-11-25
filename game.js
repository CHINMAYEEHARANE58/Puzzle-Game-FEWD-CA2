// no. of rows and columns


var rows = 4;
var columns = 4;

var presentBlock; //the block we are going to move
var sideBlock; // empty block

var turns = 0;


// orginal order of picture and incomplete order of picture
let orgOrder = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16"];  // orginal order 
let imgOrder = ["5", "8", "15", "9", "1", "16", "14", "6", "12", "11", "2", "3", "4", "10", "7", "13"];  //I didn't randomize as it can create unsolvable puzzles

let a = 0

let startTime;
window.onload = function(){
    startTime = new Date();  //start time when the page loads

    for(let i=0; i<rows; i++){
        for(let j=0; j<columns; j++){

            //created an img tag with id for example id="0-0"

            let block = document.createElement("img");
            block.id = imgOrder[a].toString();
            block.src = parseInt(imgOrder[a]) + ".png";
            block.classList.add('blockImg');


            //drag function
            block.addEventListener("dragstart", dragStart); //for clicking an image to drag
            block.addEventListener("dragover", dragOver); //moving image while clicking
            block.addEventListener("dragenter", dragEnter); //draging image over another
            block.addEventListener("dragleave", dragLeave); //dragged img leaving another img
            block.addEventListener("drop", dragDrop); // drag an image over another img, drop the image 
            block.addEventListener("dragend", dragEnd); //after drag drop to swap the two blocks

            document.getElementById("puzzle").append(block);
            a++
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
    
        // To make sure the block will only get dragged on block 16.png
        // if(!sideBlock.src.includes("16.png")){
        //     return;
        // }
    
        // To make sure the block will only get dragged on the 16.png block if it is adjusent
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
            let presentorder = imgOrder.indexOf(presentBlock.id)
            
            let sideImg = sideBlock.src;
            let sideorder = imgOrder.indexOf(sideBlock.id)
    
            presentBlock.src = sideImg;
            sideBlock.src = presentImg;

            let temp = imgOrder[presentorder]
            imgOrder[presentorder] = imgOrder[sideorder]
            imgOrder[sideorder] = temp

            presentBlock.id = imgOrder[presentorder]
            sideBlock.id = imgOrder[sideorder]

            turns+=1;
            console.log(turns)
            localStorage.setItem('turns', turns);
    
            console.log(imgOrder,"img",orgOrder,"org");
              
        // }
    
    }


}


// // drag sound
// let dragSound = new Audio("./sounds/drag sound.mp3");

// let blockSound = document.getElementById('puzzle')
// blockSound.onclick = () =>{
//     dragSound.play();
//     dragSound.volume = 2;
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

    //To get a random index from the loseTexts array
    const randomPhrase = Math.floor(Math.random() * loseTexts.length);
    console.log(randomPhrase)

    // Display the randomly selected message on the win page
    let loseTextElement = document.getElementById("losePhrase")
    loseTextElement.innerText = loseTexts[randomPhrase];
}

losePhrases();
