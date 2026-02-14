export default class Goal {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.w = 50;
        this.h = 80;
        this.pulse = 0;
    }

    update(dt) {
        this.pulse += dt * 2;
    }

    draw(ctx) {
        ctx.save();
        ctx.translate(this.x + this.w / 2, this.y + this.h / 2);
        const scale = 1 + Math.sin(this.pulse) * 0.05;
        ctx.scale(scale, scale);

        // Pineapple Body
        ctx.fillStyle = "#FF9800"; // Orange
        ctx.beginPath();
        ctx.ellipse(0, 10, this.w / 2, this.h / 2 - 10, 0, 0, Math.PI * 2);
        ctx.fill();

        // Cross-hatch
        ctx.strokeStyle = "#E65100";
        ctx.lineWidth = 1;
        for (let i = -this.w / 2; i < this.w / 2; i += 10) {
            ctx.beginPath(); ctx.moveTo(i, -20); ctx.lineTo(i + 10, 40); ctx.stroke();
            ctx.beginPath(); ctx.moveTo(i + 10, -20); ctx.lineTo(i, 40); ctx.stroke();
        }

        // Leaves
        ctx.fillStyle = "#4CAF50";
        for (let i = -1; i <= 1; i++) {
            ctx.beginPath();
            ctx.moveTo(i * 10, -20);
            ctx.lineTo(i * 20, -45);
            ctx.lineTo(i * 5, -30);
            ctx.fill();
        }

        // Door
        ctx.fillStyle = "#90A4AE";
        ctx.beginPath();
        ctx.arc(0, 30, 12, Math.PI, 0);
        ctx.fill();

        ctx.restore();
    }

    getRect() {
        return { x: this.x, y: this.y, w: this.w, h: this.h };
    }
}
