const projectOverview =
    "<p className=\"font_7\" style=\"text-align:center;line-height:1.5em;font-size:17px\">\n" +
    "        Here, I have mentioned some of the projects I involved in.\n" +
    "    </p>";

var project1 = {overview: "", title: "", type: "", imgSrc: ""};
project1["overview"] = "<p className=\"font_7\" style=\"line-height:1.5em;font-size:17px\">I'm a paragraph. Click here to add\n" +
    "    your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make\n" +
    "    changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>";
project1["title"] = "Title1";
project1["type"] = "Java/Kotlin";
project1["imgSrc"] = "../../media/project-icon1.png";

var project2 = {overview: "", title: "", type: ""};
project2["overview"] = "<p className=\"font_7\" style=\"line-height:1.5em;font-size:17px\">I'm a paragraph. Click here to add\n" +
    "    your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make\n" +
    "    changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>";
project2["title"] = "Title1";
project2["type"] = "Java/Kotlin";

var project3 = {overview: "", title: "", type: ""};
project3["overview"] = "<p className=\"font_7\" style=\"line-height:1.5em;font-size:17px\">I'm a paragraph. Click here to add\n" +
    "    your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make\n" +
    "    changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>";
project3["title"] = "Title1";
project3["type"] = "Java/Kotlin";

$(document).ready(function () {
    $("#comp-k0ozsvch").html(projectOverview);
    alert("hello")
    document.getElementById("comp-k0p06mvk").firstElementChild.innerHTML = project1["title"];
    document.getElementById("comp-k0p7vjfe").firstElementChild.innerHTML = project2["title"];
    document.getElementById("comp-k0p7w3la").firstElementChild.innerHTML = project3["title"];
    // Type
    document.getElementById("comp-k0p06mvp").firstElementChild.innerHTML = project1["type"];
    document.getElementById("comp-k0p7vjfi").firstElementChild.innerHTML = project2["type"];
    document.getElementById("comp-k0p7w3le").firstElementChild.innerHTML = project3["type"];

    // Overview
    // $("#comp-k0p7qe9h").html(getImageElement(project1["imgSrc"]));
    document.getElementById("comp-k0p7qe9h").firstElementChild.firstElementChild.firstElementChild.innerHTML = getImageElement(project1["imgSrc"]);
    document.getElementById("img_comp-k0p7vjfn").firstElementChild.innerHTML = getImageElement(project1["imgSrc"]);
    document.getElementById("img_comp-k0p7w3ll").firstElementChild.innerHTML = getImageElement(project1["imgSrc"]);
});

function getImageElement(path) {
    return "" +
        "<img src=\"" +
        path +
        "\"" +
        " alt='project x' style=\"height: 100%; width: 100%" +
        "border-style: wave ;\n" +
        "  border-width: 100px;\n" +
        "  border-color: red" +
        " object-fit: contain\">";
}