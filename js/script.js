$(document).ready(function(){
	$('.header-burder').click(function(event){
		$('.burder,.header-burder,.header-menu,.header-row,.header-logo_img,.header-wrap,.header-questions,.header-questions-cloud').toggleClass('active');
		$('body').toggleClass('lock')

	}); 
	$('.footer-burder').click(function(event){
		$('.burder,.header-burder,.header-menu,.header-row,.header-logo_img,.header-wrap,.header-questions,.header-questions-cloud').toggleClass('active');
		$('body').toggleClass('lock')

	}); 
	$('.the_bell').click(function(event){
		$('.cloud').toggleClass('active');
		

	}); 
	$('.cloud-cross').click(function(event){
		$('.cloud').toggleClass('active');
		

	}); 
});