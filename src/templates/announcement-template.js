export const announcementTemplate = {
  id: "announcement",
  name: "Announcement Template", 
  icon: "📢",
  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  textAreas: [
    {
      id: "title",
      placeholder: "BIG ANNOUNCEMENT",
      x: 100,
      y: 200,
      width: 880,
      height: 120,
      fontSize: 56,
      color: "#ffffff",
      fontFamily: "Arial, sans-serif",
      fontWeight: "bold",
      textAlign: "center",
      lineHeight: 1.1,
      maxLength: 30
    },
    {
      id: "subtitle",
      placeholder: "Something exciting is coming...",
      x: 100,
      y: 400,
      width: 880,
      height: 200,
      fontSize: 32,
      color: "#ffffff",
      fontFamily: "Arial, sans-serif",
      textAlign: "center",
      lineHeight: 1.3,
      maxLength: 80
    },
    {
      id: "date",
      placeholder: "Coming Soon",
      x: 100,
      y: 700,
      width: 880,
      height: 100,
      fontSize: 28,
      color: "#f0f0f0",
      fontFamily: "Arial, sans-serif",
      textAlign: "center",
      lineHeight: 1.2,
      maxLength: 40
    }
  ]
};