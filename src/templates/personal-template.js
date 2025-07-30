export const personalTemplate = {
  id: "personal",
  name: "Personal Template",
  icon: "👤", 
  background: "linear-gradient(45deg, #ffeaa7 0%, #fab1a0 100%)",
  
  // Customization options
  colorSchemes: [
    { name: "Warm Gradient", background: "linear-gradient(45deg, #ffeaa7 0%, #fab1a0 100%)", primary: "#2d3436", secondary: "#636e72" },
    { name: "Cool Gradient", background: "linear-gradient(45deg, #a8edea 0%, #fed6e3 100%)", primary: "#2d3436", secondary: "#636e72" },
    { name: "Sunset", background: "linear-gradient(45deg, #ff9a9e 0%, #fecfef 100%)", primary: "#2d3436", secondary: "#636e72" },
    { name: "Nature", background: "linear-gradient(45deg, #d299c2 0%, #fef9d3 100%)", primary: "#2d3436", secondary: "#636e72" },
    { name: "Minimal", background: "#f8f9fa", primary: "#2d3436", secondary: "#6c757d" },
    { name: "Dark Mode", background: "#2d3436", primary: "#ffffff", secondary: "#adb5bd" }
  ],
  
  fontOptions: [
    { name: "Elegant Script", main: "Georgia, serif", secondary: "Arial, sans-serif" },
    { name: "Modern Clean", main: "Helvetica, Arial, sans-serif", secondary: "Arial, sans-serif" },
    { name: "Casual", main: "Arial, sans-serif", secondary: "Arial, sans-serif" },
    { name: "Sophisticated", main: "Times New Roman, serif", secondary: "Arial, sans-serif" }
  ],
  
  sizeOptions: ["small", "medium", "large"],
  
  shapeOptions: [
    { name: "Rectangle", borderRadius: 0 },
    { name: "Rounded", borderRadius: 20 },
    { name: "Soft", borderRadius: 40 }
  ],
  
  textAreas: [
    {
      id: "main-message",
      placeholder: "Share your thoughts...",
      x: 100,
      y: 300,
      width: 880,
      height: 300,
      fontSize: { small: 32, medium: 40, large: 48 },
      fontFamily: "main", // references fontOptions
      textAlign: "center",
      lineHeight: 1.4,
      maxLength: 100,
      allowShapes: true
    },
    {
      id: "signature",
      placeholder: "@yourusername",
      x: 100,
      y: 750,
      width: 880,
      height: 80,
      fontSize: { small: 18, medium: 24, large: 30 },
      fontFamily: "secondary", // references fontOptions
      textAlign: "center",
      lineHeight: 1.2,
      maxLength: 30,
      allowShapes: false
    }
  ]
};