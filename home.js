const bannerImage = document.getElementById("banner-img");
const bannerContainer = document.getElementById("banner-container");
const bannerText = document.getElementById("banner-title");
const text = document.getElementById("banner-text");
const form = document.getElementById("form");
const warning = document.getElementById("warning");

let userMail = document.getElementById("usermail");
let recievedMail = [];

recievedMail = JSON.parse(localStorage.getItem("UserMail")) || [];
if (recievedMail.length > 15) {
    recievedMail.splice(5);
}

const opacityReduce = () => {
    bannerImage.style.opacity = "0.4";
    bannerText.style.opacity = "0.9";
};

const opacityIncrease = () => {
    bannerImage.style.opacity = "0.9";
    bannerImage.style.transition = "ease-in-out 0.6s";
    // bannerText.style.opacity = "0.9";
};

const submitmailonclick = function(e) {
    e.preventDefault();

    const userMails = {
        userMail: userMail.value,
    };

    let gmailCheck = userMail.value.includes("@gmail.com");
    let yahooMailCheck = userMail.value.includes("@yahoo.com");

    if (gmailCheck || yahooMailCheck) {

        recievedMail.push(userMails.userMail);
        localStorage.setItem("UserMail", JSON.stringify(recievedMail));
        window.location.assign("/");
    } else {
        let warn = setInterval(() => {
            warning.innerText =
                "Please input a valid Email; Email must contain @gmail.com or @yahoo.com";
        }, 200);
        setInterval(() => {
            warning.innerText = "";
            clearInterval(warn);
        }, 5000);
    }
};