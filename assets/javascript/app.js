$(".btn").click(function() {

    let section = $(this).attr("data-name");
    console.log(section);
    $('html, body').animate({
        scrollTop: $("."+section+"Sect").offset().top},
        1000);
});

// (function() {
//     var menu = document.querySelector('ul'),
//         menulink = document.querySelector('.hamburger');
    
//     menulink.addEventListener('click', function(e) {
//         menu.classList.toggle('active');
//         e.preventDefault();
//     });
// })();

