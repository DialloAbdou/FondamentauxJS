
const questionnaires={
     chat : "questionnaireChat.json",
     chien : "questionnaireChien.json",

     afficherQuestionnaire(){
         let text = "";
         for(let propriete in this){
             if(typeof(this[propriete])!== "function"){
                 text += propriete +" - "
             }
         }
         console.log(text);
     }
}
module.exports = questionnaires