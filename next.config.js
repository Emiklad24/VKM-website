const withPWA = require("next-pwa");
module.exports = withPWA({
  reactStrictMode: true,
  pwa: {
    dest: "public",
    disable: process.env.NODE_ENV === "development",
  },

  images: {
    domains: [
      "kitwind.io",
      "images.pexels.com",
      "images.unsplash.com",
      "res.cloudinary.com",
    ],
    // loader: "akamai",
    // path: "/",
  },
});
