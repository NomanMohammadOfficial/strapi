const strapi = require('@strapi/strapi');

const app = strapi({ distDir: './dist' });

// Start Strapi
app.start().catch((error) => {
  console.error('Server failed to start:', error);
  process.exit(1);
});
