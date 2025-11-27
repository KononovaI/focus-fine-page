# Focus Fine Landing Page

A professional, mobile-first landing page for the Focus Fine product, built with Next.js, Vanilla CSS, and Supabase.

## Features

- **Mobile-First Design**: Optimized for mobile devices with a modern, dark aesthetic.
- **Multi-Language Support**: English (en) and Latvian (lv) using `next-intl`.
- **Supabase Integration**:
  - Newsletter subscription.
  - Contact form submissions.
- **Video Demo**: YouTube Shorts embed.
- **No External UI Libraries**: Pure Vanilla CSS with CSS Modules.

## Setup

1.  **Clone the repository**:
    ```bash
    git clone <repository-url>
    cd focus-fine-page
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Environment Variables**:
    Create a `.env.local` file in the root directory:
    ```bash
    cp .env.local.example .env.local
    ```
    The file already contains your Supabase credentials. If you need to change them, update the values in `.env.local`.

4.  **Run Development Server**:
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) in your browser.

## Database Schema (Supabase)

Ensure your Supabase project has the following tables:

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

1.  Push your code to GitHub/GitLab/Bitbucket.
2.  Import the project in Vercel.
3.  Vercel will automatically detect Next.js and configure the build settings.
4.  Deploy!

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Vanilla CSS (CSS Modules)
- **Backend**: Supabase
- **Internationalization**: next-intl
