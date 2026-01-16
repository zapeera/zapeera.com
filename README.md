# Zapeera - Unified Solutions (Next.js)

A modern, responsive website built with Next.js 14, React, TypeScript, and Tailwind CSS.

## Features

- 🚀 **Next.js 14** with App Router
- ⚡ **TypeScript** for type safety
- 🎨 **Tailwind CSS** for styling
- 📱 **Responsive Design** for all devices
- 🎯 **SEO Optimized** with Next.js
- 🔧 **Modern UI Components** with Radix UI

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
```

2. Run the development server:
```bash
npm run dev
# or
yarn dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run export` - Export static site

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx          # Home page
│   ├── globals.css       # Global styles
│   └── [routes]/         # Route pages
├── src/
│   ├── components/       # React components
│   ├── pages/           # Page components
│   ├── hooks/           # Custom hooks
│   └── lib/             # Utilities
├── public/              # Static assets
└── package.json
```

## Pages

- `/` - Home
- `/features` - Features
- `/solutions` - Solutions  
- `/pricing` - Pricing
- `/blog` - Blog
- `/updates` - Updates
- `/about` - About
- `/careers` - Careers
- `/contact` - Contact

## Technologies Used

- **Next.js 14** - React framework
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Radix UI** - Component library
- **Lucide React** - Icons
- **React Query** - Data fetching

## Email Configuration (Contact Form)

To enable email functionality for the contact form, you need to set up Gmail SMTP:

1. Create a `.env.local` file in the root directory

2. Add the following environment variables:

```env
# Your Gmail address (the email you'll use to send emails)
GMAIL_USER=your-email@gmail.com

# Gmail App Password (NOT your regular Gmail password)
# To generate an App Password:
# 1. Go to your Google Account settings
# 2. Enable 2-Step Verification if not already enabled
# 3. Go to Security > App passwords
# 4. Generate a new app password for "Mail"
# 5. Use that 16-character password here (without spaces)
GMAIL_APP_PASSWORD=your-16-character-app-password

# Email address where you want to receive form submissions
# If not set, emails will be sent to GMAIL_USER
RECEIVER_EMAIL=your-receiver-email@gmail.com
```

3. **Important**: Make sure `.env.local` is in your `.gitignore` file (it should be by default)

4. Restart your development server after adding the environment variables

## Deployment

The app can be deployed to any platform that supports Next.js:

- **Vercel** (recommended)
- **Netlify**
- **AWS Amplify**
- **Railway**

**Note**: For production deployment, add the environment variables in your hosting platform's environment variable settings.

For static export:
```bash
npm run export
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License.# zapeera_landing_page
