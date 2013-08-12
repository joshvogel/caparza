
 $(document).ready(function() {
	//inital
	 $('#content').load('/content/home.html');
	  $('#feed').load('/content/feed.html');
	 
	//handle click selector
	$('ul#nav li a').click(function() {
		var page = $(this).attr('href');
		$('#content').load('/content/' + page + '.html');
		
		
		if(page == '#'){
		return true;
		}
		else{
		return false;
		}
	});
	
	$('li#nav-item a').click(function() {
			$('.nav-collapse').collapse('hide');
		});
	
	
 });