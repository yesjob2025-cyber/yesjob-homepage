import type { Config } from "tailwindcss";

/** YESJOB 브랜드 토큰 — 크림 배경 / 옐로우 포인트 / 차콜 텍스트 */
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: { DEFAULT: "#F7F2E9", 50: "#FDFBF6", 100: "#F7F2E9", 200: "#EFE7D6", 300: "#E4D8BE" },
        brand: { DEFAULT: "#F6CE51", 50: "#FEF9E7", 100: "#FCEFBF", 200: "#FAE28C", 300: "#F6CE51", 400: "#F2B705", 500: "#D69E00" },
        ink: { DEFAULT: "#2E2A25", soft: "#4A443C", muted: "#7A7163", line: "#E7DECB" },
      },
      fontFamily: {
        sans: ["Pretendard Variable", "Pretendard", "-apple-system", "BlinkMacSystemFont", "Apple SD Gothic Neo", "Malgun Gothic", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
