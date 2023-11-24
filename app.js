// Iteration 1.3: Add background sound
let sound = new Audio("./mixkit-kidding-around-9 (mp3cut.net).mp3");
sound.play();
sound.loop = true;
sound.volume = 0.2;

// click sound

// const clickSound = new Audio('./click sound.wav');
let button = document.getElementById('play-button');

// clickSound.volume = 0.8;
var audio = document.getElementById("myAudio");

button.addEventListener("click", function() {
    // Play the audio when the button is clicked
    clickSound.play();
    clickSound.volume = 0.3
});

document.getElementById('userInfoForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevents the default form submission
    console.log('Form submitted!');
    playerInfo();
});

 //const button = document.getElementById('play-button');
 //const sound = document.getElementById('clickSound');

//     button.addEventListener('click', () => {
//         if (sound.paused) {
//             sound.play();
//         }
//          else {
//             sound.pause();
//             sound.currentTime = 0;
//         }
// });

