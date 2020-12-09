
//Scrolling menu
$(function(){
  $('a[href^="#"]:not([href="#"])').click(function(){
    $("html, body").animate({
      //IMPORTANT: One extra pixel to pass the line!
      scrollTop: $($(this).attr("href")).position().top + 1
    }, 500);
    return false;
  });
});

//Run function:
$(document).ready(function(){

});


//Skill lines


$(document).ready(function(){
	$("#skillbar").mouseenter(function(){
		$('.skill_row_percent_view').each(function(){
			thisVal = $(this).text();
			$(this).parent('.skill_row_percent').animate({width:thisVal}, 2000)
		});
	});
$(".button").click(function(){
	$(".hidedText").slideToggle(1000);
});
});