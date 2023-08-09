/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  i18n: {
    locales: ['en', 'pt'],
    defaultLocale: 'en'
  }
}
const withImages = require('next-images')

module.exports = nextConfig
// module.exports = withImages({
//   esModule: true,
// })
