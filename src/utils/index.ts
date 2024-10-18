export const convertFormatDate = (date: Date = new Date()) => {
  let hours = date.getHours().toString().padStart(2, "0");
  let minutes = date.getMinutes().toString().padStart(2, "0");

  let day = date.getDate().toString().padStart(2, "0");
  let month = (date.getMonth() + 1).toString().padStart(2, "0");
  let year = date.getFullYear().toString().slice(2);

  return `${hours}:${minutes} / ${day}.${month}.${year}`;
};
