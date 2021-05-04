/** @type {import("snowpack").SnowpackUserConfig } */

const FIRST_IMAGE = 'DSC_0154-tagged.jpg';
const IMAGE_CDN = 'https://cdn.statically.io/img/siddheshmangela.github.io';

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
    bundle: true,
    minify: true,
    splitting: true,
    sourcemap: false,
  },
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  env: {
    FIRST_IMAGE,
    IMAGE_CDN,
  },
  buildOptions: {
    baseUrl: '/foto',
    metaUrlPath: '/dist',
  },
};
