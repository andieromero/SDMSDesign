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


var width = $(window).width();
console.log(width);

if (width < (768)) {
	$('.dropdown-toggle').prop('disabled', true);
	$('.dropdown-toggle').attr("href", "schedule.html");
}

// $.getJSON("json/content.json", function(data) {
// 	console.log(terms);
// 	var terms = [];
// 	$.each( data, function (header, content) {
// 		terms.push("<li id='" + header + "'>" + content + "</li>")
// 	});

// });

// var text = $.getJSON("json/content.json")

