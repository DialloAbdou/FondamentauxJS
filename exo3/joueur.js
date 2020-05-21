const fs = require("fs");
let joueurJson = require("./joueur.json")
const joueur = {
    nom : "Abdou",
    score : 0,
    scoreMax : 0,
    InitJoueur(newName){
        this.nom = newName;
        if(joueurJson[newName]!== undefined){
            this.scoreMax = joueurJson[newName];
        }
    },
    gagnerPoint(point){
        this.score+= point;
    },
    afficheInfoJoueur(){
        let text ="";
        text+= "Nom :"+this.nom +"\n";
        text+= "Score : "+this.score +"\n";
        console.log(text)
    },
    sauvergarderJoueur(){
        if(joueurJson[this.nom]< this.score || joueurJson[this.nom]=== undefined){
            joueurJson[this.nom] = this.score;
            fs.writeFileSync("joueur.json",JSON.stringify(joueurJson,undefined,4));
        }
    }
}
module.exports = joueur;