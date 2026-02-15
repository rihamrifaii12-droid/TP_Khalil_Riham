export default class Goal {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.w = 120; // Size for maison.png
        this.h = 120;
        this.pulse = 0;
        this.image = new Image();
        this.image.src = "assets/images/maison.png";
    }

    update(dt) {
        this.pulse += dt * 3;
    }

    draw(ctx) {
        ctx.save();
        // Adjust anchor point so it sits on the platform (y - h)
        const centerX = this.x + this.w / 2;
        const bottomY = this.y;

        ctx.translate(centerX, bottomY);
        const scale = 1 + Math.sin(this.pulse) * 0.05;
        ctx.scale(scale, scale);

        if (this.image.complete && this.image.naturalWidth !== 0) {
            // Draw from bottom-center
            ctx.drawImage(this.image, -this.w / 2, -this.h, this.w, this.h);
        } else {
            // Fallback: Pineapple-like shape if image fails
            ctx.fillStyle = "#FF9800";
            ctx.beginPath();
            ctx.ellipse(0, -this.h / 2, this.w / 3, this.h / 2, 0, 0, Math.PI * 2);
            ctx.fill();
        }

        ctx.restore();
    }

    getRect() {
        return { x: this.x, y: this.y - this.h, w: this.w, h: this.h };
    }
}
