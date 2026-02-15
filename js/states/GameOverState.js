import { drawBackground } from "../utils/Theme.js";
import MenuState from "./MenuState.js";

export default class GameOverState {
    constructor(scene, finalScore) {
        this.scene = scene;
        this.finalScore = finalScore;
        this.pulse = 0;
    }

    update(dt, input, canvas) {
        this.pulse += dt * 5;

        // Restart game (R or space)
        if (input.isDown("KeyR") || input.isDown("Space")) {
            // Import PlayingState dynamically to avoid circular dependency
            import("./PlayingState.js").then(module => {
                const PlayingState = module.default;
                this.scene.switchState(new PlayingState(this.scene));
            });
        }

        // Back to menu (M or Escape)
        if (input.isDown("KeyM") || input.isDown("Escape")) {
            this.scene.switchState(new MenuState(this.scene));
        }
    }

    draw(ctx) {
        const { width, height } = ctx.canvas;
        drawBackground(ctx, width, height, this.pulse, "menu");

        // Dim background
        ctx.fillStyle = "rgba(0, 0, 0, 0.6)";
        ctx.fillRect(0, 0, width, height);

        ctx.save();
        ctx.textAlign = "center";
        ctx.shadowBlur = 15;
        ctx.shadowColor = "#000";

        // GAME OVER Text
        ctx.font = "bold 80px 'Arial Black'";
        ctx.fillStyle = "#F44336";
        ctx.fillText("GAME OVER", width / 2, height / 2 - 80);

        // Score
        ctx.font = "bold 40px monospace";
        ctx.fillStyle = "#FFEB3B";
        ctx.fillText(`FINAL SCORE: ${this.finalScore}`, width / 2, height / 2);

        // High Score
        const hi = localStorage.getItem("highScore") || 0;
        ctx.font = "20px monospace";
        ctx.fillStyle = "#FFF";
        ctx.fillText(`BEST: ${hi}`, width / 2, height / 2 + 40);

        // Controls
        const scale = 1 + Math.sin(this.pulse * 2) * 0.05;
        ctx.translate(width / 2, height / 2 + 120);
        ctx.scale(scale, scale);

        ctx.font = "bold 24px monospace";
        ctx.fillStyle = "#FFF";
        ctx.fillText("PRESS R TO RETRY", 0, 0);

        ctx.scale(1 / scale, 1 / scale);
        ctx.font = "16px monospace";
        ctx.fillText("PRESS M FOR MENU", 0, 40);

        ctx.restore();
    }
}
