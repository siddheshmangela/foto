// export const isProd = import.meta.env.MODE !== 'development';
// export const isDev = import.meta.env.MODE === 'development';
// export const publicPath = import.meta.env.MODE === 'development' ? '' : '/foto';

export const imageCdnUrl = `${import.meta.env.IMAGE_CDN}/f=auto`;

export const detectIfMobile = () => {
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent,
    )
  ) {
    return true;
  }

  return false;
};
