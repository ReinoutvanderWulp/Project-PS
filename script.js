//JavaScript voor de back-to-top button
mybutton = document.getElementById("top");

window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

//JavaScript voor de klok op de index pagina
function realtimeClock() {

    const rtClock = new Date();

    let hours = rtClock.getHours();
    let minutes = rtClock.getMinutes();
    let seconds = rtClock.getSeconds();

    const amPm = (hours < 12) ? "AM" : "PM";

    hours = (hours > 12) ? hours - 12 : hours;

    hours = ("0" + hours).slice(-2);
    minutes = ("0" + minutes).slice(-2);
    seconds = ("0" + seconds).slice(-2);

    document.getElementById('clock').innerHTML =
        hours + "   :   " + minutes + "   :   " + seconds + " " + amPm;
    const t = setTimeout(realtimeClock, 500);

}