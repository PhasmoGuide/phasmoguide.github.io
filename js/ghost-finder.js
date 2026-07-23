/*
===================================
 PhasmoGuide Ghost Finder
 Ghost Database & Filter System
===================================
*/


document.addEventListener("DOMContentLoaded", function(){



const ghosts = [


{
name:"Spirit",
evidence:["EMF5","SpiritBox","Writing"],
strength:"Geen speciale kracht.",
weakness:"Smudge sticks voorkomen langer een hunt."
},


{
name:"Wraith",
evidence:["EMF5","SpiritBox","DOTS"],
strength:"Kan niet over zout lopen.",
weakness:"Reageert op zout."
},


{
name:"Phantom",
evidence:["SpiritBox","UV","DOTS"],
strength:"Verdwijnt sneller tijdens foto's.",
weakness:"Foto maken laat hem verdwijnen."
},


{
name:"Poltergeist",
evidence:["SpiritBox","UV","Writing"],
strength:"Gooi veel objecten tegelijk.",
weakness:"Minder sterk zonder objecten."
},


{
name:"Banshee",
evidence:["UV","Orbs","DOTS"],
strength:"Richt zich op één speler.",
weakness:"Schreeuwt uniek via Parabolic Microphone."
},


{
name:"Jinn",
evidence:["EMF5","UV","Freezing"],
strength:"Kan sneller bewegen op afstand.",
weakness:"Kan niet versnellen zonder stroom."
},


{
name:"Mare",
evidence:["SpiritBox","Orbs","Writing"],
strength:"Sterker in het donker.",
weakness:"Kan licht niet goed gebruiken."
},


{
name:"Revenant",
evidence:["Orbs","Writing","Freezing"],
strength:"Extreem snel tijdens detectie.",
weakness:"Zeer langzaam zonder doelwit."
},


{
name:"Shade",
evidence:["EMF5","Writing","Freezing"],
strength:"Erg verlegen.",
weakness:"Minder actief bij spelers."
},


{
name:"Demon",
evidence:["UV","Writing","Freezing"],
strength:"Kan vroeg beginnen met jagen.",
weakness:"Crucifix werkt langer."
},


{
name:"Yurei",
evidence:["Orbs","Freezing","DOTS"],
strength:"Heeft sterke invloed op sanity.",
weakness:"Smudge houdt hem langer tegen."
},


{
name:"Oni",
evidence:["EMF5","Freezing","DOTS"],
strength:"Veel activiteit.",
weakness:"Verschijnt vaker zichtbaar."
},


{
name:"Yokai",
evidence:["SpiritBox","Orbs","DOTS"],
strength:"Reageert op stemmen.",
weakness:"Minder gevoelig zonder praten."
},


{
name:"Hantu",
evidence:["UV","Orbs","Freezing"],
strength:"Sneller in koude gebieden.",
weakness:"Langzaam bij warmte."
},


{
name:"Goryo",
evidence:["EMF5","UV","DOTS"],
strength:"DOTS zichtbaar via camera.",
weakness:"DOTS moeilijk zonder camera."
},


{
name:"Myling",
evidence:["EMF5","UV","Writing"],
strength:"Stil tijdens hunts.",
weakness:"Parabolic Microphone detecteert hem."
},


{
name:"Onryo",
evidence:["SpiritBox","Orbs","Freezing"],
strength:"Vuur beïnvloedt gedrag.",
weakness:"Kaarsen beschermen."
},


{
name:"The Twins",
evidence:["EMF5","SpiritBox","Freezing"],
strength:"Kan twee locaties beïnvloeden.",
weakness:"Verschillende interacties."
},


{
name:"Raiju",
evidence:["EMF5","Orbs","DOTS"],
strength:"Sneller bij elektronica.",
weakness:"Zwak zonder apparatuur."
},


{
name:"Obake",
evidence:["EMF5","UV","Orbs"],
strength:"Kan unieke vingerafdrukken tonen.",
weakness:"Verandert uiterlijk."
},


{
name:"The Mimic",
evidence:["SpiritBox","UV","Freezing","Orbs"],
strength:"Imiteert andere ghosts.",
weakness:"Heeft altijd nep Orbs."
},


{
name:"Moroi",
evidence:["SpiritBox","Writing","Freezing"],
strength:"Wordt sneller bij lage sanity.",
weakness:"Sanity medicatie helpt."
},


{
name:"Deogen",
evidence:["SpiritBox","Writing","DOTS"],
strength:"Vindt spelers altijd.",
weakness:"Heel langzaam dichtbij."
},


{
name:"Thaye",
evidence:["Orbs","Writing","DOTS"],
strength:"Sterk aan het begin.",
weakness:"Wordt zwakker na tijd."
}


];






const findButton =
document.getElementById(
"find-button"
);



const resetButton =
document.getElementById(
"reset-button"
);



const results =
document.getElementById(
"ghost-results"
);






function findGhosts(){



const selected =
Array.from(
document.querySelectorAll(
".evidence-card input:checked"
)
)
.map(
item => item.value
);





if(selected.length === 0){


results.innerHTML =
`
<p>
Selecteer minimaal één bewijs.
</p>
`;


return;


}





const possible =
ghosts.filter(ghost => {



return selected.every(
evidence =>
ghost.evidence.includes(evidence)
);



});






if(possible.length === 0){


results.innerHTML =
`
<p>
Geen mogelijke geesten gevonden.
Controleer je bewijs.
</p>
`;

return;


}





results.innerHTML = "";





possible.forEach(ghost => {



const card =
document.createElement(
"div"
);


card.className =
"ghost-card";



card.innerHTML =

`
<h3>
👻 ${ghost.name}
</h3>

<p>
<strong>Evidence:</strong><br>
${ghost.evidence.join(", ")}
</p>

<p>
<strong>Sterk:</strong><br>
${ghost.strength}
</p>

<p>
<strong>Zwak:</strong><br>
${ghost.weakness}
</p>
`;



results.appendChild(card);



});



}







function resetFinder(){



document
.querySelectorAll(
".evidence-card input"
)
.forEach(input => {


input.checked=false;


});



results.innerHTML =
`
<p>
Selecteer bewijs om te beginnen.
</p>
`;



}







if(findButton){

findButton.addEventListener(
"click",
findGhosts
);

}



if(resetButton){

resetButton.addEventListener(
"click",
resetFinder
);

}



});
