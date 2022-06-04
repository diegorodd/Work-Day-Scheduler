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