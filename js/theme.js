$(document).ready(function () {
    $(".checkbox input[type='checkbox']").change(function () {
        if ($(this).is(':checked')) {
            $(this).next().children(".icon").fadeToggle(150);
        } else {
            $(this).next().children(".icon").fadeToggle(150);
        }
    });

    $(".radio").click(function () {
        if ($(this).children("input").is(':checked')) {
            $(".radio input[name='" + $(this).children("input").attr("name") + "']").prev().removeClass("radio_checked");
            $(this).children("span:first-child").addClass("radio_checked");
        }
    });
});