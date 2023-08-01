export const truncate = (str: string) => {
  return str?.length > 90 ? `${str.substring(0, 90)}...` : str;
};
