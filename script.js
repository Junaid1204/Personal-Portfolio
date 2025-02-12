
document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.getElementById("changing-text");
    const texts = ["UI/UX Designer", "Front-End Developer"];
    let index = 0;

    function changeText() {
        textElement.classList.add("fade-out"); // Start fade-out effect

        setTimeout(() => {
            index = (index + 1) % texts.length;
            textElement.textContent = texts[index];
            textElement.classList.remove("fade-out"); // Remove fade-out
            textElement.classList.add("fade-in"); // Start fade-in effect

            setTimeout(() => {
                textElement.classList.remove("fade-in"); // Remove fade-in
            }, 1000); // Keep fade-in for 1s
        }, 1000); // Change text after fade-out
    }

    setInterval(changeText, 3000); // Change text every 3 seconds
});
const text1 = document.getElementById("text1");
const text2 = document.getElementById("text2");
let isText1Visible = true;

setInterval(() => {
    if (isText1Visible) {
        text1.style.opacity = 0;
        text2.style.opacity = 1;
    } else {
        text1.style.opacity = 1;
        text2.style.opacity = 0;
    }
    isText1Visible = !isText1Visible;
}, 1500); // Switch every 3 seconds
const nav = document.querySelector("nav");
let lastScrollTop = 0;

window.addEventListener("scroll", () => {
    let scrollTop = window.scrollY;

    if (scrollTop > lastScrollTop) {
        nav.style.transform = "translate(-50%, -100%)"; // Hide while keeping it centered
    } else if (scrollTop === 0) {
        nav.style.transform = "translateX(-50%)"; // Show again at top
    }

    lastScrollTop = scrollTop;
});
