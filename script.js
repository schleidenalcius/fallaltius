/* Déclaration de variables*/
let sonJoue = document.querySelector(".jeu");
let chemin = "Sons/Jeu/";
let btnTester = document.querySelector("button");
let btnNotes = document.querySelectorAll(".note");

/*Déclarations de mes fonctions*/

/*Cette fonction permet de choisir un son aléeatoire parmi 12 sons*/
function choisirUnSon(){
    let numeroAleatoire = Math.ceil(Math.random()*12);
    switch (numeroAleatoire){
        case 1:
            chemin = chemin + "Do.mp3"
        break;
        case 2:
            chemin = chemin + "DoD.mp3"
        break;
        case 3:
            chemin = chemin + "Re.mp3"
        break;
        case 4:
            chemin = chemin + "ReD.mp3"
        break;
        case 5:
            chemin = chemin + "Mi.mp3"
        break;
        case 6:
            chemin = chemin + "Fa.mp3"
        break;
        case 7:
            chemin = chemin + "FaD.mp3"
        break;
        case 8:
            chemin = chemin + "Sol.mp3"
        break;
        case 9:
            chemin = chemin + "SolD.mp3"
        break;
        case 10:
            chemin = chemin + "La.mp3"
        break;
        case 11:
            chemin = chemin + "LaD.mp3"
        break;
        case 12:
            chemin = chemin + "Si.mp3"
        break;
    }
    modifierSonJoue();
}

/*Fonction qui permet de changer la source de la balise audio*/
function modifierSonJoue(){
    sonJoue.src= chemin;
    console.log(sonJoue);
    sonJoue.load();
    sonJoue.play();
}

choisirUnSon();


/*fonction pour assigner un événement aux notes*/
function testerSons(){
    btnNotes.forEach((btnNote)=>{
        btnNote.addEventListener("click",(event)=>{
            event.preventDefault();
            let lanote = btnNote.textContent;
            console.log(lanote);
            let laNoteCorrigee = lanote.replace("#","D");
            console.log(`le hashtag remplacé :`+laNoteCorrigee);
            if (chemin.includes(lanote)){
                console.log("Réussi");
            }else{
                console.log("Erreur!! Recommencer");

            }
        });
    });
}

testerSons();