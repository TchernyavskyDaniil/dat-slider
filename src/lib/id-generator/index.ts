export const generateId = () =>
  Math.random()
    .toString(32)
    .substring(2);
