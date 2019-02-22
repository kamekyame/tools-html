out = document.getElementById('out');

audio = new Audio("music/STAY GOLD.mp3");
audio.play();


volumeBar = document.getElementById("volume");
speedBar = document.getElementById("speed");
volumeBar.value = 100;
speedBar.value = 50;

function VolumeOut() {
    console.log(speedBar.value);
    audio.volume = volumeBar.value / 100

} function SpeedOut() {
    var a = parseInt(speedBar.value);
    console.log(a + 50);
    audio.playbackRate = (parseInt(speedBar.value) + 50) / 100

}

