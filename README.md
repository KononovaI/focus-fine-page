# Focus Fine Landing Page

A professional, mobile-first landing page for the Focus Fine productivity app, built with Next.js, Vanilla CSS, and Supabase.

## Features

- **Mobile-First Design**: Optimized for mobile devices with a modern, dark aesthetic inspired by contemporary web design
- **Multi-Language Support**: English (EN) and Latvian (LV) using `next-intl` with language switcher
- **Supabase Integration**:
  - Newsletter subscription form
  - Contact form submissions
  - Secure Row Level Security (RLS) policies
- **Media**:
  - YouTube Shorts video demo embed
  - Logo from Supabase Storage
  - Downloadable app file from Supabase Storage
- **Components**:
  - Hero section with gradient text
  - Video player section
  - Download section with Android app link
  - Newsletter subscription form
  - Contact form
  - Footer with copyright
- **No External UI Libraries**: Pure Vanilla CSS with CSS Modules for styling
- **React Compiler**: Enabled for optimized performance

## Setup

### 1. Clone the repository
```bash
git clone https://github.com/KononovaI/focus-fine-page.git
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
│   │   │   ├── layout.tsx     # Root layout with i18n
│   │   │   └── page.tsx       # Main landing page
│   │   └── globals.css        # Global styles and CSS variables
│   ├── components/            # React components
│   │   ├── Header.tsx         # Logo header
│   │   ├── Hero.tsx           # Hero section
│   │   ├── VideoPlayer.tsx    # YouTube embed
│   │   ├── DownloadSection.tsx # Download button
│   │   ├── NewsletterForm.tsx  # Newsletter subscription
│   │   ├── ContactForm.tsx     # Contact form
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
├── .env.local.example        # Environment variables template
└── README.md
```

## Database Schema

### `newsletter_subscribers`
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

## Tech Stack

- **Framework**: Next.js (App Router) with React Compiler
- **Language**: TypeScript
- **Styling**: Vanilla CSS (CSS Modules)
- **Backend**: Supabase (Database + Storage)
- **Internationalization**: next-intl
- **Deployment**: Vercel

## Features in Detail

### Multi-Language Support
The app supports English and Latvian with a language switcher in the top-right corner. Translations are managed through JSON files in the `messages/` directory.

### Forms
Both the Newsletter and Contact forms are connected to Supabase with proper error handling and loading states. RLS policies ensure secure data insertion.
