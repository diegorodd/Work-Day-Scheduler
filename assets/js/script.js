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
        var text = $(this).siblings(".describtion").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time,text);
   })
})

$("#hour7 .description").val(localStorage.getItem("hour 7"));
$("#hour8 .description").val(localStorage.getItem("hour 8"));
$("#hour9 .description").val(localStorage.getItem("hour 9"));
$("#hour10 .description").val(localStorage.getItem("hour 10"));
$("#hour11 .description").val(localStorage.getItem("hour 11"));
$("#hour12 .description").val(localStorage.getItem("hour 12"));
$("#hour13 .description").val(localStorage.getItem("hour 13"));
$("#hour14 .description").val(localStorage.getItem("hour 14"));
$("#hour15 .description").val(localStorage.getItem("hour 15"));
$("#hour16 .description").val(localStorage.getItem("hour 16"));
