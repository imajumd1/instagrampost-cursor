export const quoteTemplate = {
  id: "quote",
  name: "Quote Template",
  icon: "📝",
  background: "#1a1a1a",
  textAreas: [
    {
      id: "main-text",
      placeholder: "Your inspiring quote here...",
      x: 100,
      y: 300,
      width: 880,
      height: 400,
      fontSize: 48,
      color: "#ffffff",
      fontFamily: "Georgia, serif",
      textAlign: "center",
      lineHeight: 1.3,
      maxLength: 120
    },
    {
      id: "author",
      placeholder: "- Author Name",
      x: 100,
      y: 750,
      width: 880,
      height: 80,
      fontSize: 24,
      color: "#cccccc",
      fontFamily: "Arial, sans-serif",
      textAlign: "center",
      lineHeight: 1.2,
      maxLength: 50
    }
  ]
};