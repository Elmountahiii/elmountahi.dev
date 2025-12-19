# My Portfolio Template

A modern, sleek portfolio template built with **React 19**, **TypeScript**, **Vite**, and **Tailwind CSS 4**. Perfect for developers, designers, and creative professionals who want a beautiful, fully-featured portfolio without the hassle of building from scratch.

![Portfolio Preview](./images/main_image.png)

##  Features

- **Modern Design**: Clean, minimalist aesthetic with smooth animations
- **Fully Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Dark Mode Ready**: Beautiful dark theme optimized for eye comfort
- **TypeScript Support**: Full type safety with strict TypeScript configuration
- **Tailwind CSS 4**: Utility-first CSS framework for rapid styling
- **Lucide Icons**: Beautiful, customizable SVG icons
- **React 19**: Latest React features with improved performance
- **Fast Development**: Hot Module Replacement (HMR) with Vite for instant feedback
- **SEO Friendly**: Semantic HTML and meta tags ready for customization
- **Docker Ready**: Includes Docker and Docker Compose configuration
- **Production Ready**: Optimized build process with ESLint configuration

##  Sections Included

- **Header**: Navigation bar with smooth scrolling
- **Hero Section**: Eye-catching introduction with call-to-action
- **About Section**: Tell your story and highlight your skills
- **Journey Section**: Timeline of your professional experience
- **Featured Projects**: Showcase your best work
- **Contact Section**: Multiple ways for visitors to reach you
- **Responsive Footer**: Clean footer with copyright info

##  Quick Start

### Prerequisites

- Node.js 16+ or Bun
- npm, yarn, or bun package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Elmountahiii/portfolio
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   bun install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173` to see your portfolio

## Customization Guide

### Personal Information

Edit the content in your components:

- **Header & Navigation**: `src/components/Header.tsx`
- **Hero Section**: `src/components/Hero.tsx`
- **About Section**: `src/components/AboutSection.tsx`
- **Experience/Journey**: `src/components/Journey.tsx`
- **Projects**: `src/components/FeaturedProjects.tsx`
- **Contact**: `src/components/ContactSection.tsx`


## Tech Stack

- **Frontend Framework**: React 19
- **Language**: TypeScript 5.9
- **Build Tool**: Vite 7
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React
- **Code Quality**: ESLint
- **Runtime**: Node.js / Bun

##  Docker Deployment

### Using Docker Compose

```bash
docker-compose up --build
```

The portfolio will be available at `http://localhost:80`

### Manual Docker Build

```bash
docker build -t my-portfolio .
docker run -p 80:80 my-portfolio
```

Built with ❤️ by [ElMountahi](https://github.com/elmountahiii)
