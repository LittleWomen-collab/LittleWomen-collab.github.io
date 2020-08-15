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
    tag = document.createElement("p");

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

function render_span(aE, idv, sv){
    appendElement = document.getElementById(aE);
    tag = document.createElement("span");

    tagContent = document.createAttribute("id");
    tagContent.value = idv;
    tag.setAttributeNode(tagContent);

    tagContent = document.createAttribute("style");
    tagContent.value = sv;
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

    render_a("top_section", "arrow_a", "#", "kiran_1()");
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

    render_a("content-container", "arrow_a", "#", "kiran_1()")
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

    render_a("content-container", "ci_a", "#", "contact()")
    render_div("ci_a", "ci");
}

function contact(){
    document.getElementById("main_css").setAttribute("href", "css/contact.css");
    
    render_remover("main_body");

    render_div("main_body", "content-container");

    render_div("content-container", "bg");

    render_div("content-container", "contact_us");
    render_p("contact_us", "cu", "Contact Us!");

    render_div("content-container", "main_insta_tiktok");
    render_span("main_insta_tiktok", "span_1", "color:#000000; font-style:normal;");
    render_p("span_1", "text_1", "little.women.show@gmail.com<br/>Our Instagram - @littlewomenshow<br/>Our tik tok - @littlewomenshow");
    render_span("main_insta_tiktok", "span_2", "color:#000000; font-size:70px; font-style:normal;");

    render_image("content-container", "dylan", "contact/dylan.png");

    render_a("content-container", "arrow_a", "#", "project()");
    render_image("arrow_a", "arrow", "contact/arrow.png");
}

function mission(){
    document.getElementById("main_css").setAttribute("href", "css/mission.css");

    render_remover("main_body");

    render_div("main_body", "content-container");

    render_image("content-container", "mission", "mission/mission.png");

    render_image("content-container", "dylan", "mission/dylan.png");

    render_a("content-container", "arrow_a", "#", "project()");
    render_image("arrow_a", "arrow", "mission/arrow.png");
}

function testimonials(){
    document.getElementById("main_css").setAttribute("href", "css/testimonials.css");

    render_remover("main_body");

    render_div("main_body", "content-container");

    render_image("content-container", "testimonials", "testimonials/testimonials.png");
    
    render_a("content-container", "arrow_a", "#", "project()");
    render_image("arrow_a", "arrow", "testimonials/arrow.png");
}

function tonality(){
    document.getElementById("main_css").setAttribute("href", "css/tonality.css");

    render_remover("main_body");

    render_div("main_body", "content-container");

    render_image("content-container", "tonality", "tonality/tonality.png");
    
    render_a("content-container", "arrow_a", "#", "project()");
    render_image("arrow_a", "arrow", "tonality/arrow.png");
}

function cast(){
    document.getElementById("main_css").setAttribute("href", "css/cast.css");

    render_remover("main_body");

    render_div("main_body", "content-container");

    render_section("content-container", "item item-1", "item item-1");
    render_image("item item-1", "one", "cast/1.png");

    render_section("content-container", "item item-2", "item item-2");
    render_image("item item-2", "two", "cast/2.png");

    render_section("content-container", "item item-3", "item item-3");
    render_image("item item-3", "three", "cast/3.png");

    render_section("content-container", "item item-4", "item item-4");
    render_image("item item-4", "four", "cast/4.png");

    render_section("content-container", "item item-5", "item item-5");
    render_image("item item-5", "five", "cast/5.png");

    render_section("content-container", "item item-6", "item item-6");
    render_image("item item-6", "six", "cast/6.png");

    render_section("content-container", "item item-7", "item item-7");
    render_image("item item-7", "seven", "cast/7.png");

    render_a("content-container", "arrow_a", "#", "project()");
    render_image("arrow_a", "arrow", "cast/arrow.png");

    window.addEventListener('scroll', onScroll, false);

    var sectionOne = document.querySelector('.item-1');
    var sectionTwo = document.querySelector('.item-2');
    var sectionThree = document.querySelector('.item-3');
    var sectionForth = document.querySelector('.item-4');
    var sectionFivth = document.querySelector('.item-5');
    var sectionSixth = document.querySelector('.item-6');
    var sectionSeventh = document.querySelector('.item-7');

    console.log(getComputedStyle(sectionOne).height);


    var SectionSixthHeight = getComputedStyle(sectionSixth).height.split('px')[0];
    
    var SectionOneHeight = 800;
    var SectionTwoHeight = 800;
    var SectionThreeHeight = 800;
    var SectionForthHeight = 800;
    var SectionFivthHeight = 800;

    var checkPointOne = parseFloat(SectionOneHeight);
    var checkPointTwo = checkPointOne + parseFloat(SectionTwoHeight);
    var checkPointThree = checkPointTwo + parseFloat(SectionThreeHeight);
    var checkPointForth = checkPointThree + parseFloat(SectionForthHeight);
    var checkPointFive = checkPointForth + parseFloat(SectionFivthHeight);
    var checkPointSix = checkPointFive + parseFloat(SectionSixthHeight);

    function onScroll() {
        var scrollBarPosition = window.pageYOffset | document.body.scrollTop
        if (scrollBarPosition >= 0 && scrollBarPosition < checkPointOne) {
            removeClass(sectionTwo, sectionThree)
        } else if (scrollBarPosition > checkPointOne && scrollBarPosition <= checkPointTwo) {
            addClass(sectionTwo, sectionThree, checkPointTwo)
            removeClass(sectionThree, sectionForth)
        } else if (scrollBarPosition > checkPointTwo && scrollBarPosition <= checkPointThree) {
            addClass(sectionThree, sectionForth, checkPointThree)
            removeClass(sectionForth, sectionFivth)
        } else if (scrollBarPosition > checkPointThree && scrollBarPosition <= checkPointForth) {
            addClass(sectionForth, sectionFivth, checkPointForth)
            removeClass(sectionFivth, sectionSixth)
        } else if (scrollBarPosition > checkPointForth && scrollBarPosition <= checkPointFive) {
            addClass(sectionFivth, sectionSixth, checkPointFive)
            removeClass(sectionSixth, sectionSeventh)
        } else if (scrollBarPosition > checkPointFive && scrollBarPosition <= checkPointSix) {
            addClass(sectionSixth, sectionSeventh, checkPointSix)
        }
    }
}

function about(){
    
    document.getElementById("main_css").setAttribute("href", "css/about.css");

    render_remover("main_body");

    render_div("main_body", "content-container");

    render_section("content-container", "item item-1", "item item-1");
    render_image("item item-1", "one", "about/1.png");

    render_section("content-container", "item item-2", "item item-2");
    render_image("item item-2", "two", "about/2.png");

    render_section("content-container", "item item-3", "item item-3");
    render_image("item item-3", "three", "about/3.png");

    render_section("content-container", "item item-4", "item item-4");
    render_image("item item-4", "four", "about/4.png");

    render_section("content-container", "item item-5", "item item-5");
    render_image("item item-5", "five", "about/5.png");

    render_section("content-container", "item item-6", "item item-6");
    render_image("item item-6", "six", "about/6.png");

    render_a("content-container", "arrow_a", "#", "project()");
    render_image("arrow_a", "arrow", "about/arrow.png");

    window.addEventListener('scroll', onScroll, false);

    var sectionOne = document.querySelector('.item-1');
    var sectionTwo = document.querySelector('.item-2');
    var sectionThree = document.querySelector('.item-3');
    var sectionForth = document.querySelector('.item-4');
    var sectionFivth = document.querySelector('.item-5');
    var sectionSixth = document.querySelector('.item-6');


    var SectionFivthHeight = getComputedStyle(sectionSixth).height.split('px')[0];
    
    var SectionOneHeight = 800;
    var SectionTwoHeight = 800;
    var SectionThreeHeight = 800;
    var SectionForthHeight = 800;

    var checkPointOne = parseFloat(SectionOneHeight);
    var checkPointTwo = checkPointOne + parseFloat(SectionTwoHeight);
    var checkPointThree = checkPointTwo + parseFloat(SectionThreeHeight);
    var checkPointForth = checkPointThree + parseFloat(SectionForthHeight);
    var checkPointFive = checkPointForth + parseFloat(SectionFivthHeight);

    function onScroll() {
        var scrollBarPosition = window.pageYOffset | document.body.scrollTop
        if (scrollBarPosition >= 0 && scrollBarPosition < checkPointOne) {
            removeClass(sectionTwo, sectionThree)
        } else if (scrollBarPosition > checkPointOne && scrollBarPosition <= checkPointTwo) {
            addClass(sectionTwo, sectionThree, checkPointTwo)
            removeClass(sectionThree, sectionForth)
        } else if (scrollBarPosition > checkPointTwo && scrollBarPosition <= checkPointThree) {
            addClass(sectionThree, sectionForth, checkPointThree)
            removeClass(sectionForth, sectionFivth)
        } else if (scrollBarPosition > checkPointThree && scrollBarPosition <= checkPointForth) {
            addClass(sectionForth, sectionFivth, checkPointForth)
            removeClass(sectionFivth, sectionSixth)
        } else if (scrollBarPosition > checkPointForth && scrollBarPosition <= checkPointFive) {
            addClass(sectionFivth, sectionSixth, checkPointFive)
        } 
    }
}

function characters(){
    
    document.getElementById("main_css").setAttribute("href", "css/characters.css");

    render_remover("main_body");

    render_div("main_body", "content-container");

    render_section("content-container", "item item-1", "item item-1");
    render_image("item item-1", "one", "characters/1.jpg");

    render_section("content-container", "item item-2", "item item-2");
    render_image("item item-2", "two", "characters/2.jpg");

    render_section("content-container", "item item-3", "item item-3");
    render_image("item item-3", "three", "characters/3.jpg");

    render_section("content-container", "item item-4", "item item-4");
    render_image("item item-4", "four", "characters/4.jpg");

    render_section("content-container", "item item-5", "item item-5");
    render_image("item item-5", "five", "characters/5.jpg");

    render_section("content-container", "item item-6", "item item-6");
    render_image("item item-6", "six", "characters/6.jpg");

    render_a("content-container", "arrow_a", "#", "project()");
    render_image("arrow_a", "arrow", "characters/arrow.png");

    window.addEventListener('scroll', onScroll, false);

    var sectionOne = document.querySelector('.item-1');
    var sectionTwo = document.querySelector('.item-2');
    var sectionThree = document.querySelector('.item-3');
    var sectionForth = document.querySelector('.item-4');
    var sectionFivth = document.querySelector('.item-5');


    var SectionForthHeight = getComputedStyle(sectionSixth).height.split('px')[0];
    
    var SectionOneHeight = 800;
    var SectionTwoHeight = 800;
    var SectionThreeHeight = 800;

    var checkPointOne = parseFloat(SectionOneHeight);
    var checkPointTwo = checkPointOne + parseFloat(SectionTwoHeight);
    var checkPointThree = checkPointTwo + parseFloat(SectionThreeHeight);
    var checkPointForth = checkPointThree + parseFloat(SectionForthHeight);

    function onScroll() {
        var scrollBarPosition = window.pageYOffset | document.body.scrollTop
        if (scrollBarPosition >= 0 && scrollBarPosition < checkPointOne) {
            removeClass(sectionTwo, sectionThree)
        } else if (scrollBarPosition > checkPointOne && scrollBarPosition <= checkPointTwo) {
            addClass(sectionTwo, sectionThree, checkPointTwo)
            removeClass(sectionThree, sectionForth)
        } else if (scrollBarPosition > checkPointTwo && scrollBarPosition <= checkPointThree) {
            addClass(sectionThree, sectionForth, checkPointThree)
            removeClass(sectionForth, sectionFivth)
        } else if (scrollBarPosition > checkPointThree && scrollBarPosition <= checkPointForth) {
            addClass(sectionForth, sectionFivth, checkPointForth)
        } 
    }
}

characters();
