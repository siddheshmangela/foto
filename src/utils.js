export const isProd = import.meta.env.MODE !== 'development';
export const isDev = import.meta.env.MODE === 'development';
export const publicPath = import.meta.env.MODE === 'development' ? '' : '/foto';
