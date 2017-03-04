$(document).ready(function() {
	/*
	 *	GENERAL
	 */
	 	// LINKS WITHOUT EVENT
		$('body').on('click', '.no-action', function(event) {
			event.preventDefault();
		});

		// COPY CODE
		var clipboard = new Clipboard('.btn-clipboard');

		clipboard.on('success', function(event) {
			$(event.trigger).tooltip('show');

			$(event.trigger).on('mouseover', function() {
				$(this).tooltip('hide');
			});

			event.clearSelection();
		});

	/*
	 *	FORMULARIOS
	 */
		$('body').on('change', '.inputfile', function(event) {
			var fileName = event.target.value.split('\\').pop();

			if(fileName) {
				$('.filename').text(fileName);
			}
		});

	/*
	 *	PANELES
	 */
		$('#myTabs a').on('click', function (e) {
			e.preventDefault();

			$(this).tab('show');
		});

	/*
	 * CAROUSEL
	 */

	 $('#myCarousel').carousel({
		interval:   4000
	});
	
	var clickEvent = false;
	$('#myCarousel').on('click', '.nav a', function() {
			clickEvent = true;
			$('.nav li').removeClass('active');
			$(this).parent().addClass('active');		
	}).on('slid.bs.carousel', function(e) {
		if(!clickEvent) {
			var count = $('.nav').children().length -1;
			var current = $('.nav li.active');
			current.removeClass('active').next().addClass('active');
			var id = parseInt(current.data('slide-to'));
			if(count == id) {
				$('.nav li').first().addClass('active');	
			}
		}
		clickEvent = false;
	});

	/*
	 * TOOLTIP
	 */

	  $('[data-toggle="tooltip"]').tooltip();

	 /*
	 * POPOVER
	 */

	  $('[data-toggle="popover"]').popover();

	  
});
