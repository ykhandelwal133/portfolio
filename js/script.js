$(window).scroll(function() {
  if ($(window).scrollTop() >0) {
      $("#header").addClass("shadow-bar");
  } else {
      $("#header").removeClass("shadow-bar");
  }
});



$(window).scroll(function(){
    var scroll = $(window).scrollTop();
    dh = $(document).height() - $(".footer").height() -$(".all-projects").height();
    dw = $(window).height();
    value = (scroll/(dh-dw))*100;
    $('#header-progress').css('width', value + '%');
});

$(window).scroll(function () {
  var Bottom = $(window).height() + $(window).scrollTop() >= $(document).height() - $(".footer").height() -$(".all-projects").height()  ;
if(Bottom )
{
$('#header-progress').hide();
}
else{
  $('#header-progress').show();
}
});

$(function() {
    AOS.init({duration:1200,
    });
  });

  