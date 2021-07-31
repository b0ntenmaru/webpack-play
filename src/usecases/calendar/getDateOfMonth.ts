

export type DateOfTargetMonth = {
  year: number;
  month: number;
  day: number;
  dayOfWeek: number;
  dayOfWeekIndex: number;
}

/**
 * 指定した月の日付情報を返却する
 */
export const getDateOfTargetMonth = (year: number, month: number): Array<DateOfTargetMonth> => {
  const lastDay = new Date(year, month, 0).getDate();
  const dateOfTargetMonth: Array<DateOfTargetMonth> = [];

  let dayOfWeekIndex: number = 0;
  for (let i = 1; i <= lastDay; i++) {
    const date = new Date(year, month - 1, i);


    if (i === 1) {
      dayOfWeekIndex = date.getDay();
    }

    dateOfTargetMonth.push({
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      day: i,
      dayOfWeek: date.getDay(),
      dayOfWeekIndex: dayOfWeekIndex += 1
    });
  }
  return dateOfTargetMonth;
}
