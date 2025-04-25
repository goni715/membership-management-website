const bgColors = [
  "bg-gradient-to-r from-[#2c003e] to-[#6c4a7f]", // Very dark purple to dark purple with opacity
  "bg-gradient-to-r from-[#1a2a39] to-[#2b3e50]", // Very dark blue to deep blue with opacity
  "bg-gradient-to-r from-[#7e1d1d] to-[#a2356e]", // Dark red to dark purple with opacity
  "bg-gradient-to-r from-[#0a2a2f] to-[#1f3d3d]", // Dark teal to even darker teal with opacity
  "bg-gradient-to-r from-[#1c3b54] to-[#3e5c75]", // Dark navy blue to dark bluish gray with opacity
  "bg-gradient-to-r from-[#732c75] to-[#ab4e6e]", // Dark purple to dark red with opacity
  "bg-gradient-to-r from-[#262b33] to-[#3d434f]", // Dark grayish black to dark blue with opacity
  "bg-gradient-to-r from-[#d12f2f] to-[#9e3840]", // Dark red to dark muted red with opacity
  "bg-gradient-to-r from-[#1e2529] to-[#4c5b61]", // Dark blackish gray to dark blue with opacity
];

export const getRandomColor = () => {
  return bgColors[Math.floor(Math.random() * bgColors.length)];
};
