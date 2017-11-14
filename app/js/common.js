 $(document).ready(function() {

      $("#my-menu").mmenu({
 				"offCanvas": {
     					position: "right",
     					"zposition": "front",
 
         },

      });

   
      var API = $("#my-menu").data("mmenu");
      
      $("#my-button").click(function() {
         API.open();
      });


$('.mm-listview > li > a').hover(function(){
$(this).addClass("left-slide");
});


$('.mm-listview > li > a').on('blur',function(){
$(this).removeClass("left-slide");
});

 $('#quote-carousel').carousel({
    pause: true,
    interval: 4000,
  });


});
