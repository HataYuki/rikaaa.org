/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
const withPurgeCss = require("next-purgecss");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    domains:['storage.googleapis.com']
  }
}

module.exports = withPurgeCss(withBundleAnalyzer(nextConfig))
