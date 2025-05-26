/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable dark mode via a 'dark' class
  theme: {
    extend: {
      colors: {
        background: "#0A0A0A",        // Background color for body/app
        foreground: "#F5F5F5",        // Default text color
        border: "#333333",            // Used for outlines and borders
        ring: "#888888",              // Outline focus ring fallback

        'light-100': "#D1D5DB",       // Light text
        'dark-100': "#1F2937",        // Primary dark element
        'dark-200': "#111827",        // Secondary dark element

        'primary-100': "#8B5CF6",     // Light primary
        'primary-200': "#7C3AED",     // Bold primary

        'success-100': "#10B981",     // Success green
        'success-200': "#059669",

        'destructive-100': "#EF4444", // Error red
        'destructive-200': "#DC2626",

        input: "#374151",             // Input field background
      },
      backgroundImage: {
        'pattern': "url('/pattern.png')",
      },
    },
  },
  plugins: [],
}
