// Deployment configuration for Rawdog Skincare
module.exports = {
  // Environment variables
  env: {
    REACT_APP_NAME: 'Rawdog Skincare',
    REACT_APP_VERSION: '1.0.0',
    REACT_APP_ENV: process.env.NODE_ENV || 'development',
    GENERATE_SOURCEMAP: 'false'
  },
  
  // Build settings
  build: {
    distDir: 'build',
    outputDirectory: 'build'
  },
  
  // Routing configuration for SPA
  routes: [
    { src: '/', dest: '/index.html' },
    { src: '/collection', dest: '/index.html' },
    { src: '/science', dest: '/index.html' },
    { src: '/about', dest: '/index.html' },
    { src: '/products/cleanser', dest: '/index.html' },
    { src: '/products/moisturizer', dest: '/index.html' },
    { src: '/products/eyecream', dest: '/index.html' },
    { src: '/products/bundle', dest: '/index.html' }
  ],
  
  // Performance optimizations
  headers: {
    'Cache-Control': 'public, max-age=31536000, immutable',
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    'X-XSS-Protection': '1; mode=block',
    'Referrer-Policy': 'strict-origin-when-cross-origin'
  }
};
