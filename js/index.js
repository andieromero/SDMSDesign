$('.menu-section').affix({
	offset: {
		top: $('div.navbar').height()
	}
});

// Dropdown Menu Fade    
jQuery(document).ready(function(){
    $(".dropdown").hover(
        function() { $('.dropdown-menu', this).fadeIn("fast");
        },
        function() { $('.dropdown-menu', this).fadeOut("fast");
    });
});

$.getJSON("json/content.json", function(data) {
	console.log(terms);
	var terms = [];
	$.each( data, function (header, content) {
		terms.push("<li id='" + header + "'>" + content + "</li>")
	});

});

var text = $.getJSON("json/content.json")

