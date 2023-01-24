var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var dayName = days[dayjs().day()]

var now = dayjs().format("D MMMM YYYY");

$("#currentDay").text(dayName + ' ' + now);

var workHours = [ [9, "am"], [10, "am"], [11, "am"], [12, "pm"], [13, "pm"], [14, "pm"], [15, "pm"], [16, "pm"], [17, "pm"]];

for (let i=0 ; i < workHours.length ; i++) {

let time = workHours[i][0] + ' ' +  workHours[i][1];

var timeRow = $(
    `<div id="id-${i}" class="row">
    <div class="col-2 hour"><h4>${time}</h4></div>
    </div>`
);

let hour = dayjs().hour();

if (workHours[i][0] < hour) {
    timeRow.append(
        `<textarea class="col-9 past"></textarea>
        <button class="col-1 saveBtn">
            <i class="fas fa-save" ></i>
        </button>`
    )
};

if (workHours[i][0] === hour) {
    timeRow.append(
        `<textarea class="col-9 present"></textarea>
        <button class="col-1 saveBtn">
            <i class="fas fa-save"></i>
        </button>`
    )
};

if (workHours[i][0] > hour) {
    timeRow.append(
        `<textarea class="col-9 future"></textarea>
        <button class="col-1 saveBtn">
            <i class="fas fa-save"></i>
        </button>`
    )
};

var timeBlocks = $(".container");
timeBlocks.append(timeRow);
}

var tasks = {};

function storeTasks() {
  localStorage.setItem("userTasks", JSON.stringify(tasks));
}

function displayStorage() {
  var storage = JSON.parse(localStorage.getItem("userTasks"));

  for (var userInput in storage) {
    tasks[userInput] = storage[userInput];
    $(`#${userInput}`).children("textarea").text(`${storage[userInput]}`);
  }
}

displayStorage();

$('.saveBtn').on('click', function () {
  var rowId = $(this).parent().attr("id");
  var textareaInput = $(`#${rowId}`).children("textarea").val();

  tasks[rowId] = textareaInput;

  storeTasks();
});

$('#clearBtn').on('click', function () {
    localStorage.clear();
    location.reload();
})
