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

    $(".navsearch").click(function () {
        if (!$(this).hasClass("active")) {
            $(this).addClass("active");
            console.log("ok");
        }
    });

    $(".navsearch input").focusout(function () {
        if ($(this).val() == "")
            $(this).parent().parent().removeClass("active");
    });

    $(".header .dropdown").click(function (e) {
        $(this).toggleClass("active");
        $(this).children("ul.menu").fadeToggle(300);
    });

    $(".switch").click(function (e) {
        e.preventDefault();
        $(this).toggleClass("active");
        if ($(this).hasClass("active"))
            $(this).children("input").prop('checked', true);
        else
            $(this).children("input").prop('checked', false);
    });

    $("[data-width]").bind("update", function () {
        if ($(this).attr("data-width") == "100%")
            $(this).css("width", "102%");
        else {
            $(this).css("width", $(this).attr("data-width"));
        }
        $(this).next().html($(this).attr("data-width"));
    });
    $("[data-width]").trigger("update");
});