const withPlugins = require("next-compose-plugins");
const withTM = require("next-transpile-modules")([
  "react-native-responsive-query",
]);

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      // Transform all direct `react-native` imports to `react-native-web`
      "react-native$": "react-native-web",
    };
    config.resolve.extensions = [
      ".web.js",
      ".web.jsx",
      ".web.ts",
      ".web.tsx",
      ...config.resolve.extensions,
    ];
    return config;
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = withPlugins([withTM], nextConfig);
