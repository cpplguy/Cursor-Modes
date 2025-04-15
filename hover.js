const fonts = [
    "Comic Sans MS", "Papyrus", "Lobster", "Pacifico", "VT323",
    "Fredricka the Great", "Bangers", "Creepster", "Permanent Marker",
    "Indie Flower", "Roboto", "Press Start 2P", "Fredoka One",
    "Dancing Script", "Rock Salt", "Quicksand", "Raleway",
    "Open Sans", "Montserrat", "Lora", "Merriweather", "Oswald"
];
const audios = ["sound1", "sound2", "sound3", "sound4","sound5", "scarySound"];
const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
if (isSafari){
    document.querySelector("#reset").style.left = "1%";
    document.querySelector("#reset").style.bottom = "20%";
        
    }
const neet = () => {
    document.querySelector("#night").style.backgroundColor = "black";
document.querySelector("#night").style.color = "white";
}
let nightMode = false;
const randomFont = () => {
    return fonts[Math.floor(Math.random() * fonts.length)];
};

const randdomFont = () => {
    document.querySelectorAll("div,h1,button").forEach(element => {
        if(element !== document.querySelector("#reset")){
        element.style.fontFamily = randomFont();
        }
    });
};

const moose = () => {
    document.querySelectorAll(".box").forEach(element => {
        element.removeEventListener("mouseover", element.handleMouseOver);
        element.removeEventListener("mouseout", element.handleMouseOut);
        element.handleMouseOver = () => {
            element.style.backgroundColor = nightMode ? "darkblue" : "lightgreen";
        };
        element.handleMouseOut = () => {
            element.style.backgroundColor = nightMode ? "black" : "white";
        };
        element.addEventListener("mouseover", element.handleMouseOver);
        element.addEventListener("mouseout", element.handleMouseOut);
    });
};

const element = document.getElementById("button");

const randomColor = () => {
    return `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
};

const randdomColor = () => {
    nightMode = false;
    document.querySelectorAll("div,h1,body,button").forEach(element => {
        element.style.color = randomColor();
        element.style.backgroundColor = randomColor();
        element.style.borderColor = randomColor();
        element.style.boxShadow = `1px 1px 10px 10px ${randomColor()}`;
        neet()
    });
};

document.querySelectorAll("button").forEach(element => {
    element.style.backgroundColor = randomColor();
});
const alertText = () => {
document.querySelectorAll("div").forEach(e => {
    e.addEventListener("click", () => {
        alert(`You are clicking on the ${e.id} mode!`);
    });
});
}
const reset = () => {
    const confirmYes = confirm("Are you sure you want to reset the colors and fonts?");
    if (confirmYes) {
        document.querySelectorAll("div,h1,body,button").forEach(element => {
            element.style.backgroundColor = "white";
            element.style.fontFamily = "Arial, sans-serif";
            element.style.color = "black";
            element.style.borderColor = "black";
            element.style.boxShadow = "5px 5px 20px 25px rgba(1, 1, 1, 0.3)"
        });
        moose();
        neet();
        document.querySelector("footer").style.color ="gray";
        document.querySelector("body").style.backgroundColor = "lightblue";
        nightMode = false;
    }
}

const night = () => {
    if (!nightMode) {
        rand = Math.random();
        nightMode = true;
        document.querySelectorAll("div,h1,body,button").forEach(element => {
            element.style.backgroundColor = rand > 0.5 ? "black" : "#2a1a40";
            element.style.color = "white";
            element.style.borderColor = "white";
            if(element !== document.querySelector("body")) {
            element.style.boxShadow = "2.5px 3px 20px 5px gray";
            }
            document.querySelector("footer").style.color = "white";
            document.querySelector("#copyright").style.color = "white";
        });
    } else {
        reset();
    }
    moose();
};
const whiteOrBlack = () => {
document.querySelectorAll("button").forEach(element => {
    let raand = Math.random();
    element.style.color = raand > 0.5 ? "black" : "white";
})
}
const buttonSound = () => {
    document.querySelectorAll("button, .box").forEach(element => {
        element.addEventListener("click", () => {
            let audio = document.getElementById(audios[Math.floor(Math.random() * audios.length - 1)]);
            if(Math.random() > 0.99){
                audio = document.getElementById("scarySound");
                audio.volume = 1;
            }
            audio.volume = Math.random() > 0.5 ? 0.2 : 0.3;
            if(audio === "sound4"){
                audio.volume = 1;
            }
            audio.play();
        })
    })
}
document.addEventListener("DOMContentLoaded", () => {
    whiteOrBlack();
    neet();
    moose();
    alertText();
    buttonSound();
});
const tim = () => {
let years = new Date().getFullYear();
let months = new Date().getMonth() + 1;
let days = new Date().getDate();
let hours =  new Date().getHours();
let minutes = new Date().getMinutes();
let seconds = new Date().getSeconds();
let displayHours = hours > 12 ? hours - 12 : hours;
if(seconds < 10){
    seconds = `0${seconds}`;
}
if(minutes < 10){
    minutes = `0${minutes}`;
}
if(days < 10){
    days = `0${days}`;
}
if(months < 10){
    months = `0${months}`;
}

if(hours === 0){
    displayHours = 12;
}
document.getElementById("year").innerText = `${months}/${days}/${years}`
document.getElementById("time").innerText = `${displayHours}:${minutes}:${seconds}${hours > 12 ? "PM" : "AM"}`;
}
setInterval(tim, 1000);
tim();