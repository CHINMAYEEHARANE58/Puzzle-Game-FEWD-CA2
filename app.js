// main page background sound
let sound = new Audio("./mixkit-kidding-around-9 (mp3cut.net).mp3");
sound.play();
sound.loop = true;
sound.volume = 0.2;

// click sound for play button

const clickSound = new Audio('./click sound.wav');
let button = document.getElementById('play-button');

button.addEventListener("click", function() {
    // Play the audio when the button is clicked
    clickSound.play();
    clickSound.volume = 0.3
});

document.getElementById('userInfoForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevents the default form submission
    console.log('Form submitted!');
    // playerInfo();
});


