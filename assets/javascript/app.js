$(".nav-item").click(function() {

//js for auto-scrolling
let section = $(this).attr("data-name");
console.log(section);
$('html, body').animate({
    scrollTop: $("#"+section+"Sect").offset().top},
    1000);
});


