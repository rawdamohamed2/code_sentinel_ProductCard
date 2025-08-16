export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        mypulse: {
          '0%, 100%': { transform: 'rotate(-45deg) scale(1)' },
          '50%': { transform: 'rotate(-45deg) scale(1.1)' },
        },
      },
      animation: {
        mypulse: 'mypulse 0.9s infinite',
      },
      
      colors: {
        light: "rgba(255, 255, 255, 0.8)",
        hover: "#FF6A00",
        bghover:"#FFF3E6",
        font:"#4F4F4F",
        header:"#222222",
        signature:"#767575ff",
        original:"#999999",
        cart:"#e45b00",
      },
    },
  },
  plugins: [],
};
