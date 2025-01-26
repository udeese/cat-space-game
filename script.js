let score = 0;
const scoreDisplay = document.getElementById("score");
const cat = document.getElementById("cat");
const hiddenButton = document.getElementById("hidden-button");

// Click event to change cat size randomly and update score
cat.addEventListener("click", () => {
    score += 1;
    scoreDisplay.textContent = score;

    let newSize = Math.random() * (200 - 100) + 100;
    cat.style.width = `${newSize}px`;

    // Play random cat sound
    let meowSounds = ["meow1.mp3", "meow2.mp3", "meow3.mp3"];
    let randomMeow = meowSounds[Math.floor(Math.random() * meowSounds.length)];
    new Audio(randomMeow).play();

    if (score >= 10) {
        startBonusRound();
    }
});

// Secret Disco Mode - Turns screen into flashing colors & changes cat
hiddenButton.addEventListener("click", () => {
    document.body.classList.toggle("disco-mode");
    cat.src = "lion.png"; // Change cat image to lion
    new Audio("party-buzzer.mp3").play();

    // Fireworks effect
    let fireworks = document.createElement("div");
    fireworks.classList.add("fireworks");
    document.body.appendChild(fireworks);
});

// Bonus Round Setup
function startBonusRound() {
    alert("Bonus Round Started! Space Adventure Begins!");

    // Load Space-Themed Platformer
    window.location.href = "bonus-round.html";
}
