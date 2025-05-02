const bgColors = [
  // Existing 15 (you already have)
  "bg-gradient-to-r from-[#2c003e] to-[#6c4a7f]",
  "bg-gradient-to-r from-[#1a2a39] to-[#2b3e50]",
  "bg-gradient-to-r from-[#7e1d1d] to-[#a2356e]",
  "bg-gradient-to-r from-[#0a2a2f] to-[#1f3d3d]",
  "bg-gradient-to-r from-[#1c3b54] to-[#3e5c75]",
  "bg-gradient-to-r from-[#732c75] to-[#ab4e6e]",
  "bg-gradient-to-r from-[#262b33] to-[#3d434f]",
  "bg-gradient-to-r from-[#d12f2f] to-[#9e3840]",
  "bg-gradient-to-r from-[#1e2529] to-[#4c5b61]",
  "bg-gradient-to-r from-[#003329] to-[#00695c]",
  "bg-gradient-to-r from-[#3e1f47] to-[#6b3e6b]",
  "bg-gradient-to-r from-[#1a1a1a] to-[#3d3d3d]",
  "bg-gradient-to-r from-[#2b2d42] to-[#8d99ae]",
  "bg-gradient-to-r from-[#1b262c] to-[#0f4c75]",
  "bg-gradient-to-r from-[#4a148c] to-[#880e4f]",

  // New 20
  "bg-gradient-to-r from-[#0f2027] to-[#2c5364]", // Deep blue to steel
  "bg-gradient-to-r from-[#41295a] to-[#2F0743]", // Purple to deep violet
  "bg-gradient-to-r from-[#232526] to-[#414345]", // Gray black to steel gray
  "bg-gradient-to-r from-[#141e30] to-[#243b55]", // Navy gradient
  "bg-gradient-to-r from-[#3c1053] to-[#ad5389]", // Purple to pink
  "bg-gradient-to-r from-[#000000] to-[#434343]", // Black to gray
  "bg-gradient-to-r from-[#1e130c] to-[#9a8478]", // Earthy brown gradient
  "bg-gradient-to-r from-[#42275a] to-[#734b6d]", // Lavender to plum
  "bg-gradient-to-r from-[#485563] to-[#29323c]", // Blue gray to black
  "bg-gradient-to-r from-[#2C3E50] to-[#4CA1AF]", // Deep blue to teal
  "bg-gradient-to-r from-[#000428] to-[#004e92]", // Midnight blue
  "bg-gradient-to-r from-[#1f4037] to-[#99f2c8]", // Deep green to mint
  "bg-gradient-to-r from-[#870000] to-[#190A05]", // Dark red-black gradient
  "bg-gradient-to-r from-[#2C3E50] to-[#FD746C]", // Blue to coral
  "bg-gradient-to-r from-[#536976] to-[#292E49]", // Muted blue
  "bg-gradient-to-r from-[#6a3093] to-[#a044ff]", // Purple to violet
  "bg-gradient-to-r from-[#0f0c29] to-[#302b63]", // Space blue gradient
  "bg-gradient-to-r from-[#4e54c8] to-[#8f94fb]", // Indigo blend
  "bg-gradient-to-r from-[#3a1c71] to-[#d76d77]", // Deep purple to rose
  "bg-gradient-to-r from-[#000046] to-[#1CB5E0]", // Dark blue to sky blue
];

export const getRandomColor = (index) => {
  return bgColors[index];
};
