/** @type {import("snowpack").SnowpackUserConfig } */

const FIRST_IMAGE = 'DSC_0154-tagged.jpg';
const SECOND_IMAGE = 'DSC_7876-Pano-Edit-Edit-edit-tagged.jpg';

module.exports = {
  mount: {
    public: '/',
    src: '/dist',
  },
  plugins: [
    /* ... */
    '@snowpack/plugin-svelte',
  ],
  routes: [
    /* Enable an SPA Fallback in development: */
    // {"match": "routes", "src": ".*", "dest": "/index.html"},
  ],
  optimize: {
    /* Example: Bundle your final build: */
  },
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  env: {
    FIRST_IMAGE,
    SECOND_IMAGE,
  },
  buildOptions: {
    baseUrl: '/foto',
    metaUrlPath: '/dist',
  },
};
