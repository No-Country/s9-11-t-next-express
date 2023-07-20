/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
     URL:process.env.API_URL?? "http://localhost:3000"
  }
}

module.exports = nextConfig
