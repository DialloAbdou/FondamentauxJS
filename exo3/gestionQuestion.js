const toolsBox = require("./toolsBox");


const questions ={
    questionUtilisee : [],
    /**
     * Affiche les details de
     * @param {*} question 
     */
   afficherQuestion(question) {
       let text="";
       text+= question.des+"\n";
       text+= "ReponseA : "+question.ReponseA +"\n";
       text+= "ReponseB :"+question.ReponseB +"\n";
       text+= "ReponseC : "+question.ReponseC +"\n";
       text+= "ReponseD : "+question.ReponseD +"\n";
       console.log(text);
   },
   /**
    * elle renvoie le nombre de question dans liste
    * @param {liste des questions} lesQuestions 
    */
   getNombreQuestion(lesQuestions){
       let nbre = 0;
      for(let question in lesQuestions){
          nbre++;
      }
      return nbre;
   },
   /**
    * elle recupère une question aléatoirement 
    * @param {*} lesQuestions 
    */
   getQuestionAlleatoire(lesQuestions){
    let nbreAlea = 0;
     do{
         nbreAlea = toolsBox.genererChiffreAlleatoire(1, this.getNombreQuestion(lesQuestions)+1)

     }while(this.estquestionUtlise(nbreAlea));

    this.questionUtilisee.push(nbreAlea);
     return lesQuestions["question"+nbreAlea];
   },
   estquestionUtlise(nbre){
       for(let i = 0; i< this.questionUtilisee.length; i++){
           if(this.questionUtilisee[i]===nbre){
               return true;
           }
       }
       return false;

   },
   verifQuestionExist(lesQuestions){
       return this.questionUtilisee.length === this.getNombreQuestion(lesQuestions);
   },
/**
 * elle renvoie le nombre de question dans le listes
 * @param {liste des questions} lesquestions 
 */
   afficheNbreQuestion(lesquestions){
       console.log(`le nombre de question est : ${this.getNombreQuestion(lesquestions)}`)
   },
   /**
    * Cette fonction permet à l'utilisateur de faire un  choix de reponse
    */
   saisirReponse() {
       let choix =""
       choix+= "quel est votre choix?\n";
       choix+= " Reponse A\n";
       choix+= " Reponse B\n";
       choix+= " Reponse C\n"  
       choix+= " Reponse D\n"  

    //    let reponse = read.question(choix)
          let reponse = toolsBox.saisirText(choix);
       return reponse;
   },
   /**
    * 
    * @param {correspond la question demander à l'utisateur} question 
    * @param { la reponse donnée par l'utilisateur} reponse 
    */
  estReponse(question, reponse){
      if(question.BonneReponse === reponse){
          return true;
      }else {
          return false;
      }
  },
  getNbrePoint(question) {
      if(question.difficulte=== "facile"){
          return 1
      }else if(question.difficulte === "moyen"){
          return 3
      } else{
          return 6
      }
  }
}
module.exports = questions;
