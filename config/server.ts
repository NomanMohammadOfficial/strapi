export default ({ env }) => ({
  host: '0.0.0.0',
  port: Number(process.env.PORT) || 10000,
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
