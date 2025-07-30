# 📸 Instagram Post Generator

A simple, mobile-first web app for creating beautiful 1080x1080 Instagram posts in under 30 seconds. Built with React + Canvas API for high-quality exports.

![Instagram Post Generator](https://img.shields.io/badge/React-18-blue) ![Canvas API](https://img.shields.io/badge/Canvas-API-green) ![Mobile First](https://img.shields.io/badge/Mobile-First-orange)

## ✨ Features

- **🎨 3 Beautiful Templates**: Quote, Announcement, and Personal post designs
- **📱 Mobile-First Design**: Optimized for phone usage with touch-friendly controls
- **✏️ Click-to-Edit Text**: Instant text editing with live preview
- **🖼️ High-Quality Export**: Download perfect 1080x1080 PNG files for Instagram
- **⚡ Fast & Simple**: Create professional posts in under 30 seconds
- **🌐 Frontend-Only**: No backend required, runs entirely in the browser

## 🚀 Live Demo

[Try it now!](https://localhost:5173) (when running locally)

## 📱 How to Use

1. **Choose a Template**: Pick from Quote, Announcement, or Personal templates
2. **Edit Text**: Click on any text area to customize your message
3. **Download**: Hit the download button to get your 1080x1080 Instagram post

That's it! Professional Instagram posts in 30 seconds.

## 🛠️ Tech Stack

- **React 18**: Modern functional components with hooks
- **HTML5 Canvas**: Direct API usage for rendering and export
- **CSS**: Mobile-first responsive design
- **Vite**: Fast development and building

## 🏃‍♂️ Quick Start

```bash
# Clone the repository
git clone https://github.com/imajumd1/instagrampost-cursor.git
cd instagrampost-cursor

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:5173](http://localhost:5173) to use the app.

## 🎨 Templates

### 📝 Quote Template
- Dark background with elegant typography
- Perfect for inspirational quotes and wisdom
- Author attribution support

### 📢 Announcement Template  
- Gradient background with bold typography
- Great for product launches, events, news
- Title, subtitle, and date fields

### 👤 Personal Template
- Warm gradient with personal touch
- Ideal for personal branding and lifestyle posts
- Message and signature fields

## 📐 Design Principles

- **30-Second Magic**: Complete workflow in under 30 seconds
- **Mobile-First**: Designed primarily for phone usage
- **No Decisions**: Pre-optimized templates that just work
- **Instant Feedback**: Live preview as you type
- **One-Click Export**: Download that works on first try

## 🏗️ Architecture

### Components
```
src/
├── components/
│   ├── TemplateSelector.jsx  # 3-template grid with active states
│   ├── Canvas.jsx           # Real-time preview + export canvas
│   ├── TextEditor.jsx       # Form inputs with live updates
│   └── DownloadButton.jsx   # One-click PNG export
├── templates/
│   ├── quote-template.js    # Quote template configuration
│   ├── announcement-template.js # Announcement template config
│   └── personal-template.js # Personal template configuration
└── App.jsx                  # Main app component
```

### Technical Features
- **Canvas Rendering**: Custom text wrapping and alignment
- **Gradient Support**: CSS gradient parsing for backgrounds
- **Export Quality**: Full 1080x1080 resolution with PNG compression
- **Performance**: Optimized for mobile with minimal bundle size

## 🚀 Deployment

Ready for static hosting on platforms like:
- **Railway** (recommended)
- Vercel
- Netlify
- GitHub Pages

```bash
npm run build
# Deploy the 'dist' folder
```

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed deployment instructions.

## 📱 Mobile Experience

- Touch-optimized controls (44px+ tap targets)
- Responsive canvas that scales perfectly
- Portrait orientation optimized
- Works seamlessly on iOS Safari and Chrome Mobile

## 🎯 MVP Scope

This is the MVP version focusing on core functionality:
- ✅ 3 essential templates
- ✅ Text-only editing (no image uploads)
- ✅ Single export format (PNG)
- ✅ Mobile-first experience

## 🔮 Future Enhancements

- More templates and categories
- Color customization options
- Image upload and backgrounds
- Multiple export formats (Stories, Reels)
- User accounts and saved designs
- Social media integration

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

Built with ❤️ for creators who want to make beautiful Instagram posts quickly and easily.

---

**⭐ Star this repo if you found it helpful!**