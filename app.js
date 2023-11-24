// Iteration 1.3: Add background sound
let sound = new Audio("../mixkit-kidding-around-9 (mp3cut.net).mp3");
sound.play();
sound.loop = true;
sound.volume = 0.2;

// click sound
let button = document.getElementById('play-button');

let clickSound = new Audio('./sounds/click sound.wav')
clickSound.volume = 0.8;

button.onclick = () => {
    clickSound.pause();
    clickSound.currentTime = 0;
    clickSound.play();
}

// const button = document.getElementById('play-button');
// const sound = document.getElementById('clickSound');

//     button.addEventListener('click', () => {
//         if (sound.paused) {
//             sound.play();
//         }
//          else {
//             sound.pause();
//             sound.currentTime = 0;
//         }
// });

