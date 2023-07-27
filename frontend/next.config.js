/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
     URL:process.env.API_URL?? "http://localhost:3000"
  },
  images: {
    domains: ["res.cloudinary.com", "happytravel.viajes", "ui-avatars.com",'http2.mlstatic.com'],
  },
}

module.exports = nextConfig
