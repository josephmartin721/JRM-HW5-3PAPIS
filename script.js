$(document).ready(function () {
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a")); 
    
    $(".btn").on("click", function () {
       
        console.log(this);
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, text);
    })
    $("#time8 .description").val(localStorage.getItem("time8"));
    $("#time9 .description").val(localStorage.getItem("time9"));
    $("#time10 .description").val(localStorage.getItem("time10"));
    $("#time11 .description").val(localStorage.getItem("time11"));
    $("#timenoon .description").val(localStorage.getItem("timenoon"));
    $("#oneafternoon .description").val(localStorage.getItem("oneafternoon"));
    $("#twoafternoon .description").val(localStorage.getItem("twoafternoon"));
    $("#threeafternoon .description").val(localStorage.getItem("threeafternoon"));
    $("#fourafternoon .description").val(localStorage.getItem("fourafternoon"));

    function hourTracker() {
        var currentHour = moment().hour();

        $(".time-block").each(function () {
            var blockHour = parseInt($(this).attr("id").split("hour")[1]);
            console.log( blockHour, currentHour)

            if (blockHour < currentHour) {
                $(this).addClass("past");
                $(this).removeClass("future");
                $(this).removeClass("present");
            }
            else if (blockHour === currentHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
                $(this).removeClass("future");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        })
    }
    hourTracker();
});