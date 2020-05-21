
const tableau = {
     tableau1 :  [2,5,6,8,9],
     tableau2: [],

        /**
         * Elle permet de remplir
        * En multipliant chq case à 2/3
        */

       fill() {
        let elem = 0;
        for (let i = 0; i< this.tableau1.length; i++){
            elem = Math.round((this.tableau1[i]*(2/3)*10))/10
             this.tableau2.push(elem);
        }
      },
      /**
        * Elle affiche le tableau
        * @param {*} tab le tableau passé en parametre
      */
     poster(tab){
       tab.forEach(elem=> console.log(elem))
    },


    /**
     * Elle permet de faire la maoyenne
     * @param  tab 
     */
    average(tab){
        let total = 0;
        for (let i = 0; i< tab.length;i++){
            total += tab[i];
        }
        return total/tab.length
    },
   averageTwoArray(tab1, tab2){
       let moyenneTotal= 0;
       let moyenneRound =0;
       let moyenne1 = this.average(tab1);
       let moyenne2 = this.average(tab2)
       moyenneTotal =  (moyenne1*moyenne2)/(tab1.length+tab2.length);
       moyenneRound = Math.round(moyenneTotal*100)/10;

       console.log(`la moyenne des deux Tableaux est : ${moyenneRound} `)

   }
}
module.exports = tableau;




