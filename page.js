$("nav ul li").click(function(){
    var xcoord = $(this).data("xcoord");
    
    $("nav div").stop().animate({marginLeft:xcoord}, 500, "easeInOutExpo");
    $(this).addClass("active");
    $("nav ul li").not(this).removeClass("active");
    
  });

  // Startup Scripts
$(document).ready(function()
{
	$('.hero').css('height', ($(window).height() - $('header').outerHeight()) + 'px'); // Set hero to fill page height

	$('#scroll-hero').click(function()
	{
		$('html,body').animate({scrollTop: $("#hero-bloc").height()}, 'slow');
	});
});


// Window resize 
$(window).resize(function()
{
	$('.hero').css('height', ($(window).height() - $('header').outerHeight()) + 'px'); // Refresh hero height  	
}); 