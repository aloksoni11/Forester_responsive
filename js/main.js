window.onscroll = function () {
    myFunction()
};

function myFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("navbar").classList.add("navview");
        document.getElementById("menu1").classList.add("text-dark");
        var x = document.getElementsByClassName("menu-a");
        for (var i = 0; i < x.length; i++) {
            x[i].classList.add("text-dark");
        }
    }
    else {
        document.getElementById("navbar").classList.remove("navview");
        document.getElementById("menu1").classList.remove("text-dark");
        var x = document.getElementsByClassName("menu-a");
        for (var i = 0; i < x.length; i++) {
            x[i].classList.remove("text-dark");
        }
    }
}
$(document).ready(function () {
    $("#lightgallery").lightGallery();
});

$(window).scroll(startCounter);
function startCounter() {
    if ($(window).scrollTop() > 3500) {
        $(window).off("scroll", startCounter);
        $('.count').each(function () {
            var $this = $(this);
            jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
                duration: 2000,
                easing: 'swing',
                step: function () {
                    $this.text(Math.ceil(this.Counter));
                }
            });
        });
    }
}