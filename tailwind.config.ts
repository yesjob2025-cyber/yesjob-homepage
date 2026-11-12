import type { Config } from "tailwindcss";

/**
 * YESJOB 디자인 토큰 — 시안 기준
 *  라이트 그레이 배경 / 레몬 옐로우 포인트 / 헤비 블랙 / 얇은 Raleway 디스플레이
 */
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: { DEFAULT: "#EEEEEE", dark: "#E2E2E2", light: "#F6F6F6" },
        lemon: { DEFAULT: "#FFF48C", soft: "#FFF9C9", deep: "#F5E04A" },
        ink: { DEFAULT: "#1B1B1B", soft: "#3A3A3A", muted: "#6F6F6F", line: "#D3D3D3" },
      },
      fontFamily: {
        sans: ["Raleway", "Pretendard", "-apple-system", "Apple SD Gothic Neo", "Malgun Gothic", "sans-serif"],
        kr: ["Pretendard", "-apple-system", "Apple SD Gothic Neo", "Malgun Gothic", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
