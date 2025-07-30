export const quoteTemplate = {
  id: "quote",
  name: "Quote Template",
  icon: "📝",
  background: "#1a1a1a",
  
  // Customization options
  colorSchemes: [
    { name: "Dark", background: "#1a1a1a", primary: "#ffffff", secondary: "#cccccc" },
    { name: "Light", background: "#f8f8f8", primary: "#2c2c2c", secondary: "#666666" },
    { name: "Blue", background: "#1e3a8a", primary: "#ffffff", secondary: "#bfdbfe" },
    { name: "Green", background: "#065f46", primary: "#ffffff", secondary: "#a7f3d0" },
    { name: "Purple", background: "#581c87", primary: "#ffffff", secondary: "#ddd6fe" },
    { name: "Ocean", background: "#0ea5e9", primary: "#ffffff", secondary: "#e0f2fe" }
  ],
  
  fontOptions: [
    { name: "Elegant", main: "Georgia, serif", secondary: "Arial, sans-serif" },
    { name: "Modern", main: "Helvetica, Arial, sans-serif", secondary: "Arial, sans-serif" },
    { name: "Bold", main: "Impact, Arial Black, sans-serif", secondary: "Arial, sans-serif" },
    { name: "Classic", main: "Times New Roman, serif", secondary: "Arial, sans-serif" }
  ],
  
  sizeOptions: ["small", "medium", "large"],
  
  shapeOptions: [
    { name: "Rectangle", borderRadius: 0 },
    { name: "Rounded", borderRadius: 12 },
    { name: "Pill", borderRadius: 50 }
  ],
  
  textAreas: [
    {
      id: "main-text",
      placeholder: "Your inspiring quote here...",
      x: 100,
      y: 300,
      width: 880,
      height: 400,
      fontSize: { small: 36, medium: 48, large: 60 },
      fontFamily: "main", // references fontOptions
      textAlign: "center",
      lineHeight: 1.3,
      maxLength: 120,
      allowShapes: true
    },
    {
      id: "author",
      placeholder: "- Author Name",
      x: 100,
      y: 750,
      width: 880,
      height: 80,
      fontSize: { small: 18, medium: 24, large: 30 },
      fontFamily: "secondary", // references fontOptions
      textAlign: "center",
      lineHeight: 1.2,
      maxLength: 50,
      allowShapes: false
    }
  ]
};