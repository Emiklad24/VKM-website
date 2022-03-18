const withPWA = require("next-pwa");
module.exports = withPWA({
  reactStrictMode: true,
  pwa: {
    dest: "public",
  },

  images: {
    domains: ["kitwind.io", "images.pexels.com", "images.unsplash.com"],
  },
});
