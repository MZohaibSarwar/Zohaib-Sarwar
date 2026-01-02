import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#eab308", // yellow-500
                secondary: "#1f2937", // gray-800
                dark: "#111827", // gray-900
            },
        },
    },
    plugins: [],
};
export default config;
