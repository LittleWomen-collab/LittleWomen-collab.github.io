var tag;
var tagContent;
var appendElement;

function render_div(aE, idv){
    appendElement = document.getElementById(aE);
    tag = document.createElement("div");

    tagContent = document.createAttribute("id");
    tagContent.value = idv;
    tag.setAttributeNode(tagContent);

    appendElement.appendChild(tag);
}

function render_image(aE, idv, locv){
    appendElement = document.getElementById(aE);
    tag = document.createElement("img");

    tagContent = document.createAttribute("id");
    tagContent.value = idv;
    tag.setAttributeNode(tagContent);

    tagContent = document.createAttribute("src");
    tagContent.value = locv;
    tag.setAttributeNode(tagContent);

    appendElement.appendChild(tag);
}

function render_a(aE, idv, hv, ocv){
    appendElement = document.getElementById(aE);
    tag = document.createElement("a");

    tagContent = document.createAttribute("id");
    tagContent.value = idv;
    tag.setAttributeNode(tagContent);

    tagContent = document.createAttribute("href");
    tagContent.value = hv;
    tag.setAttributeNode(tagContent);

    tagContent = document.createAttribute("onclick");
    tagContent.value = ocv;
    tag.setAttributeNode(tagContent);

    appendElement.appendChild(tag);
}

function render_remover(aE){
    document.getElementById(aE).innerHTML = "";
}

document.getElementById("main_css").setAttribute("href", "css/project.css");

render_remover("main_body");

render_div("main_body", "content-container");

render_image("content-container", "main_image", "project/main.png");

render_a("content-container", "arrow_a", "#", "cover_2()")
render_image("arrow_a", "arrow", "project/arrow.png");

render_a("content-container", "testimonials_a", "#", "testimonials()")
render_div("testimonials_a", "testimonials");

render_a("content-container", "tiktok_a", "https://www.tiktok.com/@littlewomenshow")
render_div("tiktok_a", "tiktok");

render_a("content-container", "tonaltiy_a", "#", "tonaltiy()")
render_div("tonaltiy_a", "tonaltiy");

render_a("content-container", "instagram_a", "https://www.instagram.com/littlewomenshow/")
render_div("instagram_a", "instagram");

render_a("content-container", "cast_a", "#", "cast()")
render_div("cast_a", "cast");

render_a("content-container", "characters_a", "#", "characters()")
render_div("characters_a", "characters");

render_a("content-container", "team_a", "#", "team()")
render_div("team_a", "team");

render_a("content-container", "mission_a", "#", "mission()")
render_div("mission_a", "mission");

render_a("content-container", "ci_a", "#", "ci()")
render_div("ci_a", "ci");