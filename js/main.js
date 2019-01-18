
$(document).ready(function(){
  $('.comments__slider').slick({
      infinite: true,
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1
  });
   $("#MyBtn").click(function() {
    //открыть модальное окно с id="myModal"
    $("#myModal").modal('show');
  });
});

