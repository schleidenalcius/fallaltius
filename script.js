/* Déclaration de variables*/
let sonJoue = document.querySelector(".jeu");
let chemin = "Sons/Jeu/";
let btnTester = document.querySelector("button");
let btnNotes = document.querySelectorAll(".note");
let leResultat= document.querySelector("#leResultat");
let imgNote = document.querySelector("#imgNote");
let cheminImgNote = "Images/Jeu/";
let rentrerUnePremièreFois = 0;

/*Déclarations de mes fonctions*/

/*Cette fonction permet de choisir un son aléeatoire parmi 12 sons*/
function choisirUnSon(){
    let numeroAleatoire = Math.ceil(Math.random()*12);
    switch (numeroAleatoire){
        case 1:
            chemin = chemin + "Do.mp3"
            cheminImgNote = cheminImgNote+"Do.png";
        break;
        case 2:
            chemin = chemin + "DoD.mp3"
            cheminImgNote = cheminImgNote+"DoD.png";
        break;
        case 3:
            chemin = chemin + "Re.mp3"
            cheminImgNote = cheminImgNote+"Re.png";
        break;
        case 4:
            chemin = chemin + "ReD.mp3"
            cheminImgNote = cheminImgNote+"ReD.png";
        break;
        case 5:
            chemin = chemin + "Mi.mp3"
            cheminImgNote = cheminImgNote+"Mi.png";
        break;
        case 6:
            chemin = chemin + "Fa.mp3"
            cheminImgNote = cheminImgNote+"Fa.png";
        break;
        case 7:
            chemin = chemin + "FaD.mp3"
            cheminImgNote = cheminImgNote+"FaD.png";
        break;
        case 8:
            chemin = chemin + "Sol.mp3"
            cheminImgNote = cheminImgNote+"Sol.png";
        break;
        case 9:
            chemin = chemin + "SolD.mp3"
            cheminImgNote = cheminImgNote+"SolD.png";
        break;
        case 10:
            chemin = chemin + "La.mp3"
            cheminImgNote = cheminImgNote+"La.png";
        break;
        case 11:
            chemin = chemin + "LaD.mp3"
            cheminImgNote = cheminImgNote+"LaD.png";
        break;
        case 12:
            chemin = chemin + "Si.mp3"
            cheminImgNote = cheminImgNote+"Si.png";
        break;
    }
   

    modifierSonJoue();
}

/*Fonction qui permet de changer la source de la balise audio*/
function modifierSonJoue(){
    sonJoue.src= chemin;
    sonJoue.load();
    if(rentrerUnePremièreFois>0){
    sonJoue.play();
    }
}

choisirUnSon();


/*fonction pour assigner un événement aux notes*/
function testerSons(){
    btnNotes.forEach((btnNote)=>{
        btnNote.addEventListener("click",(event)=>{
            event.preventDefault();
            let lanote = btnNote.textContent;         
            let laNoteCorrigee = lanote.replace("#","D"); 
            const nomFichier = chemin.split("/");   
            const nomFichierNettoye=nomFichier[2].split(".")[0];
            if (laNoteCorrigee===nomFichierNettoye){
                leResultat.textContent="Réussi";
                imgNote.src=cheminImgNote;
            }else{
               leResultat.textContent="Vous y êtes presque! Recommencer";
            }
        });
    });
}

testerSons();
btnTester.addEventListener("click", ()=>{
   chemin = "Sons/Jeu/";
   cheminImgNote = "Images/Jeu/";
   imgNote.src="";
   leResultat.textContent="Jouez!";
   rentrerUnePremièreFois=1;
   choisirUnSon();
   testerSons();
});