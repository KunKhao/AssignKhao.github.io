// Show picture after 10 seconds
setTimeout(function () {
    document.getElementById("hamburger").style.display = "block";

}, 10000);


// Show current date
const today = new Date();

document.getElementById("date").innerHTML =
    "Current Date: " + today.toDateString();
