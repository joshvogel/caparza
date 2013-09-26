$('#internal').alert('link clicked');

$('internal').click(function() {
	var page = $(this).attr('href');
		$('#content').load('/content/' + page + '.html');
		
		
		if(page == '#'){
		return true;
		}
		else{
		return false;
		}
	});