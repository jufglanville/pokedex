export const getSlug = (url: string) => {
  const array = url.split('/');

  if (array[array.length - 1].length === 0) {
    return array[array.length - 2];
  } else {
    return array[array.length - 1];
  }
};
