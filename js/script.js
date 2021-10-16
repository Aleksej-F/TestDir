$(document).ready(function(){

	$('.header-burder').click(function(event){
		const yy = window.pageYOffset
		
		window.pageYOffset = y
		
		y = yy
		
		$('.burder,.header-burder,.header-menu,.header-row,.header-logo_img,.header-wrap,.header-shell,.header-questions,.header-questions-cloud').toggleClass('active');
		/*$('body').toggleClass('lock')*/

	}); 
	let y = 0
	$('.footer-burder').click(function(event){
		const yy = window.pageYOffset
		
		window.pageYOffset = y
		
		y = yy
		
		$('.burder,.header-burder,.header-menu,.header-row,.header-logo_img,.header-wrap,.header-shell,.header-questions,.header-questions-cloud').toggleClass('active');
		/*$('body').toggleClass('lock')*/

	}); 
	$('.the_bell').click(function(event){
		$('.cloud').toggleClass('active');
		

	}); 
	$('.cloud-cross').click(function(event){
		$('.cloud').toggleClass('active');
		

	}); 
});