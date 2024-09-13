function redirect() {
    var sound = document.getElementById("audio");
    sound.play();
    setTimeout(function () { location.replace('home.html'); }, sound.duration * 1000);
}