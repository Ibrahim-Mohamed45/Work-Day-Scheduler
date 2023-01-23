var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var dayName = days[dayjs().day()]

var now = dayjs().format("D MMMM YYYY");

$("#currentDay").text(dayName + ' ' + now);

var workHours = ["9 am","10 am", "11 am", "12 pm", "13 pm", "14 pm", "15 pm","16 pm", "17 pm"];

for (let i=0 ; i < workHours.length ; i++) {

let time = workHours[i];

var timeRow = $(
    `<div class="row">
    <div class="col-2 hour"><h4> ${time}</h4></div>
    <textarea class="col-8 "></textarea>
    <button class="col-2 saveBtn">
        <i class="fas fa-save"></i>
    </button>
    </div>`
);

var timeBlocks = $(".container");
timeBlocks.append(timeRow);

}
