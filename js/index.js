$('.menu-section').affix({
	offset: {
		top: $('div.navbar').height()
	}
});

var scheduleLink = $("#scheduleLink");
$(scheduleLink).hover(
	function() {
		$(scheduleContent).slideDown(350);
	}, 
	function() {
		$(scheduleContent).slideUp(350);
	}
);