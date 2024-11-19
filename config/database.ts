import path from 'path';

export default ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: env('DATABASE_URL'),
    pool: {
      min: 0,
      max: 3
    },
    acquireConnectionTimeout: 5000,
  },
});
