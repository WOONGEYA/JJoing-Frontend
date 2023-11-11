export const daysAgo = (targetDate: string) => {
  const target = new Date(targetDate);
  const now = new Date();

  const timeDiff = Number(now) - Number(target);
  const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

  return daysDiff;
};
