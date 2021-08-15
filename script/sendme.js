//update this with your js_form selector
var form_id_js = "javascript_form";

var data_js = {
    "access_token": "wuvjxuh4ctkw1kusgdvos67e" // sent after you sign up
};

function js_onSuccess() {
    // remove this to avoid redirect
    window.location = window.location.pathname + "?message=Email+Successfully+Sent%21&isError=0";
}

function js_onError(error) {
    // remove this to avoid redirect
    window.location = window.location.pathname + "?message=Email+could+not+be+sent.&isError=1";
}

var sendButton = document.getElementById("js_send");
var thanksMsg = document.getElementById("comp-ki310uqw");

function js_send() {
    alert("Hello ji")
    sendButton.value = 'Sending…';
    sendButton.disabled = true;
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (request.readyState == 4 && request.status == 200) {
            thanksMsg.style.visibility = "visible";
            sendButton.value = 'Thanks, Message submitted successfully !!';
            // js_onSuccess();
        } else if (request.readyState == 4) {
            alert(request.response+"\n\n Please retry again");
            sendButton.value = 'Retry sending';
            thanksMsg.style.visibility = "visible";
            sendButton.disabled = false;
            // js_onError(request.response);
        }
    };

    // var subject = document.querySelector("#" + form_id_js + " [name='subject']").value;
    // var message = document.querySelector("#" + form_id_js + " [name='text']").value;
    data_js['subject'] = "subject";
    data_js['text'] = "message";
    var params = toParams(data_js);
    request.open("POST", "https://postmail.invotes.com/send", true);
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    request.send(params);
    return false;
}

sendButton.onclick = js_send;

function toParams(data_js) {
    var form_data = [];
    for (var key in data_js) {
        form_data.push(encodeURIComponent(key) + "=" + encodeURIComponent(data_js[key]));
    }

    return form_data.join("&");
}

var js_form = document.getElementById(form_id_js);
js_form.addEventListener("submit", function (e) {
    e.preventDefault();
});

// //update this with your $form selector
// var form_id = "jquery_form";
//
// var data = {
//     "access_token": "{your access token}" // sent after you sign up
// };
//
// function onSuccess() {
//     // remove this to avoid redirect
//     window.location = window.location.pathname + "?message=Email+Successfully+Sent%21&isError=0";
// }
//
// function onError(error) {
//     // remove this to avoid redirect
//     window.location = window.location.pathname + "?message=Email+could+not+be+sent.&isError=1";
// }
//
// var sendButton = $("#" + form_id + " [name='send']");
//
// function send() {
//     sendButton.val('Sending…');
//     sendButton.prop('disabled',true);
//
//     var subject = $("#" + form_id + " [name='subject']").val();
//     var message = $("#" + form_id + " [name='text']").val();
//     data['subject'] = subject;
//     data['text'] = message;
//
//     $.post('https://postmail.invotes.com/send',
//         data,
//         onSuccess
//     ).fail(onError);
//
//     return false;
// }
//
// sendButton.on('click', send);
//
// var $form = $("#" + form_id);
// $form.submit(function( event ) {
//     event.preventDefault();
// });