/** @type {import('next').NextConfig} */
const nextConfig = {
    trailingSlash: true,
    i18n: {
        localeDetection: false,
        locales: ['en', 'sv'],
        defaultLocale: 'en'
    }
};

export default nextConfig;
