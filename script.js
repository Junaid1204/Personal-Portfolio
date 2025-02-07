
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
