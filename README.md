# Sumit - Frontend Developer Portfolio

A modern, responsive portfolio website showcasing frontend development skills and projects. Built with Next.js, React, and Tailwind CSS, featuring a clean design with dark/light mode support.

## 🚀 Features

- **Responsive Design** - Optimized for all devices and screen sizes
- **Dark/Light Mode** - Toggle between themes with system preference detection
- **Modern UI/UX** - Clean, professional design with smooth animations
- **Interactive Sections** - Hero, About, Skills, Experience, Projects, and Contact
- **Performance Optimized** - Fast loading with Next.js App Router
- **Accessibility** - WCAG compliant with proper semantic HTML

## 🛠️ Technologies Used

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **UI Components:** shadcn/ui
- **Font:** DM Sans (Google Fonts)
- **Icons:** Lucide React
- **Theme Management:** Custom theme provider with localStorage persistence

## 📁 Project Structure

\`\`\`
├── app/
│   ├── layout.tsx          # Root layout with theme provider
│   ├── page.tsx            # Main page with all sections
│   ├── conversation/       # Contact conversation page
│   └── globals.css         # Global styles and CSS variables
├── components/
│   ├── ui/                 # shadcn/ui components
│   ├── navigation.tsx      # Navigation bar with theme toggle
│   ├── hero.tsx           # Hero section
│   ├── about.tsx          # About section
│   ├── skills.tsx         # Skills showcase
│   ├── experience.tsx     # Work experience
│   ├── projects.tsx       # Project portfolio
│   ├── contact.tsx        # Contact form
│   ├── theme-provider.tsx # Theme context provider
│   └── theme-toggle.tsx   # Dark/light mode toggle
├── hooks/
│   ├── use-theme.ts       # Theme management hook
│   ├── use-mobile.tsx     # Mobile detection hook
│   └── use-toast.ts       # Toast notifications
└── lib/
    └── utils.ts           # Utility functions
\`\`\`

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/Sumit1003/portfolio.git
   cd portfolio
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   \`\`\`

3. **Run the development server**
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   \`\`\`

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

\`\`\`bash
npm run build
npm start
\`\`\`

## 🎨 Customization

### Colors
The color scheme is defined in `app/globals.css` using CSS custom properties. Both light and dark mode variants are included.

### Content
Update personal information in the respective component files:
- `components/hero.tsx` - Name, title, and introduction
- `components/about.tsx` - Personal details and education
- `components/skills.tsx` - Technical skills and expertise
- `components/experience.tsx` - Work experience
- `components/projects.tsx` - Portfolio projects
- `components/contact.tsx` - Contact information

### Styling
The project uses Tailwind CSS v4 with custom animations defined in `globals.css`. Modify the design system tokens to match your brand.

## 📱 Sections Overview

- **Hero** - Introduction with name, role, and call-to-action
- **About** - Personal background, education, and summary
- **Skills** - Technical skills organized by category (Frontend, Backend, Tools)
- **Experience** - Professional work experience with achievements
- **Projects** - Featured projects with descriptions and live demos
- **Contact** - Contact form and social media links

## 🌟 Key Features

### Theme System
- System preference detection
- Manual theme switching (Light/Dark/System)
- Persistent theme selection
- Smooth transitions between themes

### Responsive Design
- Mobile-first approach
- Optimized for tablets and desktops
- Touch-friendly navigation
- Accessible on all devices

### Performance
- Next.js App Router for optimal performance
- Optimized images and fonts
- Minimal bundle size
- Fast page loads

## 📞 Contact

**Sumit**
- Email: sk6306210@gmail.com
- Phone: +91-8053104059
- Location: Gurugram, India
- GitHub: [https://github.com/Sumit1003](https://github.com/Sumit1003)
- LinkedIn: [https://www.linkedin.com/in/sumit-s30/](https://www.linkedin.com/in/sumit-s30/)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ by Sumit using Next.js and modern web technologies.
