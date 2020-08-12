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

function render_form(aE, idv, av, osv){
    appendElement = document.getElementById(aE);
    tag = document.createElement("form");

    tagContent = document.createAttribute("id");
    tagContent.value = idv;
    tag.setAttributeNode(tagContent);

    tagContent = document.createAttribute("action");
    tagContent.value = av;
    tag.setAttributeNode(tagContent);

    tagContent = document.createAttribute("onsubmit");
    tagContent.value = osv;
    tag.setAttributeNode(tagContent);

    appendElement.appendChild(tag);
}

function render_input(aE, tv, vv, nv, idv){
    appendElement = document.getElementById(aE);
    tag = document.createElement("input");

    tagContent = document.createAttribute("type");
    tagContent.value = tv;
    tag.setAttributeNode(tagContent);

    tagContent = document.createAttribute("value");
    tagContent.value = vv;
    tag.setAttributeNode(tagContent);

    tagContent = document.createAttribute("name");
    tagContent.value = nv;
    tag.setAttributeNode(tagContent);

    tagContent = document.createAttribute("id");
    tagContent.value = idv;
    tag.setAttributeNode(tagContent);

    appendElement.appendChild(tag);
}

function render_p(aE, idv, tv){
    appendElement = document.getElementById(aE);
    tag = document.createElement("div");

    tagContent = document.createAttribute("id");
    tagContent.value = idv;
    tag.setAttributeNode(tagContent);

    tag.innerHTML = tv;

    appendElement.appendChild(tag);
}

function render_section(aE, idv, cv){
    appendElement = document.getElementById(aE);
    tag = document.createElement("section");

    tagContent = document.createAttribute("id");
    tagContent.value = idv;
    tag.setAttributeNode(tagContent);

    tagContent = document.createAttribute("class");
    tagContent.value = cv;
    tag.setAttributeNode(tagContent);

    appendElement.appendChild(tag);
}

function render_remover(aE){
    document.getElementById(aE).innerHTML = "";
}

function onScroll() {
    var scrollBarPosition = window.pageYOffset | document.body.scrollTop;
}

function addClass(elemOne, elemTwo, margin) {
    elemOne.classList.add('fixed');
    elemTwo.style.marginTop = margin + 'px';
}

function removeClass(elemOne, elemTwo) {
    elemOne.classList.remove('fixed');
    elemTwo.style.marginTop = '0px';
}

function cover_1(){
    document.getElementById("main_css").setAttribute("href", "css/cover_1.css");

    render_a("main_body", "_bg__cover_1_link", "#", "cover_2()");
    render_div("_bg__cover_1_link", "content-container")
    render_image("content-container", "background", "cover_1/background.png");
    render_image("content-container", "logo", "cover_1/logo.png");
    render_image("content-container", "Kiran_Kumar", "cover_1/Kiran_Kumar.png");
    render_image("content-container", "Kaylyn_Slevin", "cover_1/Kaylyn_Slevin.png");
    render_image("content-container", "Cali_Sheldon", "cover_1/Cali_Sheldon.png");
    render_image("content-container",  "Dylan_Weand", "cover_1/Dylan_Weand.png");
    render_image("content-container", "Ariana_Davis", "cover_1/Ariana_Davis.png");
    render_form("main_body", "main_form", "", "cover_2()");
    render_input("main_form", "button", "", "goTo404", "bruh_submit");
    
    setTimeout(() => {
        document.getElementById("bruh_submit").click();
    }, 3000);

    document.getElementById("bruh_submit").onclick = function(){
        cover_2();
    }

    document.getElementById("_bg__cover_1_link").onclick = function(){
        cover_2();
    }
};

function cover_2(){
    render_remover("main_body");

    document.getElementById("main_css").setAttribute("href", "css/cover_2.css");

    render_div("main_body", "content-container")
    render_div("content-container", "_bg__cover_2")
    render_image("content-container", "background", "cover_2/background.png");
    render_image("content-container", "logo", "cover_2/logo.png");

    render_a("content-container", "kiran_a", "#", "kiran_1()");
    render_div("kiran_a", "kiran_div");
    render_image("kiran_div", "kiran", "cover_2/kiran.png");
    render_a("content-container", "cali_a", "#", "cali()");
    render_div("cali_a", "cali_div");
    render_image("cali_div", "cali", "cover_2/cali.png");

    render_a("content-container", "dylan_a", "#", "dylan()");
    render_div("dylan_a", "dylan_div");
    render_image("dylan_div", "dylan", "cover_2/dylan.png");

    render_a("content-container", "ariana_a", "#", "ariana()");
    render_div("ariana_a", "ariana_div");
    render_image("ariana_div", "ariana", "cover_2/ariana.png");

    render_a("content-container", "scarlett_a", "#", "kaylyn()");
    render_div("scarlett_a", "scarlett_div");
    render_image("scarlett_div", "scarlett", "cover_2/scarlett.png");
}

function kiran_1(){
    render_remover("main_body");

    document.getElementById("main_css").setAttribute("href", "css/kiran_1.css");

    render_div("main_body", "content-container");
    render_image("content-container", "background", "kiran_1/background.png")

    render_a("content-container", "arrow_link", "#", "cover_2()");
    render_image("arrow_link", "arrow", "kiran_1/arrow.png");

    render_image("content-container", "kiran", "kiran_1/kiran.png");

    render_div("content-container", "text_1");
    render_p("text_1", "text_awttalamy", "\"Anyeway, want to take a <br/> look at my project?\"");

    render_div("content-container", "text_2");
    render_p("text_2", "text_ohtimmmm", "\"Oh hey there! I'm M-M-Maya.\"");

    render_div("content-container", "text_3");
    render_p("text_3", "text_iydkmjcomhh", "\"If you don't know me just click me ha ha!\"");

    render_div("content-container", "text_4");
    render_p("text_4", "text_wtstpCott", "\"Want to see the project? Click on that then!\"");

    render_a("content-container", "top_maya_kiran_a", "#", "kiran_2()");
    render_div("top_maya_kiran_a", "top_maya_kiran");

    render_a("content-container", "middle_maya_kiran_a", "#", "project()");
    render_div("middle_maya_kiran_a", "middle_maya_kiran");

    render_a("content-container", "bottom_maya_kiran_a", "#", "kiran_2()");
    render_div("bottom_maya_kiran_a", "bottom_maya_kiran");
}

function dylan(){
    render_remover("main_body");

    document.getElementById("main_css").setAttribute("href", "css/dylan.css");

    render_div("main_body", "content-container");


    render_section("content-container", "top_section", "item item-1");

    render_image("top_section", "bg_2", "dylan/bg_2.png");

    render_image("top_section", "meet", "dylan/meet.png");

    render_image("top_section", "dylan", "dylan/dylan.png");

    render_div("top_section", "personality_spotlight");
    render_p("personality_spotlight", "personality_spotlight_text", "Personality Spotlight");

    render_div("top_section", "hiysdysmi");
    render_p("hiysdysmi", "hiysdysmi_text", "\"Heyo, if you scroll down, you'll see my ID!\"");

    render_a("top_section", "arrow_a", "#", "cover_2()");
    render_image("arrow_a", "arrow", "dylan/arrow.png");


    render_section("content-container", "bottom_section", "item item-2");

    render_image("bottom_section", "bg_1", "dylan/bg_1.png");

    render_image("bottom_section", "id", "dylan/id.png")

    render_image("bottom_section", "id_photo", "dylan/id_photo.png");


    window.addEventListener('scroll', onScroll, false);

    var sectionOne = document.querySelector('.item-1');
    var sectionTwo = document.querySelector('.item-2');

    var SectionOneHeight = getComputedStyle(sectionOne).height.split('px')[0];
    var SectionTwoHeight = getComputedStyle(sectionTwo).height.split('px')[0];

    var checkPointOne = parseFloat(SectionOneHeight);
}

function kaylyn(){
    render_remover("main_body");

    document.getElementById("main_css").setAttribute("href", "css/kaylyn.css");

    render_div("main_body", "content-container");

    render_section("content-container", "top_section", "item item-1");

    render_image("top_section", "bg_2", "kaylyn/bg_2.png");

    render_image("top_section", "meet", "kaylyn/meet.png");

    render_image("top_section", "kaylyn", "kaylyn/kaylyn.png");

    render_div("top_section", "personality_spotlight");
    render_p("personality_spotlight", "personality_spotlight_text", "Personality Spotlight");

    render_div("top_section", "hiysdysmi");
    render_p("hiysdysmi", "hiysdysmi_text", "\"Umm, if you want to see my student ID so bad, maybe you should just scroll down.\"");

    render_a("top_section", "arrow_a", "#", "cover_2()");
    render_image("arrow_a", "arrow", "kaylyn/arrow.png");


    render_section("content-container", "bottom_section", "item item-2");

    render_image("bottom_section", "bg_1", "kaylyn/bg_1.png");

    render_image("bottom_section", "id", "kaylyn/id.png")

    render_image("bottom_section", "id_photo", "kaylyn/id_photo.png");


    window.addEventListener('scroll', onScroll, false);

    var sectionOne = document.querySelector('.item-1');
    var sectionTwo = document.querySelector('.item-2');

    var SectionOneHeight = getComputedStyle(sectionOne).height.split('px')[0];
    var SectionTwoHeight = getComputedStyle(sectionTwo).height.split('px')[0];

    var checkPointOne = parseFloat(SectionOneHeight);    
}

function cali(){
    render_remover("main_body");

    document.getElementById("main_css").setAttribute("href", "css/cali.css");

    render_div("main_body", "content-container");

    render_section("content-container", "top_section", "item item-1");

    render_image("top_section", "bg_2", "cali/bg_2.png");

    render_image("top_section", "meet", "cali/meet.png");

    render_image("top_section", "cali", "cali/cali.png");

    render_div("top_section", "personality_spotlight");
    render_p("personality_spotlight", "personality_spotlight_text", "Personality Spotlight");

    render_div("top_section", "hiysdysmi");
    render_p("hiysdysmi", "hiysdysmi_text", "\"Bruh, if you wanna look at my ID, finna be scrollin' down boomer.\"");

    render_a("top_section", "arrow_a", "#", "cover_2()");
    render_image("arrow_a", "arrow", "cali/arrow.png");


    render_section("content-container", "bottom_section", "item item-2");

    render_image("bottom_section", "bg_1", "cali/bg_1.png");

    render_image("bottom_section", "id", "cali/id.png")

    render_image("bottom_section", "id_photo", "cali/id_photo.png");


    window.addEventListener('scroll', onScroll, false);

    var sectionOne = document.querySelector('.item-1');
    var sectionTwo = document.querySelector('.item-2');

    var SectionOneHeight = getComputedStyle(sectionOne).height.split('px')[0];
    var SectionTwoHeight = getComputedStyle(sectionTwo).height.split('px')[0];

    var checkPointOne = parseFloat(SectionOneHeight);    
}

function ariana(){
    render_remover("main_body");

    document.getElementById("main_css").setAttribute("href", "css/ariana.css");

    render_div("main_body", "content-container");

    render_section("content-container", "top_section", "item item-1");

    render_image("top_section", "bg_2", "ariana/bg_2.png");

    render_image("top_section", "meet", "ariana/meet.png");

    render_image("top_section", "ariana", "ariana/ariana.png");

    render_div("top_section", "personality_spotlight");
    render_p("personality_spotlight", "personality_spotlight_text", "Personality Spotlight");

    render_div("top_section", "hiysdysmi");
    render_p("hiysdysmi", "hiysdysmi_text", "\"Hi! If you'd like to see my ID, please scroll down!\"");

    render_a("top_section", "arrow_a", "#", "cover_2()");
    render_image("arrow_a", "arrow", "ariana/arrow.png");


    render_section("content-container", "bottom_section", "item item-2");

    render_image("bottom_section", "bg_1", "ariana/bg_1.png");

    render_image("bottom_section", "id", "ariana/id.png")

    render_image("bottom_section", "id_photo", "ariana/id_photo.png");


    window.addEventListener('scroll', onScroll, false);

    var sectionOne = document.querySelector('.item-1');
    var sectionTwo = document.querySelector('.item-2');

    var SectionOneHeight = getComputedStyle(sectionOne).height.split('px')[0];
    var SectionTwoHeight = getComputedStyle(sectionTwo).height.split('px')[0];

    var checkPointOne = parseFloat(SectionOneHeight);    
}

function kiran_2(){
    render_remover("main_body");

    document.getElementById("main_css").setAttribute("href", "css/kiran_2.css");

    render_div("main_body", "content-container");

    render_section("content-container", "top_section", "item item-1");

    render_image("top_section", "bg_2", "kiran_2/bg_2.png");

    render_image("top_section", "meet", "kiran_2/meet.png");

    render_image("top_section", "kiran_2", "kiran_2/kiran.png");

    render_div("top_section", "personality_spotlight");
    render_p("personality_spotlight", "personality_spotlight_text", "Personality Spotlight");

    render_div("top_section", "hiysdysmi");
    render_p("hiysdysmi", "hiysdysmi_text", "\"Hi! If you'd like to see my ID, please scroll down!\"");

    render_a("top_section", "arrow_a", "#", "cover_2()");
    render_image("arrow_a", "arrow", "kiran_2/arrow.png");


    render_section("content-container", "bottom_section", "item item-2");

    render_image("bottom_section", "bg_1", "kiran_2/bg_1.png");

    render_image("bottom_section", "id", "kiran_2/id.png")

    render_image("bottom_section", "id_photo", "kiran_2/id_photo.png");


    window.addEventListener('scroll', onScroll, false);

    var sectionOne = document.querySelector('.item-1');
    var sectionTwo = document.querySelector('.item-2');

    var SectionOneHeight = getComputedStyle(sectionOne).height.split('px')[0];
    var SectionTwoHeight = getComputedStyle(sectionTwo).height.split('px')[0];

    var checkPointOne = parseFloat(SectionOneHeight);    
}

function project(){
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
}

cover_1();
