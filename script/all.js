// function get_contact() {
//     var pageLink = document.getElementById("PAGES_CONTAINER");
//     // alert("hello");
//     pageLink.src = "<div>Hello Ji</div>"
//     // var client = new XMLHttpRequest();
//     // client.open('GET', 'mysite/contactview.html');
//     // client.onreadystatechange = function() {
//     //     pageLink.innerHTML = client.response;
//     // }
//     // client.send();
// }

$(document).ready(function() {
    $('#getContact').click(function(event) {
        event.preventDefault();
        // $.get("mysite/contactview.html", function(data) {
        //     var data = $(data);
        //     var elem = data.find('#tst');
        // });
        // $( "#PAGES_CONTAINER" ).load( "mysite/contactview.html" );
        $( "#PAGES_CONTAINER" ).load( "mysite/contactview.html" );
    });
    $('#getProjects').click(function(event) {
        event.preventDefault();
        $( "#PAGES_CONTAINER" ).load( "mysite/projectsview.html" );
    });
    $('#getResume').click(function(event) {
        event.preventDefault();
        $( "#PAGES_CONTAINER" ).load( "mysite/resumeview.html" );
    });
});