const LOCAL_STORAGE_KEY = 'histories';

export const getPastTwoDaysHistory = () => {
  const histories = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || "[]");
  const dayBeforeYesterday = new Date();
  dayBeforeYesterday.setDate(dayBeforeYesterday.getDate()-2);

  const past2daysRecords = histories.filter(record => {
    return new Date(record.date) >= dayBeforeYesterday
  });

  return past2daysRecords;
}

export const updateLocalStorageHistory = (history) => {
  localStorage.setItem(LOCAL_STORAGE_KEY, history);
}