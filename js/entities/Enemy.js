import Ball from "./Ball.js";

export default class Enemy {
    constructor(x, y, color = "brown") {
        this.x = x;
        this.y = y;
        this.size = 100;
        this.baseColor = color;
        this.freezeColor = "#00f"; // Blue when frozen
        this.isFrozen = false;
        this.lives = 3;
        this.throwTimer = 0;
        this.throwInterval = 3.0; // Seconds between throws (Slower as requested)
    }

    update(dt, balls) {
        if (this.isFrozen || this.lives <= 0) return;

        this.throwTimer += dt;
        if (this.throwTimer >= this.throwInterval) {
            this.throwTimer = 0;
            this.throwBall(balls);
        }
    }

    throwBall(balls) {
        const startX = this.x + this.size / 2;
        const startY = this.y + this.size;

        // Rage mode: 3 balls if 1 life left
        if (this.lives === 1) {
            // Straight down
            balls.push(new Ball(startX, startY, 150));
            // Slightly left/right simulated by offset
            balls.push(new Ball(startX - 40, startY, 150));
            balls.push(new Ball(startX + 40, startY, 150));
        } else {
            balls.push(new Ball(startX, startY, 150));
        }
    }

    draw(ctx) {
        if (this.lives <= 0) return;

        ctx.save();
        // Plankton body (Dark Green)
        ctx.fillStyle = this.isFrozen ? this.freezeColor : "#1D8348";
        ctx.fillRect(this.x + 30, this.y + 20, 40, 60);

        // Antennae
        ctx.strokeStyle = "#1D8348";
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(this.x + 40, this.y + 20);
        ctx.lineTo(this.x + 20, this.y);
        ctx.moveTo(this.x + 60, this.y + 20);
        ctx.lineTo(this.x + 80, this.y);
        ctx.stroke();

        // Eye (White)
        ctx.fillStyle = "#fff";
        ctx.beginPath();
        ctx.arc(this.x + 50, this.y + 40, 15, 0, Math.PI * 2);
        ctx.fill();

        // Pupil (Red/Yellow)
        ctx.fillStyle = "#f00";
        ctx.beginPath();
        ctx.arc(this.x + 50, this.y + 40, 7, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = "#ff0";
        ctx.fillRect(this.x + 48, this.y + 38, 4, 4);

        ctx.restore();
    }

    getRect() {
        return { x: this.x, y: this.y, w: this.size, h: this.size };
    }
}
