// src/utils/formatDateTime.js
function FormatDateTime(targetDate, Countdown) {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const exactDate = new Date(targetDate).toLocaleDateString('id-ID', options);
  
    const timeRemaining = Countdown({ targetDate });
    const { days, hours, minutes, seconds } = timeRemaining;
  
    const formattedDate = new Date(targetDate).toLocaleDateString(undefined, options);
    const formattedDateHari = new Date(targetDate).toLocaleDateString(undefined, { weekday: 'long' });
    const formattedDateBulan = new Date(targetDate).toLocaleDateString(undefined, { month: 'long' });
    const formattedDateTahun = new Date(targetDate).toLocaleDateString(undefined, { year: 'numeric' });
    const formattedDateHariNumber = new Date(targetDate).toLocaleDateString(undefined, { day: 'numeric' });
  
    const formattedTime = `${hours}:${minutes}:${seconds}`;
    const formattedTimeDay = `${days}`;
    const formattedTimeHour = `${hours}`;
    const formattedTimeMinute = `${minutes}`;
    const formattedTimeSecond = `${seconds}`;
  
    return {
      exactDate,
      formattedDate,
      formattedDateHari,
      formattedDateBulan,
      formattedDateTahun,
      formattedDateHariNumber,
      formattedTime,
      formattedTimeDay,
      formattedTimeHour,
      formattedTimeMinute,
      formattedTimeSecond
    };
  }
  
  export default FormatDateTime;
  