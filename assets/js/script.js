// make sure your variables match to run
var today = moment().format('dddd,MMMM Do YYYY');
$("#currentDay").html(today);

// make an array tutor (this is for me)
var tasks = {
"7": [],
"8": [],
"9": [],
"10": [],
"11": [],
"12": [],
"13": [],
"14": [],
"15": [],
"16": [],
}

$(document).ready(function () {
    $(".saveBtn").on("click", function () {
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, text);
   })
})
// make sure to do military time for normal time
$("#hour7 .description").val(localStorage.getItem("hour7"));
$("#hour8 .description").val(localStorage.getItem("hour8"));
$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour13 .description").val(localStorage.getItem("hour13"));
$("#hour14 .description").val(localStorage.getItem("hour14"));
$("#hour15 .description").val(localStorage.getItem("hour15"));
$("#hour16 .description").val(localStorage.getItem("hour16"));
// would make a loop
function timeTracker() {
     var timeNow = moment().hour();

     $(".time-block").each(function () {
         var blockTime = parseInt($(this).attr("id").split("hour")[1]);

         if (blockTime < timeNow){
             $(this).removeClass("present");
             $(this).removeClass("future");
             $(this).addClass("past");
         }
         else if (blockTime === timeNow){
            $(this).removeClass("future");
            $(this).removeClass("past");
            $(this).addClass("present");
         }
         else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).assClass("future");
         }
     })
}    
// make sure to run the function outside the function xD
timeTracker();
