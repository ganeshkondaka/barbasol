# Barbasol App

A modern web application built with Next.js 13+ that provides a comprehensive template management system. Barbasol allows users to browse, search, and manage various templates with a sleek and responsive interface.

## Key Features

- 🔐 Secure user authentication powered by Clerk
- 🎨 Extensive template library
- 🔍 Instant search functionality
- 💫 Modern, responsive UI with smooth animations
- 📱 Full mobile support
- 🌙 Dark mode interface

## Built With

- Next.js 13+ (App Router)
- TypeScript for type safety
- Tailwind CSS for styling
- Clerk for authentication
- React Icons for UI elements

## System Requirements

- Node.js 16.8 or later
- npm or yarn package manager

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Configure environment:
```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_publishable_key
CLERK_SECRET_KEY=your_secret_key
```

3. Start development server:
```bash
npm run dev
```

## Project Architecture

```
barbasol_app/
├── app/
│   ├── components/    # Shared UI components
│   │   ├── Searchbar.tsx
│   │   └── ...
│   ├── dashboard/    # Dashboard features
│   └── page.tsx      # Landing page
├── public/          # Static assets
└── styles/         # Global styles
```

## Core Components

- **Authentication**: Secure user management via Clerk
- **Template Browser**: Dynamic template discovery system
- **Search System**: Real-time template search functionality
- **Responsive UI**: Adaptive layout for all screen sizes
