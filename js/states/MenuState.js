import PlayingState from "./PlayingState.js";

import { drawBackground, toggleTheme } from "../utils/Theme.js";

export default class MenuState {
    constructor(scene) {
        this.scene = scene;
        this.bubbles = [];
        this.pulse = 0;
        this.toggleCooldown = 0;


    }

    update(dt, input, canvas) {


        this.pulse += dt * 5;
        if (this.toggleCooldown > 0) this.toggleCooldown -= dt;

        if (input.isDown("KeyT") && this.toggleCooldown <= 0) {
            toggleTheme();
            this.toggleCooldown = 0.5; // Half second debounce
        }

        // Transition to Game
        if (input.isDown("Enter") || input.isDown("Space")) {
            this.scene.switchState(new PlayingState(this.scene));
        }
    }

    draw(ctx) {
        const { width, height } = ctx.canvas;

        // Use Theme Background
        drawBackground(ctx, width, height, this.pulse, "menu");

        // Bubbles
        ctx.fillStyle = "rgba(255,255,255,0.3)";
        this.bubbles.forEach(b => {
            ctx.beginPath();
            ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
            ctx.fill();
        });

        // Draw Houses (Bottom Layer)
        // Houses removed as per request




        // Title
        ctx.fillStyle = "#ffeb3b"; // SpongeBob Yellow
        ctx.strokeStyle = "#000";
        ctx.lineWidth = 5;
        ctx.font = "bold 60px monospace"; // Ideally a 'SpongeBob' font but monospace is safe
        ctx.textAlign = "center";

        ctx.strokeText("PIXEL CHASE", width / 2, height / 3);
        ctx.fillText("PIXEL CHASE", width / 2, height / 3);

        ctx.font = "bold 30px monospace";
        ctx.fillStyle = "#fff";
        ctx.strokeText("SQUAREPANTS EDITION", width / 2, height / 3 + 50);
        ctx.fillText("SQUAREPANTS EDITION", width / 2, height / 3 + 50);

        ctx.fillStyle = "#fff";
        ctx.font = "20px monospace";
        ctx.textAlign = "center";

        // ctx.fillText("Press ENTER to Start", width / 2, height / 2 + 50); // Removed duplicate
        ctx.fillText("Press T to Toggle Theme", width / 2, height / 2 + 80);

        // Show High Score
        const highScore = localStorage.getItem("highScore") || 0;
        ctx.fillStyle = "#ffd700"; // Gold
        ctx.fillText(`HIGH SCORE: ${highScore}`, width / 2, height / 2 + 120);

        // Start Text with Pulse
        const scale = 1 + Math.sin(this.pulse) * 0.1;
        ctx.save();
        ctx.translate(width / 2, height / 2 + 50);

        ctx.fillStyle = "#ffeb3b";
        ctx.strokeStyle = "#d32f2f"; // Red outline
        ctx.lineWidth = 2;
        ctx.font = "bold 40px monospace";
        ctx.strokeText("PRESS ENTER TO START", 0, 0);
        ctx.fillText("PRESS ENTER TO START", 0, 0);

        ctx.restore();
    }



    drawHouse(ctx, type, x, y) {
        if (type === "rock") {
            ctx.fillStyle = "#795548"; // Brown
            ctx.beginPath();
            ctx.arc(x, y + 50, 60, Math.PI, 0);
            ctx.fill();
            // Arrow
            ctx.fillStyle = "#ffeb3b"; // Weathervane arrow thing
            ctx.fillRect(x - 5, y - 20, 10, 20);
        } else if (type === "tiki") {
            ctx.fillStyle = "#546e7a"; // Blue-Grey
            // Head
            ctx.fillRect(x - 40, y, 80, 150);
            // Eyes
            ctx.fillStyle = "#ffeb3b";
            ctx.beginPath();
            ctx.arc(x - 20, y + 40, 15, 0, Math.PI * 2);
            ctx.arc(x + 20, y + 40, 15, 0, Math.PI * 2);
            ctx.fill();
            // Mouth / Nose
            ctx.fillStyle = "#37474f";
            ctx.fillRect(x - 15, y + 60, 30, 40); // Nose
            ctx.fillRect(x - 25, y + 110, 50, 10); // Mouth
        } else if (type === "pineapple") {
            ctx.fillStyle = "#ff9800"; // Orange
            ctx.beginPath();
            ctx.ellipse(x, y + 50, 70, 100, 0, 0, Math.PI * 2);
            ctx.fill();

            // Cross-hatch
            ctx.strokeStyle = "#e65100";
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(x - 50, y); ctx.lineTo(x + 50, y + 100);
            ctx.moveTo(x + 50, y); ctx.lineTo(x - 50, y + 100);
            ctx.stroke();

            // Leaves
            ctx.fillStyle = "#4caf50"; // Green
            ctx.beginPath();
            ctx.moveTo(x, y - 50);
            ctx.lineTo(x - 40, y - 100);
            ctx.lineTo(x, y - 80);
            ctx.lineTo(x + 40, y - 100);
            ctx.fill();

            // Door/Window
            ctx.fillStyle = "#90a4ae"; // Door
            ctx.beginPath();
            ctx.arc(x, y + 100, 40, Math.PI, 0);
            ctx.fill();
            ctx.fillStyle = "#1e88e5"; // Window
            ctx.beginPath();
            ctx.arc(x + 30, y, 15, 0, Math.PI * 2);
            ctx.fill();
        }
    }
}
