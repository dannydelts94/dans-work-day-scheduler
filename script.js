
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
    $(document).ready(function() {
        $('.saveBtn').on('click', function () {
            var meetingBlock = $(this).siblings('.description').val();
            var meetingTime = $(this).parent().attr('id');
            localStorage.setItem(meetingTime,meetingBlock);
        }
        )
    }
    )
  /* calls the function that color codes the time slots */
    colorCode();
  /* code to display the current date in the header of the page. */
    var timeNow = dayjs().format('dddd, MMMM DD');
    $('#currentDay').text(timeNow);
