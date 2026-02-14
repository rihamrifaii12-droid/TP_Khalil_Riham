import { BonusType } from "../entities/Bonus.js";

const Levels = [
    // LEVEL 1: BIKINI BOTTOM BEACH (Beginner)
    {
        name: "Bikini Bottom Beach",
        playerStart: { x: 50, y: 470 }, // Increased height safety
        enemy: { x: 700, y: 50, lives: 3 },
        goal: { x: 730, y: 50 },
        colors: {
            background: "#4fc3f7",
            platforms: "#F4D03F",
            text: "#fff"
        },
        platforms: [
            { x: 0, y: 550, w: 800, h: 50, type: 0 }, // Ground
            { x: 100, y: 450, w: 600, h: 30, type: 0 },
            { x: 0, y: 350, w: 250, h: 30, type: 0 },
            { x: 550, y: 350, w: 250, h: 30, type: 0 },
            { x: 200, y: 250, w: 400, h: 30, type: 0 },
            { x: 0, y: 150, w: 800, h: 30, type: 0 }
        ],
        stairs: [
            { x: 120, y: 440, w: 40, h: 120 }, // Conect L1 to Ground
            { x: 600, y: 340, w: 40, h: 120 }, // Connect L2 to L1
            { x: 120, y: 240, w: 40, h: 120 }, // Connect L3 to L2
            { x: 640, y: 140, w: 40, h: 120 }  // Connect L4 to L3
        ]
    },
    // LEVEL 2: THE KELP FOREST (Intermediate)
    {
        name: "The Kelp Forest",
        playerStart: { x: 50, y: 500 }, // Safe starting gap
        enemy: { x: 400, y: 50, lives: 5 },
        goal: { x: 700, y: 80 },
        colors: {
            background: "#1B5E20", // Deep Forest Green
            platforms: "#8E44AD", // Rocky Reef
            text: "#C8E6C9"
        },
        platforms: [
            { x: 0, y: 580, w: 800, h: 30, type: 1 }, // Ground
            { x: 50, y: 480, w: 200, h: 30, type: 1 },
            { x: 350, y: 430, w: 200, h: 30, type: 1 },
            { x: 500, y: 330, w: 250, h: 30, type: 1 },
            { x: 150, y: 300, w: 250, h: 30, type: 1 },
            { x: 50, y: 200, w: 700, h: 30, type: 1 },
            { x: 300, y: 100, w: 400, h: 30, type: 1 }
        ],
        stairs: [
            { x: 100, y: 470, w: 30, h: 120 },
            { x: 450, y: 420, w: 30, h: 170 },
            { x: 600, y: 320, w: 30, h: 120 },
            { x: 200, y: 290, w: 30, h: 150 },
            { x: 100, y: 190, w: 30, h: 120 },
            { x: 400, y: 90, w: 30, h: 120 }
        ]
    },
    // LEVEL 3: PLANKTON'S LAIR (Hard)
    {
        name: "Plankton's Lair",
        playerStart: { x: 390, y: 510 }, // Safe starting gap
        enemy: { x: 400, y: 30, lives: 8 },
        goal: { x: 50, y: 50 },
        colors: {
            background: "#212121", // Dark Industrial
            platforms: "#546E7A", // Steel/Tiki
            text: "#FF5252"
        },
        platforms: [
            { x: 0, y: 580, w: 800, h: 30, type: 1 }, // Ground
            // Symmetric but difficult ascent
            { x: 100, y: 480, w: 100, h: 30, type: 1 },
            { x: 600, y: 480, w: 100, h: 30, type: 1 },
            { x: 300, y: 380, w: 200, h: 30, type: 1 },
            { x: 0, y: 280, w: 250, h: 30, type: 1 },
            { x: 550, y: 280, w: 250, h: 30, type: 1 },
            { x: 200, y: 180, w: 400, h: 30, type: 1 },
            { x: 0, y: 100, w: 200, h: 30, type: 1 }, // Goal side
            { x: 600, y: 100, w: 200, h: 30, type: 1 }
        ],
        stairs: [
            { x: 150, y: 470, w: 20, h: 120 },
            { x: 650, y: 470, w: 20, h: 120 },
            { x: 400, y: 370, w: 20, h: 220 }, // Long climb
            { x: 100, y: 270, w: 20, h: 120 },
            { x: 700, y: 270, w: 20, h: 120 },
            { x: 300, y: 170, w: 20, h: 120 },
            { x: 500, y: 170, w: 20, h: 120 },
            { x: 100, y: 90, w: 20, h: 100 }
        ]
    }
];

export default Levels;
