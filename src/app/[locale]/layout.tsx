import type { Metadata } from "next";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import "./../globals.css";

export const metadata: Metadata = {
  title: "Focus Fine",
  description: "Your productivity companion",
};

import StickyMobileCTA from '@/components/StickyMobileCTA';

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
          <StickyMobileCTA />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
