// Using day.js 

var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var dayName = days[dayjs().day()]

var now = dayjs().format("D MMMM YYYY");

//Displays the current day in the header.
$("#currentDay").text(dayName + ' ' + now);

// Array that contains the typical work hours.
var workHours = [ [9, "am"], [10, "am"], [11, "am"], [12, "pm"], [13, "pm"], [14, "pm"], [15, "pm"], [16, "pm"], [17, "pm"]];

// For loop to generate a row for each of the work hours (9am till 17pm).
for (let i=0 ; i < workHours.length ; i++) {

let time = workHours[i][0] + ' ' +  workHours[i][1];

var timeRow = $(
    `<div id="id-${i}" class="row">
    <div class="col-2 hour"><h4>${time}</h4></div>
    </div>`
);

// Using day.js it gets the hour.
let hour = dayjs().hour();

// Changes textarea background color depending if the time is in the  past, present or the future.
if (workHours[i][0] < hour) {
    timeRow.append(
        `<textarea class="col-8 col-md-9 past"></textarea>
        <button class="col-2 col-md-1 saveBtn">
            <i class="fas fa-save" ></i>
        </button>`
    )
};

if (workHours[i][0] === hour) {
    timeRow.append(
        `<textarea class="col-8 col-md-9 present"></textarea>
        <button class="col-2 col-md-1 saveBtn">
            <i class="fas fa-save"></i>
        </button>`
    )
};

if (workHours[i][0] > hour) {
    timeRow.append(
        `<textarea class="col-8 col-md-9 future"></textarea>
        <button class="col-2 col-md-1 saveBtn">
            <i class="fas fa-save"></i>
        </button>`
    )
};

var timeBlocks = $(".container");
timeBlocks.append(timeRow);
}

// Empty tasks object
var tasks = {};

// Function to create a tasks object on localStorage and adds the tasks object.
function storeTasks() {
  localStorage.setItem("userTasks", JSON.stringify(tasks));
}

// Function to get JSON from localStorage and convert it to an object. 
function displayStorage() {
  var storage = JSON.parse(localStorage.getItem("userTasks"));

// For loop to update the local object and display it in the textarea.
  for (var userInput in storage) {
    tasks[userInput] = storage[userInput];
    $(`#${userInput}`).children("textarea").text(`${storage[userInput]}`);
  }
}

displayStorage();

$('.saveBtn').on('click', function () {
  // Gets the parent id from the row that the save button is clicked. 
  var rowId = $(this).parent().attr("id");
  // Gets the text inputted in the row that the save button is clicked.
  var textareaInput = $(`#${rowId}`).children("textarea").val();
  // Updates the tasks object with the rowId as the key and textareaInput as a value.
  tasks[rowId] = textareaInput;

  storeTasks();
});

$('#clearBtn').on('click', function () {
    // Clears the local storage.
    localStorage.clear();
    // Reloads the page.
    location.reload();
})
