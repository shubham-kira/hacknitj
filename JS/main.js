var sidebar = document.getElementById("sidenav");
var exitB = document.getElementById('exitbtn');
var menu = document.getElementById('menuB');

menu.addEventListener('click',function(e){
    // sidebar.style.display="block";
    sidebar.classList.toggle('hide-mob');
    
    menu.classList.add("hide-mob");
    e.preventDefault();
})
exitB.addEventListener('click',function(e){
    // sidebar.style.display="none";
    sidebar.classList.add('hide-mob');
    menu.classList.remove("hide-mob");
    e.preventDefault();
})

$('.count-num').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});

$('#right-arrow').click(function(){
    var curSlide = $('.connect-div.active-div');
    var nextSlide = curSlide.next();

    curSlide.removeClass('active-div');
    nextSlide.addClass('active-div');

    if(nextSlide.length==0){
        $('.connect-div').first().addClass('active-div');
    }
});
$('#left-arrow').click(function(){
    var curSlide = $('.connect-div.active-div');
    var prevSlide = curSlide.prev();

    curSlide.removeClass('active-div');
    prevSlide.addClass('active-div');

    if(prevSlide.length==0){
        $('.connect-div').last().addClass('active-div');
    }
});


