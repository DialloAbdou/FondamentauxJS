const toolsBox = require("./toolsBox");
const gestionQuestionnaire = require("./questionnaires/gestionQuestionnaire")
let questionnaire = selectionQuestion();
const questions = require("./gestionQuestion");
const joueur = require("./joueur")

 let gameOver = false
   let nom = toolsBox.saisirText("Saisir nom Joueur !")
   joueur.InitJoueur(nom)
   joueur.afficheInfoJoueur();
 while(!gameOver){
     let unequestion =questions.getQuestionAlleatoire(questionnaire);
         questions.afficherQuestion(unequestion)
     let reponse = questions.saisirReponse();
     let isreponse =questions.estReponse(unequestion,reponse)
     if(isreponse){
        let point = questions.getNbrePoint(unequestion);
         joueur.gagnerPoint(point);
         joueur.afficheInfoJoueur();
         console.log("Bonne Réponse  ¨_¨");
         if(questions.verifQuestionExist(questionnaire)){
             gameOver = true;
             console.log("Vous avez Terminé !");
         }
     }else
     {
         console.log("Mauvaise Réponse ")
         gameOver = true;
         joueur.afficheInfoJoueur();
         joueur.sauvergarderJoueur()
         console.log("A Bientôt !")
     }

 }

 function selectionQuestion(){
     gestionQuestionnaire.afficherQuestionnaire();
     let choix = toolsBox.saisirText("quel est votre choix ?");
     return require("./questionnaires/"+gestionQuestionnaire[choix])
    
 }
