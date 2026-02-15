export default class Ball {
    constructor(x, y, speed = 150) {
        this.x = x;
        this.y = y;
        this.radius = 10;
        this.speed = speed;
        this.vx = 0;
        this.vy = 0;
        this.color = "#f00";
        this.onGround = false;
        this.gravity = 500;
    }

    update(dt, player, stairs, platforms, isFrozen) {
        if (isFrozen) return;

        this.vx = 0;
        let takingStair = false;
        const yDiff = player.y - this.y;
        const xDiff = player.x - this.x;

        // --- LADDER LOGIC FIX ---
        // Check if we are currently centered on a ladder
        let currentStair = null;
        for (const s of stairs) {
            // A bit more forgiving centering
            if (this.x + 10 > s.x && this.x - 10 < s.x + s.w) {
                currentStair = s;
                break;
            }
        }

        // If player is on a significantly different level, try to find/use ladders
        // Threshold increased to 80 to account for Bob's height and jumps
        if (Math.abs(yDiff) > 80 && stairs.length > 0) {
            if (currentStair) {
                // We are ON a ladder, move vertically
                takingStair = true;
                this.vx = 0;
                // Center exactly on ladder while climbing
                this.x = currentStair.x + currentStair.w / 2;
                if (yDiff > 0) this.y += this.speed * dt;
                else this.y -= this.speed * dt;
                this.vy = 0;
            } else {
                // Not on ladder, seek closest one
                let closestStair = null;
                let minDist = Infinity;
                for (const s of stairs) {
                    const dist = Math.abs(s.x + s.w / 2 - this.x);
                    if (dist < minDist) {
                        minDist = dist;
                        closestStair = s;
                    }
                }
                if (closestStair) {
                    if (this.x < closestStair.x + closestStair.w / 2 - 5) this.vx = this.speed;
                    else if (this.x > closestStair.x + closestStair.w / 2 + 5) this.vx = -this.speed;
                    else this.vx = 0; // Already centered
                } else {
                    // Fallback to seeking player X if no ladder found
                    if (this.x < player.x) this.vx = this.speed;
                    else if (this.x > player.x + player.w) this.vx = -this.speed;
                }
            }
        } else {
            // Same level or no ladders, seek player's X position directly
            if (this.x < player.x) this.vx = this.speed;
            else if (this.x > player.x + player.w) this.vx = -this.speed;
            else this.vx = 0;
        }

        if (!takingStair) {
            this.vy += this.gravity * dt;
            this.x += this.vx * dt;
            this.y += this.vy * dt;

            // --- PLATFORM COLLISION FIX ---
            this.onGround = false;
            for (const p of platforms) {
                const pr = p.getRect();
                // Check if falling onto platform top
                if (this.vy >= 0 &&
                    this.y + this.radius <= pr.y + 15 &&
                    this.y + this.radius + this.vy * dt >= pr.y &&
                    this.x + this.radius > pr.x &&
                    this.x - this.radius < pr.x + pr.w) {

                    this.y = pr.y - this.radius;
                    this.vy = 0;
                    this.onGround = true;
                }
            }
        }

        // Screen bounds
        if (this.x < 0) this.x = 0;
        if (this.x > 800) this.x = 800;
    }

    draw(ctx) {
        ctx.save();
        const time = Date.now() * 0.005;
        const pulse = Math.sin(time) * 2;

        // Jellyfish Dome (Pink)
        ctx.fillStyle = "#FF80AB";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius + pulse, Math.PI, 0);
        ctx.fill();

        // Spots (Purple)
        ctx.fillStyle = "#BA68C8";
        ctx.beginPath();
        ctx.arc(this.x - 4, this.y - 4, 3, 0, Math.PI * 2);
        ctx.arc(this.x + 4, this.y - 6, 2, 0, Math.PI * 2);
        ctx.fill();

        // Tentacles (Wavy)
        ctx.strokeStyle = "#FF80AB";
        ctx.lineWidth = 2;
        ctx.beginPath();
        for (let i = -1; i <= 1; i++) {
            const tx = this.x + i * 5;
            ctx.moveTo(tx, this.y);
            const wave = Math.sin(time * 2 + i) * 5;
            ctx.bezierCurveTo(tx + wave, this.y + 5, tx - wave, this.y + 10, tx, this.y + 15);
        }
        ctx.stroke();
        ctx.restore();
    }

    getRect() {
        return {
            x: this.x - this.radius,
            y: this.y - this.radius,
            w: this.radius * 2,
            h: this.radius * 2
        };
    }
}
