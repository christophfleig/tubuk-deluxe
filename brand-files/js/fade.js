$(document).ready(function() {
    $('.slider')
    .after('<div id="nav">')
    .cycle({
		fx:     'fade', 
        speed:   2500, 
        timeout: 10000, 
        next:   '#next2',
        prev:   '#prev2',  
        pause:   1,
        pager:  '#nav'
	});
});