import { BonusType } from "../entities/Bonus.js";

const Levels = [
    // LEVEL 1 (Original)
    // LEVEL 1 (Original)
    {
        playerStart: { x: 390, y: 480 },
        enemy: { x: 50, y: 50, lives: 3 }, // Boss HP 3
        goal: { x: 730, y: 110 },
        colors: {
            background: "#4fc3f7", // Ocean Blue
            platforms: "#f4a460",  // Sandy Brown
            text: "#fff"
        },
        platforms: [
            { x: 0, y: 550, w: 800, h: 50 },
            { x: 100, y: 450, w: 600, h: 30 },
            { x: 100, y: 350, w: 600, h: 30 },
            { x: 100, y: 250, w: 600, h: 30 },
            { x: 0, y: 150, w: 800, h: 30 }
        ],
        stairs: [
            { x: 120, y: 450, w: 40, h: 100 },
            { x: 640, y: 350, w: 40, h: 100 },
            { x: 120, y: 250, w: 40, h: 100 },
            { x: 640, y: 150, w: 40, h: 100 }
        ]
    },
    // LEVEL 2 (The Climb)
    // LEVEL 2 (The Broken Bridge - Harder)
    {
        playerStart: { x: 50, y: 480 },
        enemy: { x: 400, y: 50, lives: 5 }, // Boss Center Top
        goal: { x: 400, y: 100 }, // Goal Center Top
        colors: {
            background: "#200", // Dark Red
            platforms: "#555",
            text: "#ffaaaa"
        },
        platforms: [
            { x: 0, y: 550, w: 800, h: 50 }, // Ground

            // Level 1: Gap in middle
            { x: 0, y: 420, w: 350, h: 30 },   // Left
            { x: 450, y: 420, w: 350, h: 30 }, // Right

            // Level 2: Gap in middle
            { x: 0, y: 290, w: 350, h: 30 },   // Left
            { x: 450, y: 290, w: 350, h: 30 }, // Right

            // Top: Center Island
            { x: 200, y: 160, w: 400, h: 30 }
        ],
        stairs: [
            // Ground to L1 Left
            { x: 50, y: 420, w: 40, h: 130 },

            // L1 Right to L2 Right
            { x: 700, y: 290, w: 40, h: 130 },

            // L2 Left to Top Left
            { x: 250, y: 160, w: 40, h: 130 }
        ]
    },
    // LEVEL 3 (Ice Theme)
    // LEVEL 3 (The Tower - Hardest)
    {
        playerStart: { x: 50, y: 510 },
        enemy: { x: 400, y: 50, lives: 8 }, // Boss HP 8
        goal: { x: 400, y: 100 }, // Goal Top Center
        colors: {
            background: "#b3e5fc", // Light Blue Ice
            platforms: "#e0f7fa", // White/Cyan
            text: "#006064" // Dark Teal
        },
        platforms: [
            { x: 0, y: 580, w: 800, h: 30 }, // Ground

            // Zig Zag Pattern (Narrower, steeper)
            { x: 0, y: 480, w: 700, h: 30 },   // Floor 1 (Gap Right)
            { x: 100, y: 380, w: 700, h: 30 }, // Floor 2 (Gap Left)
            { x: 0, y: 280, w: 700, h: 30 },   // Floor 3 (Gap Right)
            { x: 100, y: 180, w: 700, h: 30 }, // Floor 4 (Gap Left)

            // Top
            { x: 300, y: 100, w: 200, h: 30 }
        ],
        stairs: [
            // Ground to L1
            { x: 650, y: 480, w: 30, h: 100 },

            // L1 to L2
            { x: 150, y: 380, w: 30, h: 100 },

            // L2 to L3
            { x: 650, y: 280, w: 30, h: 100 },

            // L3 to L4
            { x: 150, y: 180, w: 30, h: 100 },

            // L4 to Top
            { x: 400, y: 100, w: 20, h: 80 }
        ]
    }
];

export default Levels;
