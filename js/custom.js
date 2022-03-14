$(function () {
    $(window).on("scroll", function () {
        if ($(window).scrollTop() > 100) {
            $("nav").addClass("active");
        } else {
            $("nav").removeClass("active");
        }
    });
});

$(document).ready(function() {
    $(".heading .single-heading").on("click", function() {
        var _this = $(this);

        $(".single-heading").removeClass("active");
        _this.addClass("active");

        var tagid = _this.data("tag");

        $(".single-content").removeClass("active");
        $('#'+tagid).addClass("active");
    })
})
$(document).ready(function(){
    $('#open-menu').click(function(){
       $('#myLinks').slideToggle();
    });
     });