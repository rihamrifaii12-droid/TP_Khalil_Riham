export default class Platform {
    constructor(x, y, w, h, color = "#8d6e63", type = 0) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.color = color;
        this.type = type; // 0: Sandy, 1: Rocky, 2: Industrial
    }

    draw(ctx) {
        ctx.save();
        ctx.imageSmoothingEnabled = false;

        if (this.type === 0) {
            // --- STYLE 0: SANDY BIKINI BOTTOM ---
            const grad = ctx.createLinearGradient(this.x, this.y, this.x, this.y + this.h);
            grad.addColorStop(0, "#F7DC6F");
            grad.addColorStop(1, "#F4D03F");
            ctx.fillStyle = grad;
            ctx.fillRect(this.x, this.y, this.w, this.h);

            // Grains
            ctx.fillStyle = "#B7950B";
            for (let i = 5; i < this.w; i += 20) {
                ctx.fillRect(this.x + i + Math.sin(i) * 5, this.y + 10, 2, 2);
            }

            // Seaweed
            ctx.fillStyle = "#2ECC71";
            for (let i = 10; i < this.w; i += 50) {
                ctx.fillRect(this.x + i, this.y - 15, 4, 15);
                ctx.fillRect(this.x + i - 4, this.y - 10, 4, 4);
            }
        }
        else if (this.type === 1) {
            // --- STYLE 1: ROCKY REEF / KELP FOREST ---
            const grad = ctx.createLinearGradient(this.x, this.y, this.x, this.y + this.h);
            grad.addColorStop(0, "#BB8FCE");
            grad.addColorStop(1, "#8E44AD");
            ctx.fillStyle = grad;
            ctx.fillRect(this.x, this.y, this.w, this.h);

            // Algae
            ctx.fillStyle = "#1E8449";
            for (let i = 0; i < this.w; i += 30) {
                ctx.beginPath();
                ctx.arc(this.x + i, this.y, 8, 0, Math.PI, true);
                ctx.fill();
            }
        }
        else {
            // --- STYLE 2: INDUSTRIAL / PLANKTON'S LAIR ---
            ctx.fillStyle = "#37474F"; // Dark Steel
            ctx.fillRect(this.x, this.y, this.w, this.h);

            // Rivets
            ctx.fillStyle = "#90A4AE";
            for (let i = 5; i < this.w; i += 20) {
                ctx.fillRect(this.x + i, this.y + 5, 3, 3);
                ctx.fillRect(this.x + i, this.y + this.h - 8, 3, 3);
            }

            // Warning Stripe
            ctx.fillStyle = "#FDD835";
            for (let i = 0; i < this.w; i += 30) {
                ctx.beginPath();
                ctx.moveTo(this.x + i, this.y);
                ctx.lineTo(this.x + i + 15, this.y);
                ctx.lineTo(this.x + i + 5, this.y + 6);
                ctx.lineTo(this.x + i - 10, this.y + 6);
                ctx.fill();
            }
        }

        // Outline
        ctx.strokeStyle = "rgba(0,0,0,0.4)";
        ctx.lineWidth = 2;
        ctx.strokeRect(this.x, this.y, this.w, this.h);

        ctx.restore();
    }

    getRect() {
        return { x: this.x, y: this.y, w: this.w, h: this.h };
    }
}
