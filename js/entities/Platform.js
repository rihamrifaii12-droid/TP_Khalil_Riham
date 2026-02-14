export default class Platform {
    constructor(x, y, w, h, color = "#8d6e63", type = 0) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.color = color;
        this.type = type % 2; // Alternates between 0 and 1
    }

    draw(ctx) {
        ctx.save();

        // Disable smoothing for sharp pixel edges
        ctx.imageSmoothingEnabled = false;

        if (this.type === 0) {
            // --- REFINED STYLE 1: SANDY BIKINI BOTTOM ---
            // Main Sand Block
            ctx.fillStyle = "#F4D03F"; // Sandy Yellow
            ctx.fillRect(this.x, this.y, this.w, this.h);

            // Top "Slab" 
            ctx.fillStyle = "#F7DC6F"; // Lighter Sand
            ctx.fillRect(this.x, this.y, this.w, 4);

            // Bottom Shadow
            ctx.fillStyle = "#D4AC0D";
            ctx.fillRect(this.x, this.y + this.h - 4, this.w, 4);

            // Grains/Shells
            ctx.fillStyle = "#B7950B";
            for (let i = 8; i < this.w; i += 24) {
                if ((i / 24) % 2 === 0) ctx.fillRect(this.x + i, this.y + 15, 2, 2);
            }

            // SEAWEED & ALGAE (Bikini Bottom Style)
            ctx.fillStyle = "#2ECC71"; // Seaweed Green
            for (let i = 10; i < this.w; i += 40) {
                // Tall seaweed leaf
                ctx.fillRect(this.x + i, this.y - 12, 4, 12);
                ctx.fillRect(this.x + i - 4, this.y - 8, 4, 4);
                // Tiny leaf
                ctx.fillRect(this.x + i + 15, this.y - 4, 4, 4);
            }

            // Small Pink Corals
            ctx.fillStyle = "#EC407A";
            for (let i = 30; i < this.w; i += 60) {
                ctx.fillRect(this.x + i, this.y - 6, 6, 6);
                ctx.fillRect(this.x + i + 4, this.y - 10, 4, 8);
            }

        } else {
            // --- REFINED STYLE 2: ROCKY REEF ---
            // Main Rock Block
            ctx.fillStyle = "#8E44AD"; // Deep Purple
            ctx.fillRect(this.x, this.y, this.w, this.h);

            // Top Surface
            ctx.fillStyle = "#BB8FCE";
            ctx.fillRect(this.x, this.y, this.w, 6);

            // Dark Crust
            ctx.fillStyle = "#5B2C6F";
            ctx.fillRect(this.x, this.y + this.h - 6, this.w, 6);

            // ALGAE PATCHES
            ctx.fillStyle = "#1E8449"; // Dark Algae
            for (let i = 5; i < this.w; i += 30) {
                ctx.fillRect(this.x + i, this.y + 2, 10, 4);
                if (i % 60 === 0) ctx.fillRect(this.x + i + 4, this.y + 6, 6, 6);
            }

            // Small "Bubble" craters
            ctx.fillStyle = "#4A235A";
            for (let i = 15; i < this.w; i += 45) {
                ctx.fillRect(this.x + i, this.y + 14, 4, 4);
                ctx.fillRect(this.x + i + 10, this.y + 8, 4, 4);
            }
        }

        // Clean subtle outline
        ctx.strokeStyle = "rgba(0,0,0,0.5)";
        ctx.lineWidth = 1;
        ctx.strokeRect(this.x, this.y, this.w, this.h);

        ctx.restore();
    }

    getRect() {
        return { x: this.x, y: this.y, w: this.w, h: this.h };
    }
}
