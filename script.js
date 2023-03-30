
/* code that sets a color to the time slot depending on which hour of the day it is */
function colorCode() {
    var currentHour = dayjs().hour();

    $('.time-block').each(function () {
        var timeFrame = parseInt($(this).attr('id').split('hour')[1]);
        if (timeFrame === currentHour) {
            $(this).removeClass('past');
            $(this).removeClass('future');
            $(this).addClass('present');
        }
        else if (timeFrame > currentHour) {
            $(this).addclass('future');
            $(this).removeClass('past');
            $(this).removeClass('present');
        }
        else {
            $(this).addClass('past');
            $(this).removeClass('present');
            $(this).removeClass('future');
        }
    })
}
/* listens for user to click save button and saves their inputs to local storage */
$(document).ready(function () {
    $('.saveBtn').on('click', function () {
        var meetingBlock = $(this).siblings('.description').val();
        var meetingTime = $(this).parent().attr('id');
        localStorage.setItem(meetingTime, meetingBlock);
    }
    )
}
)
/* retrives the users inputs saved to local storage and displays to corresponding time frame */
$('#hour-9 .description').val(localStorage.getItem('hour-9'));
$('#hour-10 .description').val(localStorage.getItem('hour-10'));
$('#hour-11 .description').val(localStorage.getItem('hour-11'));
$('#hour-12 .description').val(localStorage.getItem('hour-12'));
$('#hour-13 .description').val(localStorage.getItem('hour-13'));
$('#hour-14 .description').val(localStorage.getItem('hour-14'));
$('#hour-15 .description').val(localStorage.getItem('hour-15'));
$('#hour-16 .description').val(localStorage.getItem('hour-16'));
$('#hour-17 .description').val(localStorage.getItem('hour-17'));
/* calls the function that color codes the time slots */
colorCode();
/* code to display the current date in the header of the page. */
var timeNow = dayjs().format('dddd, MMMM DD');
$('#currentDay').text(timeNow);
