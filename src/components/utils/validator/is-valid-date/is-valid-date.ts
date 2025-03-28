export const isValidDate = (date: string): boolean => {
  const dateRegex = /^\d{4}\.\d{2}\.\d{2}$/;
  if (!dateRegex.test(date)) return false;

  const [year, month, day] = date.split(".").map(Number);
  return (
    year >= 0 &&
    month >= 1 &&
    month <= 12 &&
    day >= 1 &&
    day <= new Date(year, month, 0).getDate()
  );
};
