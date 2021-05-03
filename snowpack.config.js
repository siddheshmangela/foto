/** @type {import("snowpack").SnowpackUserConfig } */
const imagesList = require('./src/images-list.json');

const FIRST_IMAGE = imagesList[0].image;

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
  },
  buildOptions: {
    baseUrl: '/foto',
    metaUrlPath: '/dist',
  },
};
