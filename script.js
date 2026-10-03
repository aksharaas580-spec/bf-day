const correctPassword = "12082026";

function checkPassword() {
    const passwordInput = document.getElementById("password");
    const wrongMessage = document.getElementById("wrong-password");

    const enteredPassword = passwordInput.value.trim();

    if (enteredPassword === correctPassword) {

        // Hide password screen
        document.getElementById("lock-screen").classList.remove("active");

        // Show opening screen
        document.getElementById("opening").classList.add("active");

        // Clear error
        wrongMessage.innerText = "";

        // Little heart effect
        createHeartExplosion();

    } else {

        wrongMessage.innerText =
            "Hmm... that's not it, Kichaaaa 👀 ♡";

        const box = document.querySelector(".password-box");

        box.classList.add("shake");

        setTimeout(() => {
            box.classList.remove("shake");
        }, 500);
    }
}


function handleEnter(event) {
    if (event.key === "Enter") {
        checkPassword();
    }
}


function startWebsite() {
    showSection("intro");

    setInterval(createHeart, 800);
}


function showSection(sectionId) {

    const sections = document.querySelectorAll(".screen");

    sections.forEach(section => {
        section.classList.remove("active");
    });

    document.getElementById(sectionId).classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* Floating hearts */

function createHeart() {

    const container =
        document.getElementById("hearts-container");

    const heart =
        document.createElement("div");

    heart.className = "floating-heart";

    heart.innerHTML =
        Math.random() > 0.5 ? "♡" : "♥";

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.fontSize =
        (Math.random() * 18 + 10) + "px";

    const duration =
        Math.random() * 5 + 5;

    heart.style.animationDuration =
        duration + "s";

    container.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}


/* Heart explosion */

function createHeartExplosion() {

    const container =
        document.getElementById("hearts-container");

    for (let i = 0; i < 40; i++) {

        const heart =
            document.createElement("div");

        heart.className = "floating-heart";

        heart.innerHTML =
            Math.random() > 0.5 ? "♡" : "♥";

        heart.style.left =
            (40 + Math.random() * 20) + "vw";

        heart.style.bottom =
            (30 + Math.random() * 20) + "vh";

        heart.style.fontSize =
            (Math.random() * 25 + 12) + "px";

        heart.style.animationDuration =
            (Math.random() * 3 + 2) + "s";

        container.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }
}


/* Reasons */

const reasons = [
    "Everything about you. ♡",
    "The way you make me feel safe.",
    "The way I can be completely myself with you.",
    "Your little silly moments.",
    "The way you make me laugh.",
    "The way you listen to me.",
    "The way you make ordinary days special.",
    "The comfort I feel when I'm with you.",
    "The memories we keep making together.",
    "And honestly... just YOU. ♡"
];

let reasonIndex = 0;

function changeReason() {

    const text =
        document.getElementById("reason-text");

    reasonIndex++;

    if (reasonIndex >= reasons.length) {
        reasonIndex = 0;
    }

    text.style.opacity = "0";

    setTimeout(() => {

        text.innerText =
            reasons[reasonIndex];

        text.style.opacity = "1";

    }, 250);
}


/* Gift */

function openGift() {

    const gift =
        document.querySelector(".gift");

    const giftText =
        document.getElementById("gift-text");

    const finalMessage =
        document.getElementById("final-message");

    gift.style.transform =
        "scale(0) rotate(20deg)";

    gift.style.opacity = "0";

    giftText.style.opacity = "0";

    setTimeout(() => {

        finalMessage.classList.remove("hidden");

        finalMessage.style.animation =
            "fadeIn 1.5s ease forwards";

        createHeartExplosion();

    }, 500);
}