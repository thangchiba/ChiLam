function CountDays(date) {
  let today = new Date();
  let countDays = Math.floor(
    (today.getTime() - date.getTime()) / (1000 * 3600 * 24)
  );
  return countDays;
}

function getDateVietnamese(date) {
  console.log(date);
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let dayofweek = date.getDay();

  const dayname = ["CN", "T2", "T3", "T4", "T5", "T6", "T7"];

  return (
    // "Ngày " + day + " Tháng " + month + " Năm " + year + "("+dayname[dayofweek]
    `Ngày ${day} Tháng ${month} Năm ${year} (${dayname[dayofweek]})`
  );
}

export const GetDateVietnamese = getDateVietnamese;

export default CountDays;
