var currentday = moment();
$('#currentDay').text(currentday.format('dddd, MMMM Do'));
$('.time-block').addClass('future');

var timeVar = {
    "9AM": 9,
    "10AM": 10,
    "11AM": 11,
    "12PM": 12,
    "1PM": 13,
    "2PM": 14,
    "3PM": 15,
    "4PM": 16,
    "5PM": 17,
}

var currentHour = moment().format('HH');

$(".time-block").each(function() {
   var test = timeVar[$(this).children().first().text()]
   if ( test < currentHour) {
    $(this).removeClass('future');
    $(this).addClass('past');
} else if (test == currentHour) {
    $(this).removeClass('future');
    $(this).addClass('present');
} else {
    $(this).addClass('future');
}});

var id = [];

$('.saveBtn').click(function(event) {
   event.preventDefault();
   var userTyped = $(this).siblings().eq(1).val();
   id = $(this).parent().attr('id');
   localStorage.setItem(id, userTyped);
   console.log(typeof userTyped);
   alert(localStorage.getItem(id) + " is saved!");
});   


$('#hour-9 .description').val(localStorage.getItem("hour-9"));
$('#hour-10 .description').val(localStorage.getItem("hour-10"));
$('#hour-11 .description').val(localStorage.getItem("hour-11"));
$('#hour-12 .description').val(localStorage.getItem("hour-12"));
$('#hour-13 .description').val(localStorage.getItem("hour-13"));
$('#hour-14 .description').val(localStorage.getItem("hour-14"));
$('#hour-15 .description').val(localStorage.getItem("hour-15"));
$('#hour-16 .description').val(localStorage.getItem("hour-16"));
$('#hour-17 .description').val(localStorage.getItem("hour-17"));




