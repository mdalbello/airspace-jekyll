$(document).ready(function(){
    $(".abstract-btn").click(function(){
	 // Change icon arrow
	 var icon = $(this).find("[class*='fa-chevron']");
	 $(icon).toggleClass('fa-chevron-right fa-chevron-down');

	 // Toggle abstract
	 var h =  $(this).attr("data-toggle");
	 $(h).slideToggle(300);
    });
    $(".bibtex-btn").click(function(){
	 // Toggle bibtex
	 var h =  $(this).attr("data-toggle");
	 $(h).slideToggle(300);
    });
});

