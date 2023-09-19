//scroll thing but still doesnt work yet?
$(document).ready(function() {
    var previousScroll = 0;
    $(window).scroll(function() {
        var currentScroll = $(this).scrollTop();
        if (currentScroll > previousScroll){
            $(".toppart").css("opacity", 0);
        } else {
            $(".toppart").css("opacity", 1);
        }

        previousScroll = currentScroll;
    });
});
//jaydens page
document.getElementById("page2").addEventListener("click", function() {
    window.location.href = "jaydenshp.html";
};