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
            document.querySelector(
                this.getAttribute("href")
            );


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
    Mobiel menu
    ===============================
    */


    const menuToggle =
    document.getElementById(
        "menu-toggle"
    );


    const navigation =
    document.getElementById(
        "navigation"
    );



    if(menuToggle && navigation){


        menuToggle.addEventListener(
        "click",
        function(){


            navigation.classList.toggle(
                "open"
            );


        });



        navigation.querySelectorAll("a")
        .forEach(link => {


            link.addEventListener(
            "click",
            function(){


                navigation.classList.remove(
                    "open"
                );


            });


        });


    }







    /*
    ===============================
    Actieve pagina
    ===============================
    */


    const currentPage =
    window.location.pathname
    .split("/")
    .pop();



    document.querySelectorAll(
        ".navigation a"
    )
    .forEach(link => {



        const linkPage =
        link.getAttribute("href");



        if(linkPage === currentPage){

            link.classList.add(
                "active"
            );

        }



    });







    /*
    ===============================
    Card hover voorbereiding
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


            this.classList.add(
                "hover"
            );


        });



        card.addEventListener(
        "mouseleave",
        function(){


            this.classList.remove(
                "hover"
            );


        });



    });







});
