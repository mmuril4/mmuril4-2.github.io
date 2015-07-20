$("nav a").on("click", function (event) {
	event.preventDefault();
	var href = $(this).attr('href');
	$('html, body').animate({
	    scrollTop: $(href).offset().top
	 }, 1000);
});

$(".header a").on("click", function (event) {
	event.preventDefault();
	var href = $(this).attr('href');
	$('html, body').animate({
	    scrollTop: $(href).offset().top
	 }, 1000);
});

// when user clicks on .hamburger
$('.hamburger').on('click', function () {
	//slide toggle #menu
$('#menu').toggleClass('open');

});

// When page loads, fade out all articles
$(".panel").hide();
// Fade in the first article
$(".panel").first().show();

$(".container3 li").on("click", function () {
	// Remove active class from all li's
	$("li").removeClass("active");
	// Fade out all articles
	$(".panel").hide();
	// Fade in the corresponding article
	var relatedArticle = $(this).children('a').data("panel");
	console.log("#" + relatedArticle);
	$("#" + relatedArticle).fadeIn(350);
	// Give that li the active class
	$(this).addclass("active");

});

// when the user clicks on the .trigger button
$('.trigger').on('click', function () {
	// add the .show-modal class to the .modal
	$('.modal').addClass('show-modal');
});

// when the user clicks on the .close-modal button
$('.icon-cross').on('click', function () {
	// remove the .show-modal class to the .modal
	$('.modal').removeClass('show-modal');
});

// Find out the distance from the top of the .main-nav to the top of the page
var stickyNavTop = $('header').offset().top;


// // When the user scrolls
// $(window).on('scroll', function() {
// 	var scrollTop = $(window).scrollTop();

// 	// If the distance from the top of the page to where the user has scrolled is >= the distance from the stickyNavTop
//   if( scrollTop >= stickyNavTop ) {

//   	// Add the class 'scrolled' to fix the nav to the top
//     $('header').addClass('scrolled');

//   // Otherwise
//   } else {
//   	// Remove the class 'scrolled' from the .main-nav
//     $('header').removeClass('scrolled');
//   }
// });