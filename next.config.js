/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    images: {
        domains: ["localhost", "via.placeholder.com"],
    },
};

module.exports = nextConfig;
