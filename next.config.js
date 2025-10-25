/** @type {import('next').NextConfig} */
const nextConfig = {
  // Отключаем Turbopack для production сборки
  experimental: {
    turbo: undefined,
  },
  // Игнорируем ESLint во время сборки
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Игнорируем TypeScript ошибки во время сборки
  typescript: {
    ignoreBuildErrors: true,
  },
  // Отключаем строгий режим
  reactStrictMode: false,
}

module.exports = nextConfig