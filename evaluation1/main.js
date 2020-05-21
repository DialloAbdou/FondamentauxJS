
const exercice =require("./exercice1")
var read = require("readline-sync");

afficherInfo();

/**
 * Elle affiche le menu
 */
function menu(){
    let text = "";
        text += "1- Afficher le tableau1 \n";
        text += "2- Afficher le tableau2 \n";
        text += "3- Afficher le Produit de la Moyenne des Deux tableaux \n";
        text += "9- Quitter \n";

    console.log(text)
}

/**
 * elle affiche l'application
 */
function afficherInfo(){
    menu();
     let choix = 0;
     exercice.fill(); // initialisation du tableau2
     while (choix!==9){
         choix = read.questionInt("veillez saisir votre choix !");
         switch (choix){
             case 1:
                  exercice.poster(exercice.tableau1)
            break;

            case 2:
                exercice.poster(exercice.tableau2);
            break;

            case 3:
               
                exercice.averageTwoArray(exercice.tableau1, exercice.tableau2)
                break;
            case 9: 
                console.log("A Bientôt")
             break;
   
          default:
              console.log("Erreur de saisie")
          break;
               
         }

     }
}