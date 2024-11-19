export default ({ env }) => ({
  // Explicitly bind to all network interfaces
  host: '0.0.0.0',
  // Use PORT from environment or default to 10000
  port: parseInt(process.env.PORT || '10000', 10),
  url: env('PUBLIC_URL', ''),
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
