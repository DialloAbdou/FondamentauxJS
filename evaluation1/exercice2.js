
var read = require("readline-sync");
const voiture1={
    plaque: "AX 333333 BF",
    marque: "Yaris",
    annee: "2002",
}
const voiture2={
    plaque: "DD 09090 IT",
    marque: "Yaris",
    annee: "2004",
}

const voiture3={
    plaque: "EF 43423 FF",
    marque: "Auris",
    annee: "2012",
}

 voitures =[voiture1,voiture2, voiture3];

 //=====Application Principal ===
   main();

/**
 * affiche une Detaille
 * @param voiture 
 */
 function afficheDetailleVoitures(voiture){
     let text = ""
     text+="Plaque :"+ voiture.plaque +"\n";
     text+="marque :"+ voiture.marque +"\n";
     text+="Année :"+ voiture.annee +"\n";
     console.log(text);
 }
 /**
  * function principal
  */
 function main() {
     menu()
     let choix = 0;
      while(choix!=3){
          choix = read.questionInt("voitre choix ?");
           switch(choix){
               case 1:
                   afficheInfo();
                   break;
              case 2:
                  ajouterVoiture();
                  break;
              case 3:
                  console.log("A Bientôt !")
              break;
              default :
                console.log("Erreur de saisie")
               break;
              
           }

      }
 }

 /**
  * Menu Principal
  */

function menu(){
    let text= ""
         text+=" 1 - Afficher les voitures \n"
         text+=" 2 - Afficher les voitures \n"
         text+=" 3 - Quitter \n"
    console.log(text)
}
function ajouterVoiture(){
    const voiture ={}
    voiture.plaque = read.question("Quelle plaque ? :");
    voiture.marque = read.question("Quelle marque ? :");
    voiture.annee = read.question("Quelle annee ? :")
    voitures.push(voiture);
    console.log(`voiture ajouter :${voiture.plaque} ${voiture.marque} ${voiture.annee}`)
}
 function afficheInfo(){
     voitures.forEach(voiture=>afficheDetailleVoitures(voiture))
 }
 