/*
===================================
 PhasmoGuide Language System
 Multi Language Support
===================================
*/


document.addEventListener("DOMContentLoaded", function(){



const translations = {



nl:{


"site.title":
"PhasmoGuide - Ultimate Phasmophobia Companion",


"nav.home":"Home",

"nav.finder":"Ghost Finder",

"nav.ghosts":"Geesten",

"nav.maps":"Maps",

"nav.equipment":"Equipment",

"nav.guides":"Gidsen",



"hero.title":
"De ultieme Phasmophobia Companion",


"hero.description":
"Vind geesten, analyseer bewijs en ontdek alle belangrijke locaties op elke map.",


"hero.button.finder":
"Ghost Finder",


"hero.button.maps":
"Interactieve Maps",




"intro.title":
"Alles wat je nodig hebt tijdens een onderzoek",


"intro.description":
"PhasmoGuide is een uitgebreide hulpwebsite voor Phasmophobia spelers. Gebruik handige tools om sneller geesten te herkennen en betere beslissingen te maken.",




"feature.ghostfinder.title":
"Ghost Finder",


"feature.ghostfinder.description":
"Selecteer bewijs en ontdek welke geesten nog mogelijk zijn.",


"feature.ghostfinder.button":
"Start onderzoek →",




"feature.maps.title":
"Map Locator",


"feature.maps.description":
"Bekijk waar botten, cursed possessions en belangrijke objecten kunnen liggen.",


"feature.maps.button":
"Bekijk Maps →",




"feature.equipment.title":
"Equipment Guide",


"feature.equipment.description":
"Leer alles over Tier 1, Tier 2 en Tier 3 apparatuur.",


"feature.equipment.button":
"Bekijk Equipment →",




"feature.guides.title":
"Strategieën",


"feature.guides.description":
"Tips voor beginners en ervaren ghost hunters.",


"feature.guides.button":
"Lees Gidsen →",




"popular.title":
"Populaire geesten",



"ghost.spirit":
"Een normale geest zonder extreme eigenschappen.",


"ghost.demon":
"Een agressieve geest die vroeg kan beginnen met jagen.",


"ghost.deogen":
"Kan spelers overal vinden maar beweegt langzaam dichtbij.",


"ghost.oni":
"Een sterke en actieve geest die vaak zichtbaar is.",


"ghost.revenant":
"Wordt extreem snel wanneer hij een speler detecteert.",




"advertisement":
"Advertentie ruimte",




"why.title":
"Waarom PhasmoGuide?",


"why.languages":
"✅ Meerdere talen",


"why.mobile":
"✅ Mobielvriendelijk",


"why.tools":
"✅ Interactieve tools",


"why.updates":
"✅ Regelmatige updates",


"why.free":
"✅ Gratis te gebruiken",




"footer.about":
"Over ons",

"footer.contact":
"Contact",

"footer.privacy":
"Privacybeleid",

"footer.cookies":
"Cookiebeleid"


}






};







const languageSelect =
document.getElementById(
"language-select"
);




function changeLanguage(language){



const elements =
document.querySelectorAll(
"[data-i18n]"
);




elements.forEach(element => {



const key =
element.getAttribute(
"data-i18n"
);



if(translations[language][key]){


element.textContent =
translations[language][key];


}



});




document.documentElement.lang =
language;



localStorage.setItem(
"phasmoLanguage",
language
);



}





let savedLanguage =
localStorage.getItem(
"phasmoLanguage"
)
|| "nl";




if(languageSelect){

languageSelect.value =
savedLanguage;



languageSelect.addEventListener(
"change",
function(){


changeLanguage(
this.value
);


});


}





changeLanguage(
savedLanguage
);





});
