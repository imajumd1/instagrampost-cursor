export const announcementTemplate = {
  id: "announcement",
  name: "Announcement Template", 
  icon: "📢",
  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  
  // Customization options
  colorSchemes: [
    { name: "Purple Gradient", background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", primary: "#ffffff", secondary: "#f0f0f0" },
    { name: "Orange Gradient", background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)", primary: "#ffffff", secondary: "#fef7f7" },
    { name: "Blue Gradient", background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)", primary: "#ffffff", secondary: "#f0fdff" },
    { name: "Green Gradient", background: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)", primary: "#ffffff", secondary: "#f0fffe" },
    { name: "Red Gradient", background: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)", primary: "#ffffff", secondary: "#fffef7" },
    { name: "Dark Solid", background: "#1a1a1a", primary: "#ffffff", secondary: "#cccccc" }
  ],
  
  fontOptions: [
    { name: "Bold Impact", main: "Impact, Arial Black, sans-serif", secondary: "Arial, sans-serif", tertiary: "Arial, sans-serif" },
    { name: "Modern Clean", main: "Helvetica, Arial, sans-serif", secondary: "Helvetica, Arial, sans-serif", tertiary: "Arial, sans-serif" },
    { name: "Professional", main: "Arial, sans-serif", secondary: "Arial, sans-serif", tertiary: "Arial, sans-serif" },
    { name: "Elegant", main: "Georgia, serif", secondary: "Georgia, serif", tertiary: "Arial, sans-serif" }
  ],
  
  sizeOptions: ["small", "medium", "large"],
  
  shapeOptions: [
    { name: "Rectangle", borderRadius: 0 },
    { name: "Rounded", borderRadius: 15 },
    { name: "Pill", borderRadius: 50 }
  ],
  
  textAreas: [
    {
      id: "title",
      placeholder: "BIG ANNOUNCEMENT",
      x: 100,
      y: 200,
      width: 880,
      height: 120,
      fontSize: { small: 44, medium: 56, large: 68 },
      fontFamily: "main", // references fontOptions
      fontWeight: "bold",
      textAlign: "center",
      lineHeight: 1.1,
      maxLength: 30,
      allowShapes: true
    },
    {
      id: "subtitle",
      placeholder: "Something exciting is coming...",
      x: 100,
      y: 400,
      width: 880,
      height: 200,
      fontSize: { small: 24, medium: 32, large: 40 },
      fontFamily: "secondary", // references fontOptions
      textAlign: "center",
      lineHeight: 1.3,
      maxLength: 80,
      allowShapes: true
    },
    {
      id: "date",
      placeholder: "Coming Soon",
      x: 100,
      y: 700,
      width: 880,
      height: 100,
      fontSize: { small: 20, medium: 28, large: 36 },
      fontFamily: "tertiary", // references fontOptions
      textAlign: "center",
      lineHeight: 1.2,
      maxLength: 40,
      allowShapes: false
    }
  ]
};