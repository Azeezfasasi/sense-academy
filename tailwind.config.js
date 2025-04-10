/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts}"],
  theme: {
    extend: {
      fontFamily: {
        "heading-1-font-family": "Inter-Bold, sans-serif",
        "paragraph-font-family": "Inter-Regular, sans-serif",
        "button-text-font-family": "Inter-Medium, sans-serif",
        "label-font-family": "Inter-SemiBold, sans-serif",
        "heading-2-font-family": "Inter-SemiBold, sans-serif",
        "small-text-font-family": "Inter-Regular, sans-serif",
        "heading-3-font-family": "Inter-SemiBold, sans-serif",
        "heading-4-subheading-font-family": "Inter-SemiBold, sans-serif",
        "heading-5-subheading-font-family": "Inter-SemiBold, sans-serif",
      },
      fontSize: {
        "heading-1-font-size": "40px",
        "paragraph-font-size": "16px",
        "button-text-font-size": "14px",
        "label-font-size": "12px",
        "heading-2-font-size": "32px",
        "small-text-font-size": "14px",
        "heading-3-font-size": "24px",
        "heading-4-subheading-font-size": "20px",
        "heading-5-subheading-font-size": "18px",
      },
      fontWeight: {
        "heading-1-font-weight": "700",
        "paragraph-font-weight": "400",
        "button-text-font-weight": "500",
        "label-font-weight": "600",
        "heading-2-font-weight": "600",
        "small-text-font-weight": "400",
        "heading-3-font-weight": "600",
        "heading-4-subheading-font-weight": "600",
        "heading-5-subheading-font-weight": "600",
      },
      lineHeight: {
        "heading-1-line-height": "120%",
        "paragraph-line-height": "160%",
        "button-text-line-height": "160%",
        "label-line-height": "normal",
        "heading-2-line-height": "130%",
        "small-text-line-height": "150%",
        "heading-3-line-height": "140%",
        "heading-4-subheading-line-height": "150%",
        "heading-5-subheading-line-height": "160%",
      },
      letterSpacing: {},
      borderRadius: {},
      colors: {
        white: "#ffffff",
        "grey-900": "#0f172a",
        "grey-700": "#334155",
        "primary-500": "#3b82f6",
        "grey-border": "#e2e8f0",
        "primary-400": "#60a5fa",
        "error-400": "#f87171",
        "warning-400": "#facc15",
        "grey-300": "#cbd5e1",
        "grey-background": "#f8fafc",
        "primary-100": "#e0f2fe",
        black: "#000000",
        "grey-disable-color": "#94a3b8",
        "gray-800": "#1d2939",
        "grey-text-dark": "#020617",
        "grey-800": "#1e293b",
        "grey-100": "#f1f5f9",
      },
    },
  },
  plugins: [],
}