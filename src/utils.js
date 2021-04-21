export const loadImage = (src) =>
  new Promise((resolve) => {
    const img = new Image();
    const srcPath = `images/${src}`;

    img.src = srcPath;

    img.onload = () => {
      resolve(srcPath);
    };

    img.onerror = (err) => {
      console.log(err);
      resolve('');
    };
  });
