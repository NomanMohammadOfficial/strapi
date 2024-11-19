/**
 * Strapi lifecycle scripts
 */

export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register({ strapi }) {
    // Ensure port is set
    const port = process.env.PORT || '10000';
    const host = process.env.HOST || '0.0.0.0';
    process.env.PORT = port;
    process.env.HOST = host;
  },

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap({ strapi }) {
    const port = process.env.PORT || '10000';
    const host = process.env.HOST || '0.0.0.0';
    console.log(` Server is running on http://${host}:${port}`);
    console.log(` Admin panel available at http://${host}:${port}/admin`);
  },
};
