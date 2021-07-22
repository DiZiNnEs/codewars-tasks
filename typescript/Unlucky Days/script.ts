export const unluckyDays = (year: number): number => {
  let count = 0;

  for (let month = 0; month < 12; month++) {
    let yearOfCalendar = new Date(year, month, 13);
    if (yearOfCalendar.getDay() == 5) {
      count++;
    }
  }

  return count;
}

console.log(unluckyDays(2015))
