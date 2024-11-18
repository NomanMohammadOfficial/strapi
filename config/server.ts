export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: parseInt(process.env.PORT || '10000', 10),
  url: env('PUBLIC_URL', ''),
  proxy: env.bool('IS_PROXIED', true),
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
