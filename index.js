// Define a variable 'width' to store the width of the window using jQuery.
var width = $(window).width();

// Add an event listener to the window scroll event.
window.onscroll = function() {
    // Check if the width of the window is greater than or equal to 1000 pixels.
    if (width >= 1000) {
        // Check if the vertical scroll position of the document body or document element is greater than 80 pixels.
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            // Change CSS properties of the header when scrolled down.
            $("#header").css("background", "#fff");
            $("#header").css("color", "#000");
            $("#header").css("box-shadow", "0px 0px 20px rgba(0,0,0,0.09)");
            $("#header").css("padding", "4vh 4vw");

            // Add hover effect to navigation links.
            $("#navigation a").hover(function() {
                $(this).css("border-bottom", "2px solid rgb(255, 44, 90)");
            }, function() {
                $(this).css("border-bottom", "2px solid transparent");
            });
        } else {
            // Reset CSS properties of the header when not scrolled down.
            $("#header").css("background", "transparent");
            $("#header").css("color", "#fff");
            $("#header").css("box-shadow", "0px 0px 0px rgba(0,0,0,0)");
            $("#header").css("padding", "6vh 4vw");

            // Reset hover effect of navigation links.
            $("#navigation a").hover(function() {
                $(this).css("border-bottom", "2px solid #fff");
            }, function() {
                $(this).css("border-bottom", "2px solid transparent");
            });
        }
    }
}

// Define a function 'magnify' to display a magnified image.
function magnify(imglink) {
    $("#img_here").css("background", `url('${imglink}') center center`);
    $("#magnify").css("display", "flex");
    $("#magnify").addClass("animated fadeIn");
    setTimeout(function() {
        $("#magnify").removeClass("animated fadeIn");
    }, 800);
}

// Define a function 'closemagnify' to close the magnified image display.
function closemagnify() {
    $("#magnify").addClass("animated fadeOut");
    setTimeout(function() {
        $("#magnify").css("display", "none");
        $("#magnify").removeClass("animated fadeOut");
        $("#img_here").css("background", `url('') center center`);
    }, 800);
}

// Set a timeout to hide the loading element after a certain duration.
setTimeout(function() {
    $("#loading").addClass("animated fadeOut");
    setTimeout(function() {
        $("#loading").removeClass("animated fadeOut");
        $("#loading").css("display", "none");
    }, 800);
}, 1650);

// Add a click event listener to all <a> elements to enable smooth scrolling to anchor links.
$(document).ready(function() {
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('body,html').animate({
                scrollTop: $(hash).offset().top
            }, 1800, function() {
                window.location.hash = hash;
            });
        }
    });
});
