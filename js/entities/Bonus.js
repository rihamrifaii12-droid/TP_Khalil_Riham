export const BonusType = {
    AMMO: "AMMO",
    LIFE: "LIFE",
    FREEZE: "FREEZE",
    SCORE: "SCORE"
};

export default class Bonus {
    constructor(x, y, type) {
        this.x = x;
        this.y = y;
        this.type = type;
        this.w = 15;
        this.h = 15;

        switch (type) {
            case BonusType.AMMO: this.color = "#fff"; break;
            case BonusType.LIFE: this.color = "#f00"; break; // Raw red for hearts
            case BonusType.FREEZE: this.color = "#0ff"; break;
            case BonusType.SCORE: this.color = "#ffd700"; break; // Gold
        }
    }

    update(dt) { }

    draw(ctx) {
        ctx.save();
        const time = Date.now() * 0.005;
        const hover = Math.sin(time * 2) * 3;

        ctx.translate(this.x + this.w / 2, this.y + this.h / 2 + hover);

        // Glow
        ctx.shadowBlur = 10;
        ctx.shadowColor = this.color;

        ctx.fillStyle = this.color;
        if (this.type === BonusType.LIFE) {
            // Heart shape
            ctx.beginPath();
            ctx.moveTo(0, 5);
            ctx.bezierCurveTo(-10, -5, -15, 5, 0, 15);
            ctx.bezierCurveTo(15, 5, 10, -5, 0, 5);
            ctx.fill();
        } else if (this.type === BonusType.AMMO) {
            // Bubble shape
            ctx.beginPath();
            ctx.arc(0, 0, 8, 0, Math.PI * 2);
            ctx.fill();
            ctx.strokeStyle = "#fff";
            ctx.lineWidth = 2;
            ctx.stroke();
        } else if (this.type === BonusType.SCORE) {
            // Coin shape
            ctx.beginPath();
            ctx.arc(0, 0, 8, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = "#B8860B";
            ctx.font = "bold 12px serif";
            ctx.textAlign = "center";
            ctx.fillText("$", 0, 4);
        } else {
            // Default square for Freeze
            ctx.fillRect(-this.w / 2, -this.h / 2, this.w, this.h);
        }

        ctx.restore();
    }

    getRect() {
        return { x: this.x, y: this.y, w: this.w, h: this.h };
    }
}
