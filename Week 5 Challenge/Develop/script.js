
$(function () {
  const saveButtons = document.querySelectorAll('.saveBtn');
  saveButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const userInput = button.parentElement.querySelector('textarea').value;
      const timeBlockId = button.parentElement.id;
      localStorage.setItem(timeBlockId, userInput);
    });
  });
  var currentHour = dayjs().hour();
  $(".time-block").each(function () {
    var blockHour = parseInt($(this).attr("id").split("-")[1]);
    if (blockHour < currentHour) {
      $(this).addClass("past");
    } else if (blockHour === currentHour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
    console.log(blockHour);
  });
  const hourElement = document.querySelectorAll('.time-block');
  hourElement.forEach(hourElement => {
    const hourId = hourElement.id;
    const savedInput = localStorage.getItem(hourId);
    if (savedInput) {
      hourElement.querySelector('textarea').value = savedInput;
    }
  });
  
});

let now = new Date();
let dateTimeString = now.toLocaleString();
document.getElementById("currentDateTime").textContent = dateTimeString;
