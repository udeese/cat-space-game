const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Player Variables
let player = {
    x: 50,
    y: 50,
    width: 50,
    height: 50,
    speed: 5,
    jumpPower: 10,
    color: "blue"
};

// Game loop
function update() {
    // Game mechanics here: player movement, enemies, physics
}

// Main loop
function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    update();
    requestAnimationFrame(gameLoop);
}

gameLoop();