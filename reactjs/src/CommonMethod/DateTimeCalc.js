function CountDays(dateInput) {
  let date = new Date(dateInput);
  let today = new Date();
  let countDays = Math.floor(
    (today.getTime() - date.getTime()) / (1000 * 3600 * 24)
  );
  return countDays;
}

function getDateVietnamese(enteredDate) {
  const date = new Date(enteredDate);
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let dayofweek = date.getDay();

  const dayname = ["CN", "T2", "T3", "T4", "T5", "T6", "T7"];

  return (
    // `Ngày ${day} Tháng ${month} Năm ${year} (${dayname[dayofweek]})`
    `${day}/${month}/${year} (${dayname[dayofweek]})`
  );
}
function getDateTimeVietnamese(enteredDate) {
  const date = new Date(enteredDate);
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let dayofweek = date.getDay();
  let hours = (date.getHours() < 10 ? "0" : "") + date.getHours();
  let minutes = (date.getMinutes() < 10 ? "0" : "") + date.getMinutes();
  let seconds = (date.getSeconds() < 10 ? "0" : "") + date.getSeconds();

  const dayname = ["CN", "T2", "T3", "T4", "T5", "T6", "T7"];

  return (
    // `Ngày ${day} Tháng ${month} Năm ${year} (${dayname[dayofweek]})`
    `${day}/${month}/${year} ${hours}:${minutes}:${seconds} (${dayname[dayofweek]})`
  );
}

// For todays date;
Date.prototype.today = function () {
  return (
    (this.getDate() < 10 ? "0" : "") +
    this.getDate() +
    "/" +
    (this.getMonth() + 1 < 10 ? "0" : "") +
    (this.getMonth() + 1) +
    "/" +
    this.getFullYear()
  );
};

// For the time now
Date.prototype.timeNow = function () {
  return (
    (this.getHours() < 10 ? "0" : "") +
    this.getHours() +
    ":" +
    (this.getMinutes() < 10 ? "0" : "") +
    this.getMinutes() +
    ":" +
    (this.getSeconds() < 10 ? "0" : "") +
    this.getSeconds()
  );
};

Date.prototype.nowDateTime = function () {
  return this.today() + " " + this.timeNow();
};

export const GetDateVietnamese = getDateVietnamese;
export const GetDateTimeVietnamese = getDateTimeVietnamese;

export default CountDays;
