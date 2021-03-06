export const diffYears = (date: string) => {
  return new Date().getFullYear() - parseInt(date);
};
