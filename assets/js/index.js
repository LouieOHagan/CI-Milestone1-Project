// Adds smoth scrolling transition for Home Page "Learn More" Button
// Code provided by & Full Credits to W3Schools. Tutorial found at https://www.w3schools.com/howto/howto_css_smooth_scroll.asp
// scroll-behavior: CSS element not used as it does not support Safari browser which a large amount of mobile users would utilize.

$(document).ready(function(){
        $("a").on('click', function(event) {
            if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
            } 
        });
    });