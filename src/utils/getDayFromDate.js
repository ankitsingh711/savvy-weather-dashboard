export default function getDayFromDate (date) {
  const obj = {
    0: "Monday",
    1: "Tuesday",
    2: "Wednesday",
    3: "Thursday",
    4: "Firday",
    5: "Saturday",
    6: "Sunday",
  };

  const day = new Date(date).getDay();
  return obj[day];
};