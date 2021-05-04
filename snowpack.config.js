/** @type {import("snowpack").SnowpackUserConfig } */

const IMAGE_CDN = 'https://cdn.statically.io/img/siddheshmangela.github.io';
const COVER_IMAGE = `${IMAGE_CDN}/foto/images/DSC_0154-tagged.jpg`;

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
    IMAGE_CDN,
    COVER_IMAGE,
  },
  buildOptions: {
    baseUrl: '/foto',
    metaUrlPath: '/dist',
  },
};
