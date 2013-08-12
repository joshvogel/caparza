$(document).ready(function(){

    $.get('/status', function (data) {
        $('#status').html(data);
    });
});
