var quotes = [
    "You NODE NOTHING!,DAT SASS! YEAH BOY!.",
    "WASUP MOTHERFORKERS!!.", "$node dollan.js ***stack smashing detected***!!", "I don't learn from mistakes, the mistakes learn from me!", "I create bugs to fix bugs so I constantly have a job", "I don't write confusing code, it's my co-workers who are just always confused!", "I go to all the meet ups in town, that’s how I get fed.Free pizza, baby!", "I planned on learning http, css, all those acronyms but decided it was easier to get code from Github", "VueJs? How about Vue deez nuts!", "Boolean, Boolean, Boolean, Boolean Everywhere!!", "I am about the free life. Sublime Text trial version for life", "Fake it they will never know", "Dollan's way,I will return the hostages for one million dollans", "Fear not the programmer who has written 10000 different lines of codes once. Fear the programmer who has written the same one line of code 10000 times.", "Dollan is like a bad baby daddy. You only see him once a month"
];

function randomImage() {
    var el = document.getElementById("random-image-container");
    var randomNumber = Math.floor((Math.random() * 16) + 1);
    if (randomNumber == 1) {
        el.className = "random-image-01";
    }
    if (randomNumber == 2) {
        el.className = "random-image-02";

    }
    if (randomNumber == 3) {
        el.className = "random-image-03";
    }
    if (randomNumber == 4) {
        el.className = "random-image-04";
    }
    if (randomNumber == 5) {
        el.className = "random-image-05";
    }
    if (randomNumber == 6) {
        el.className = "random-image-06";

    }
    if (randomNumber == 7) {
        el.className = "random-image-07";
    }
    if (randomNumber == 8) {
        el.className = "random-image-08";
    }
    if (randomNumber == 9) {
        el.className = "random-image-09";
    }
    if (randomNumber == 10) {
        el.className = "random-image-10";
    }
    if (randomNumber == 11) {
        el.className = "random-image-11";
    }
    if (randomNumber == 12) {
        el.className = "random-image-12";
    }
    if (randomNumber == 13) {
        el.className = "random-image-13";
    }
    if (randomNumber == 14) {
        el.className = "random-image-14";
    } else if (randomNumber == 15) {
        el.className = "random-image-15";
    }
    if (randomNumber == 16) {
        el.className = "random-image-16";
    }
}





function genQuote() {
    var randomQuote = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote').innerHTML = quotes[randomQuote];
}