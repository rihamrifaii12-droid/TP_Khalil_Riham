export const ScoreManager = {
    SAVE_KEY: "pixel_chase_scores",

    /**
     * Get all saved scores, sorted descending.
     * Each score is an object: { name: string, score: number, date: number }
     */
    getScores() {
        const raw = localStorage.getItem(this.SAVE_KEY);
        if (!raw) return [];
        try {
            return JSON.parse(raw).sort((a, b) => b.score - a.score);
        } catch (e) {
            console.error("Error parsing scores", e);
            return [];
        }
    },

    /**
     * Add a new score to the leaderboard.
     * Keep only the top 10.
     */
    addScore(name, score) {
        let scores = this.getScores();
        scores.push({
            name: name || "Anonymous",
            score: score,
            date: Date.now()
        });

        // Sort and keep top 10
        scores.sort((a, b) => b.score - a.score);
        scores = scores.slice(0, 10);

        localStorage.setItem(this.SAVE_KEY, JSON.stringify(scores));

        // Update the legacy single high score for compatibility
        const currentHi = parseInt(localStorage.getItem("highScore")) || 0;
        if (score > currentHi) {
            localStorage.setItem("highScore", score);
        }

        return scores;
    },

    /**
     * Check if a score is high enough to enter the top 10.
     */
    isHighScore(score) {
        if (score <= 0) return false;
        const scores = this.getScores();
        if (scores.length < 10) return true;
        return score > scores[scores.length - 1].score;
    }
};
