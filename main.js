

$(function() {
  $(".sticker").draggable();
} );

$('.new').click(function() {

     $(".original") 
     .clone()               // ja clone(true) tad katrs #close izdzēš savu parent, bet draggable ir tikai viens
     .removeClass("original")
     .addClass(".sticker")
     .appendTo("body")
     .draggable()
      var bodyWidth = document.body.clientWidth
      var bodyHeight = document.body.clientHeight;
      var randPosX = Math.floor((Math.random()*bodyWidth));
      var randPosY = Math.floor((Math.random()*bodyHeight));
   
      $('.original').css('left', randPosX);
      $('.original').css('top', randPosY); 

  });

  $(document).ready(function(){
  $("#close").click(function(){
      x = $(".sticker")
      $(this).parent(".sticker").detach();
      $(".new").click(function(){
          $("body").prepend(x);
      });
  });
});

  $(document).ready(function() {
      $(".add").click(function(){
          $(".sticker").animate({left: '13', top: '35'});
      });
   });

