// NAVIGATION BAR FUNCTION //
     function myMenuFunction() {
    const menuBtn = document.getElementById("myNavMenu");
    menuBtn.classList.toggle("responsive");
}
    window.myMenuFunction = myMenuFunction;

// ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING //
    window.onscroll = function(){headerShadow()};

    function headerShadow() {
        const navHeader =document.getElementById("header");

        if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {

            navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
            navHeader.style.height = "70px";
            navHeader.style.lineHeight = "70px";

        } else {
            navHeader.style.boxShadow = "none"
            navHeader.style.height = "70px";
            navHeader.style.lineHeight = "70px";
        }
    }
// TYPING EFFECT //

// --SCROLL REVEAl ANIMATION-- //

// HOME //

// PROJECT BOX //

// HEADINGS //

// --SCORLL REVEAL LEFT_RIGHT ANIMATION-- //
