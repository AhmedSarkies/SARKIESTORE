export const generateFileName = (file) =>
  `${file.name}_${file.lastModified}_${Math.floor(
    Math.random() * 10000000000000000000000000000
  )}`;
