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
    // Force the server to listen on the specified port
    process.env.PORT = process.env.PORT || '10000';
  },

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap({ strapi }) {
    const serverUrl = `http://localhost:${process.env.PORT}`;
    console.log(` Server is running on ${serverUrl}`);
    console.log(` Admin panel available at ${serverUrl}/admin`);
  },
};
