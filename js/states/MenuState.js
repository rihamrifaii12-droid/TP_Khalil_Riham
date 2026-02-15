import PlayingState from "./PlayingState.js";
import LeaderboardState from "./LeaderboardState.js";
import AudioManager from "../utils/AudioManager.js";

import { drawBackground, toggleTheme } from "../utils/Theme.js";

export default class MenuState {
    constructor(scene) {
        this.scene = scene;
        this.bubbles = [];
        this.pulse = 0;
        this.toggleCooldown = 0;
    }

    update(dt, input, canvas) {
        // Start playlist on first interaction
        if (input.isDown("Enter") || input.isDown("Space") || input.isDown("KeyT") || input.isDown("KeyH")) {
            AudioManager.startPlaylist();
        }

        this.pulse += dt * 5;
        if (this.toggleCooldown > 0) this.toggleCooldown -= dt;

        if (input.isDown("KeyT") && this.toggleCooldown <= 0) {
            toggleTheme();
            this.toggleCooldown = 0.5; // Half second debounce
        }

        // Leaderboard (H key)
        if (input.isDown("KeyH") && this.toggleCooldown <= 0) {
            this.scene.switchState(new LeaderboardState(this.scene));
            this.toggleCooldown = 0.5;
        }

        // Transition to Game
        if (input.isDown("Enter") || input.isDown("Space")) {
            AudioManager.startPlaylist();
            this.scene.switchState(new PlayingState(this.scene));
        }
    }

    draw(ctx) {
        const { width, height } = ctx.canvas;

        drawBackground(ctx, width, height, this.pulse, "menu");

        // Title Styling
        ctx.save();
        ctx.textAlign = "center";

        // Main Title
        const titleY = height / 3;
        ctx.font = "bold 80px 'Arial Black', Gadget, sans-serif";
        ctx.fillStyle = "#ffeb3b";
        ctx.strokeStyle = "#000";
        ctx.lineWidth = 8;
        ctx.strokeText("PIXEL CHASE", width / 2, titleY);
        ctx.fillText("PIXEL CHASE", width / 2, titleY);

        // Subtitle
        ctx.font = "bold 30px 'Arial Black'";
        ctx.fillStyle = "#FF5252";
        ctx.strokeStyle = "#fff";
        ctx.lineWidth = 4;
        ctx.strokeText("SQUAREPANTS EDITION", width / 2, titleY + 60);
        ctx.fillText("SQUAREPANTS EDITION", width / 2, titleY + 60);

        // Instructions
        ctx.restore();
        ctx.fillStyle = "#fff";
        ctx.font = "bold 20px monospace";
        ctx.textAlign = "center";

        const startY = height / 2 + 50;
        const scale = 1 + Math.sin(this.pulse * 2) * 0.05;

        ctx.save();
        ctx.translate(width / 2, startY);
        ctx.scale(scale, scale);
        ctx.fillStyle = "#FFEB3B";
        ctx.shadowBlur = 10;
        ctx.shadowColor = "#FFEB3B";
        ctx.fillText("PRESS ENTER TO START", 0, 0);
        ctx.restore();

        ctx.font = "16px monospace";
        ctx.fillText("T: Theme  H: Leaderboard  UP/SPACE: Jump  F: Shoot", width / 2, height - 50);

        // High Score
        const highScore = localStorage.getItem("highScore") || 0;
        ctx.fillStyle = "#ffd700";
        ctx.fillText(`BEST SCORE: ${highScore}`, width / 2, height - 20);
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
