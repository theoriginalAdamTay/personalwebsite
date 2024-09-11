function PlaySound() {
    var sound = document.getElementById("audio");
    sound.play();
    setTimeout(function () { location.href = 'home.html'; }, sound.duration * 1000);
}