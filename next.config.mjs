/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config) {
        config.module.rules.push({
          test: /\.svg$/,
          use: ['@svgr/webpack'],
        })
    return config
    },
    env: {
        API_KEY: process.env.API_KEY
    }
};

export default nextConfig;
