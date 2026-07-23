/*
===================================
 PhasmoGuide App JavaScript
 Basis functies
===================================
*/


document.addEventListener("DOMContentLoaded", function(){


    console.log("PhasmoGuide geladen");


    /*
    ===============================
    Smooth scrolling
    ===============================
    */


    document.querySelectorAll('a[href^="#"]').forEach(link => {


        link.addEventListener("click", function(e){


            const target =
            document.querySelector(this.getAttribute("href"));


            if(target){

                e.preventDefault();

                target.scrollIntoView({

                    behavior:"smooth"

                });

            }


        });


    });




    /*
    ===============================
    Taalkeuze opslaan
    ===============================
    */


    const languageSelect =
    document.getElementById("language-select");



    if(languageSelect){


        const savedLanguage =
        localStorage.getItem("phasmoLanguage");



        if(savedLanguage){

            languageSelect.value =
            savedLanguage;

        }



        languageSelect.addEventListener(
        "change",
        function(){


            localStorage.setItem(
                "phasmoLanguage",
                this.value
            );


            console.log(
                "Taal gewijzigd naar:",
                this.value
            );


            /*
            Later koppelen we hier
            de echte vertalingen aan.
            */


        });


    }




    /*
    ===============================
    Card animatie
    ===============================
    */


    const cards =
    document.querySelectorAll(
        ".card, .ghost-card"
    );



    cards.forEach(card => {


        card.addEventListener(
        "mouseenter",
        function(){


            this.style.transition =
            "0.3s";


        });



    });




});
