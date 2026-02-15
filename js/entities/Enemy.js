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
        this.throwInterval = 15.0; // Seconds between throws (Slower as requested)
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
        ctx.translate(this.x + this.size / 2, this.y + this.size / 2);
        const time = Date.now() * 0.005;
        const hover = Math.sin(time) * 5;
        ctx.translate(0, hover);

        // Body (Dark Green)
        ctx.fillStyle = this.isFrozen ? this.freezeColor : "#1D8348";
        ctx.beginPath();
        ctx.roundRect(-20, -30, 40, 60, 15);
        ctx.fill();

        // Antennae
        ctx.strokeStyle = this.isFrozen ? this.freezeColor : "#1D8348";
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(-10, -30); ctx.lineTo(-20, -50);
        ctx.moveTo(10, -30); ctx.lineTo(20, -50);
        ctx.stroke();

        // Eye (White)
        ctx.fillStyle = "#fff";
        ctx.beginPath();
        ctx.arc(0, -10, 15, 0, Math.PI * 2);
        ctx.fill();

        // Pupil (Red/Yellow)
        ctx.fillStyle = "#f00";
        ctx.beginPath();
        const pupilX = Math.sin(time) * 3;
        ctx.arc(pupilX, -10, 7, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = "#ff0";
        ctx.fillRect(pupilX - 2, -12, 4, 4);

        // Evil Mouth
        ctx.strokeStyle = "#000";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(-10, 15);
        ctx.quadraticCurveTo(0, 5, 10, 15);
        ctx.stroke();

        ctx.restore();
    }

    getRect() {
        return { x: this.x, y: this.y, w: this.size, h: this.size };
    }
}
