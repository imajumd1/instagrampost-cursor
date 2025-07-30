export const personalTemplate = {
  id: "personal",
  name: "Personal Template",
  icon: "👤", 
  background: "linear-gradient(45deg, #ffeaa7 0%, #fab1a0 100%)",
  textAreas: [
    {
      id: "main-message",
      placeholder: "Share your thoughts...",
      x: 100,
      y: 300,
      width: 880,
      height: 300,
      fontSize: 40,
      color: "#2d3436",
      fontFamily: "Georgia, serif",
      textAlign: "center",
      lineHeight: 1.4,
      maxLength: 100
    },
    {
      id: "signature",
      placeholder: "@yourusername",
      x: 100,
      y: 750,
      width: 880,
      height: 80,
      fontSize: 24,
      color: "#636e72",
      fontFamily: "Arial, sans-serif",
      textAlign: "center",
      lineHeight: 1.2,
      maxLength: 30
    }
  ]
};