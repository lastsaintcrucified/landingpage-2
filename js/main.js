$(document).ready(function(){
	$("#owl_im1").mouseenter(function(){
		$("#owl_h1").fadeIn("fast");
	
	});
	$("#owl_im1").mouseleave(function(){
		$("#owl_h1").fadeOut("fast");
		
	});
	$("#owl_im2").mouseenter(function(){
		$("#owl_h2").fadeIn("fast");
	
	});
	$("#owl_im2").mouseleave(function(){
		$("#owl_h2").fadeOut("fast");
	
	});
	$("#owl_im3").mouseenter(function(){
		$("#owl_h3").fadeIn("fast");
		
	});
	$("#owl_im3").mouseleave(function(){
		$("#owl_h3").fadeOut("fast");
	
	});
	$("#owl_im4").mouseenter(function(){
		$("#owl_h4").fadeIn("fast");
		
	});
	$("#owl_im4").mouseleave(function(){
		$("#owl_h4").fadeOut("fast");
		
	});
	$("#owl_im5").mouseenter(function(){
		$("#owl_h5").fadeIn("fast");
		
	});
	$("#owl_im5").mouseleave(function(){
		$("#owl_h5").fadeOut("fast");
	
	});
	$("#owl_im6").mouseenter(function(){
		$("#owl_h6").fadeIn("fast");
	
	});
	$("#owl_im6").mouseleave(function(){
		$("#owl_h6").fadeOut("fast");
	
	});
	$("#owl_im7").mouseenter(function(){
		$("#owl_h7").fadeIn("fast");
	
	});
	$("#owl_im7").mouseleave(function(){
		$("#owl_h7").fadeOut("fast");
		
	});
	$("#owl_im8").mouseenter(function(){
		$("#owl_h8").fadeIn("fast");
	
	});
	$("#owl_im8").mouseleave(function(){
		$("#owl_h8").fadeOut("fast");
	
	});
	
	
	

	

	  $("#owl_1").owlCarousel({
 
      autoPlay: 3000, //Set AutoPlay to 3 seconds
 
      items : 4,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3]
 
  });
	$(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 180) {
    $('.nav1').fadeIn();
   
    } else {
    $('.nav1').fadeOut();
  
    }
});	
	$(".loader").fadeOut(3000,"swing");

    
                 

})