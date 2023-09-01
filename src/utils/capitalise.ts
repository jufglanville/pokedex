export const capitalise = (str: string) => {
  const strArr = str.split('-' || ' ');

  const capitalised = strArr.reduce((acc, curr) => {
    acc += curr.charAt(0).toUpperCase() + curr.slice(1) + ' ';
    return acc;
  }, '');

  return capitalised;
};
