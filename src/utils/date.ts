const pad = (n: number) => n.toString().padStart(2, '0');

export const getCurrentMonthRange = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = pad(now.getMonth() + 1);

  const from = `${year}-${month}-01`;
  const lastDay = new Date(year, now.getMonth() + 1, 0).getDate();
  const to = `${year}-${month}-${pad(lastDay)}`;

  return { from, to };
};

export const getRangeForMonth = (year: number, month: number) => {
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const formatDate = (date: Date) => date.toISOString().split('T')[0];

  return {
    from: formatDate(firstDay),
    to: formatDate(lastDay),
  };
};

export const formatDay = (date: Date) =>
  `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date
    .getDate()
    .toString()
    .padStart(2, '0')}`;


    

