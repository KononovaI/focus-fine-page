# Focus Fine Landing Page

A professional, "iOS-native" aesthetic landing page for the **FocusFine** productivity app. Built with **Next.js 15+**, **Vanilla CSS**, and **Supabase**, this page is optimized for conversion and high performance.

## 🚀 Key Features

- **Master Your Time in 3 Steps**: A visual guide explaining the app's core commitment logic through 3 interactive cards.
- **Conversion-Optimized Hero**: Features a direct Google Play badge and a desktop/mobile QR code for instant app access.
- **Mobile-First Design**: Optimized for mobile devices with a modern, dark aesthetic inspired by contemporary web design
- **Multi-Language Support**: English (EN) and Latvian (LV) using `next-intl` with language switcher
- **Supabase Integration**:
  - iOS Waiting List (email collection)
  - Contact form submissions
  - Secure Row Level Security (RLS) policies
- **Media**:
  - YouTube Shorts video demo embed (lazy-loaded for performance)
  - Logo from Supabase Storage
  - Link to the Google Play Store
- **Key Components**:
  - Hero section with QR code integration
  - **FeaturesSection**: The 3-step value proposition guide
  - **VideoPlayer**: Optimized YouTube player
  - Store badges, Waiting List, and Contact forms
- **No External UI Libraries**: Pure Vanilla CSS with CSS Modules for styling
- **React Compiler**: Enabled for optimized performance

## Setup

### 1. Clone the repository
Clone the `dev` branch for development:
```bash
git clone -b dev https://github.com/KononovaI/focus-fine-page.git
cd focus-fine-page
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```

## Project Structure

```
focus-fine-page/
├── src/
│   ├── app/
│   │   ├── [locale]/          # Internationalized routes
│   │   │   ├── privacy-policy/ # Privacy Policy page
│   │   │   ├── terms-of-use/   # Terms of Use page
│   │   │   ├── layout.tsx     # Root layout with i18n
│   │   │   └── page.tsx       # Main landing page
│   │   └── globals.css        # Global styles and CSS variables
│   ├── components/            # React components
│   │   ├── Header.tsx         # Logo header
│   │   ├── Hero.tsx           # Hero section with QR code
│   │   ├── FeaturesSection.tsx # The 3-step value guide
│   │   ├── VideoPlayer.tsx    # YouTube embed (lazy-loaded)
│   │   ├── InlineCTA.tsx      # Mid-page call to action
│   │   ├── DownloadSection.tsx # Download buttons
│   │   ├── StoreBadge.tsx     # Reusable app store badges
│   │   ├── NewsletterForm.tsx  # iOS Waiting List form
│   │   ├── ContactForm.tsx     # Contact form
│   │   ├── StickyMobileCTA.tsx # Floating mobile button
│   │   ├── Footer.tsx          # Footer with copyright
│   │   └── LanguageSwitcher.tsx # Language toggle
│   ├── i18n/                  # Internationalization config
│   │   ├── routing.ts         # i18n routing setup
│   │   └── request.ts         # i18n request config
│   ├── lib/
│   │   └── supabase.ts        # Supabase client
│   └── middleware.ts          # Next.js middleware for i18n
├── messages/                  # Translation files
│   ├── en.json               # English translations
│   └── lv.json               # Latvian translations
├── public/                    # Static assets
└── .env.local.example        # Environment variables template
```

## Database Schema

### `newsletter_subscribers` (iOS Waiting List)
| Column | Type | Description |
| :--- | :--- | :--- |
| `id` | uuid | Primary Key, Default: `gen_random_uuid()` |
| `email` | text | Subscriber email |
| `created_at` | timestamptz | Default: `now()` |

### `contact_messages`
| Column | Type | Description |
| :--- | :--- | :--- |
| `id` | uuid | Primary Key, Default: `gen_random_uuid()` |
| `name` | text | Sender name |
| `email` | text | Sender email |
| `message` | text | Message content |
| `created_at` | timestamptz | Default: `now()` |

## Deployment

This project is optimized for deployment on [Vercel](https://vercel.com).

### Development Workflow
- **Branch Strategy**: Always push your active development work to the `dev` branch.
- **Preview Deployments**: Whenever you push code to the `dev` branch, Vercel automatically builds it but **does not update the live site**.
- **Testing**: Vercel generates a unique **Preview URL** for every push. This allows you to see and test your changes in a real environment without affecting the version our users see.
- **Accessing the URL**: To get your Preview URL, push your code to `dev` and then check the **GitHub Pull Request** (or the commit status check) for the Vercel deployment link.

## Tech Stack

- **Framework**: Next.js (App Router) with React Compiler
- **Language**: TypeScript
- **Styling**: Vanilla CSS (CSS Modules)
- **Backend**: Supabase (Database + Storage)
- **Internationalization**: next-intl
- **Deployment**: Vercel

## Features in Detail

### Master Your Time in 3 Steps
We replaced the static value proposition with a high-impact 3-card guide:
1. **Select Distractions**: Explain the app selection process.
2. **Set Your Commitment**: Clear explanation of the commitment/fee logic.
3. **Deep Focus**: The final unlock mechanism (pay to access early).

### Multi-Language Support
The app supports English and Latvian with a language switcher in the top-right corner. Translations are managed through JSON files in the `messages/` directory.

### Forms
Both the iOS Waiting List and Contact forms are connected to Supabase with proper error handling and loading states. RLS policies ensure secure data insertion.

