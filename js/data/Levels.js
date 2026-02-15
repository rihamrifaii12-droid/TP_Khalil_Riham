import { BonusType } from "../entities/Bonus.js";

const Levels = [
    // LEVEL 1: BIKINI BOTTOM BEACH (Beginner)
    {
        name: "Bikini Bottom Beach",
        playerStart: { x: 400, y: 490 }, // Start centered on ground
        enemy: { x: 350, y: 50, lives: 3 }, // Centered on L4 Bridge (x: 200-600) -> spans 350-450
        goal: { x: 375, y: 70 }, // Centered on L4 Bridge
        colors: {
            background: "#4fc3f7",
            platforms: "#F4D03F",
            text: "#fff"
        },
        platforms: [
            { x: 0, y: 550, w: 800, h: 50, type: 0 }, // Ground
            { x: 50, y: 450, w: 250, h: 30, type: 0 }, // L1 Left
            { x: 500, y: 450, w: 250, h: 30, type: 0 }, // L1 Right
            { x: 250, y: 350, w: 300, h: 30, type: 0 }, // L2 Center
            { x: 50, y: 250, w: 250, h: 30, type: 0 }, // L3 Left
            { x: 500, y: 250, w: 250, h: 30, type: 0 }, // L3 Right
            { x: 200, y: 150, w: 400, h: 30, type: 0 }  // L4 Center/Bridge
        ],
        stairs: [
            { x: 100, y: 440, w: 30, h: 120 }, // Gnd to L1L
            { x: 670, y: 440, w: 30, h: 120 }, // Gnd to L1R
            { x: 260, y: 340, w: 30, h: 120 }, // L1L to L2C
            { x: 510, y: 340, w: 30, h: 120 }, // L1R to L2C
            { x: 260, y: 240, w: 30, h: 120 }, // L2C to L3L
            { x: 510, y: 240, w: 30, h: 120 }, // L2C to L3R
            { x: 210, y: 140, w: 30, h: 120 }, // L3L to Bridge (Safe End)
            { x: 560, y: 140, w: 30, h: 120 }  // L3R to Bridge (Safe End)
        ]
    },
    // LEVEL 2: THE KELP FOREST (Intermediate)
    {
        name: "The Kelp Forest",
        playerStart: { x: 50, y: 500 }, // Safe starting gap
        enemy: { x: 550, y: 0, lives: 5 }, // On top of L6 (y=100, boss size=100)
        goal: { x: 650, y: 20 }, // Goal on L6 (y=100 - goal size 80)
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
        enemy: { x: 375, y: 80, lives: 8 }, // Shifted slightly for safer ladder landings (375-475)
        goal: { x: 50, y: 20 }, // On top of L7 Goal platform (y=100, goal size 80)
        colors: {
            background: "#212121", // Dark Industrial
            platforms: "#546E7A", // Steel/Tiki
            text: "#FF5252"
        },
        platforms: [
            { x: 0, y: 580, w: 800, h: 30, type: 1 }, // P0: Ground
            { x: 50, y: 480, w: 200, h: 30, type: 1 }, // P1: L1L
            { x: 550, y: 480, w: 200, h: 30, type: 1 }, // P2: L1R
            { x: 200, y: 380, w: 400, h: 30, type: 1 }, // P3: L2C
            { x: 0, y: 280, w: 300, h: 30, type: 1 },   // P4: L3L
            { x: 500, y: 280, w: 300, h: 30, type: 1 }, // P5: L3R
            { x: 100, y: 180, w: 600, h: 30, type: 1 }, // P6: Bridge
            { x: 0, y: 100, w: 200, h: 30, type: 1 },  // P7: GoalL
            { x: 600, y: 100, w: 200, h: 30, type: 1 }  // P8: GoalR
        ],
        stairs: [
            { x: 100, y: 470, w: 30, h: 120 }, // P0 to P1
            { x: 670, y: 470, w: 30, h: 120 }, // P0 to P2
            { x: 385, y: 370, w: 30, h: 220 }, // P0 to P3
            { x: 250, y: 270, w: 30, h: 120 }, // P3 to P4
            { x: 520, y: 270, w: 30, h: 120 }, // P3 to P5
            { x: 150, y: 170, w: 30, h: 120 }, // P4 to P6
            { x: 620, y: 170, w: 30, h: 120 }, // P5 to P6
            { x: 100, y: 90, w: 30, h: 100 }   // P6 to P7
        ]
    }
];

export default Levels;
