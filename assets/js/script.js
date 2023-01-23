var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var dayName = days[dayjs().day()]

var now = dayjs().format("D MMMM YYYY");

$("#currentDay").text(dayName + ' ' + now);
