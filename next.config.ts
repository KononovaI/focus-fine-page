import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https' as const,
        hostname: 'amncyapgihtaziuabbkd.supabase.co',
        pathname: '/storage/v1/object/public/**',
      },
      {
        protocol: 'https' as const,
        hostname: 'img.youtube.com',
        pathname: '/vi/**',
      },
    ],
  },
};

export default withNextIntl(nextConfig);
