import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: "#f6f0e4",
          soft: "#fbf6ec",
          deep: "#ece2cf",
          frame: "#e3d7bd",
        },
        ink: {
          DEFAULT: "#2a241d",
          soft: "#4a3f33",
          muted: "#6f6353",
          faint: "#9a8d79",
        },
        accent: {
          DEFAULT: "#a94f1c",
          deep: "#8a3d12",
          soft: "#c16a30",
          wash: "#e9c4a3",
        },
        ochre: {
          DEFAULT: "#b07d1f",
          soft: "#cd9b3a",
          wash: "#efd9a3",
        },
        sage: {
          DEFAULT: "#5f6f4a",
          soft: "#7e8e63",
          wash: "#d8ddc6",
        },
      },
      fontFamily: {
        serif: [
          'Georgia',
          '"Songti SC"',
          '"Noto Serif SC"',
          '"Source Han Serif SC"',
          'serif',
        ],
        sans: ['ui-sans-serif', 'system-ui', '"PingFang SC"', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      maxWidth: {
        stage: "1180px",
      },
      letterSpacing: {
        editorial: "0.28em",
      },
    },
  },
  plugins: [],
};

export default config;