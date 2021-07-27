

type DateOfTargetMonth = {
  year: number;
  month: number;
  day: number;
  dayOfWeek: number;
}

/**
 * 指定した月の日付情報を返却する
 */
export const getDateOfTargetMonth = (year: number, month: number): Array<DateOfTargetMonth> => {
  const targetDate = new Date(year, month - 1);
  const lastDay = new Date(targetDate.getFullYear(), targetDate.getMonth(), 0).getDate();
  
  const dateOfTargetMonth: Array<DateOfTargetMonth> = [];
  for (let i = 1; i <= lastDay; i++) {
    dateOfTargetMonth.push({
      year: targetDate.getFullYear(),
      month: targetDate.getMonth() + 1,
      day: i,
      dayOfWeek: targetDate.getDay()
    });
  }
  return dateOfTargetMonth;
}
