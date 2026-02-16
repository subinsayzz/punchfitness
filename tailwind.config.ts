import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                punch: {
                    gold: "#D4AF37", // Premium Gold
                    red: "#C8102E",  // Energetic Red
                    black: "#0A0A0A", // Deep Black
                    gray: "#1C1C1C", // Dark Gray
                },
            },
            fontFamily: {
                sans: ["var(--font-outfit)", "sans-serif"],
                display: ["var(--font-oswald)", "sans-serif"],
            },
        },
    },
    plugins: [],
};
export default config;
