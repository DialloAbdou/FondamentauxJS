var read = require('readline-sync')

let joueur1 = {
    nom :"Toto",
    age :28,
    estHomme:true
}

let joueur2 = {
    nom : "Tata",
    age : 23,
    estHomme : false
}   

let joueur3 = {
    nom :"Titi",
    age :38,
    estHomme : false
}
const joueurs = [joueur1,joueur2, joueur3];
const separateur ="-";
let choixMenu =  0

while (choixMenu !=9) {
    afficheMenu(); 
    choixMenu = read.questionInt(`Veuillez saisir votre choix ? `)
     afficheChoix(choixMenu)
}


function afficheChoix(choixMenu)
{
    switch(choixMenu){
        case 1:
             afficheLigneSeparateur()
             afficherleJoueur1();
             afficheLigneSeparateur()
            break;
        case 2 :
            afficheLigneSeparateur()
            afficherLesJoueurs()
            afficheLigneSeparateur()
            break;
        case 3 :
            afficheLigneSeparateur();
            afficherDifferenceAge(joueurs)
            break;
        case 4:
            afficheLigneSeparateur();
            afficherAgeMoyenneJoueur();
            afficheLigneSeparateur();
            break;

        case 5:
            afficheLigneSeparateur();
            creerUnJoueur();
            afficheLigneSeparateur();
         break;
        case 9 :
             console.log("Merci de votre Visite !")
            break
         default : console.log('Cas non traité !')
          break;
    }

}

function creerUnJoueur(){
    let joueur = {
        nom : read.question("saisir le nom ?"),
        age : read.questionInt("saisir l'âge ?"),
        estHomme : false
    } 
    joueurs.push(joueur);
}
/***
 * les differentes founction
 */

 function afficherAgeMoyenneJoueur(){
     let totalAge = 0;
     let moyenAge =0;
     for (let index = 0; index < joueurs.length; index++) {
         totalAge =+joueurs[index].age;
     }
     moyenAge = totalAge/joueurs.length;
     console.log(`l'âge Moyenne des joueurs est : ${Math.floor(moyenAge)}`);
 }
function afficherUnJoueur(joueur){
    
    console.log(`le nom du joueur1 est : ${joueur.nom} `)
    console.log(`l'age du joueur1 est : ${joueur.age} `)
    afficherlerGenre(joueur.estHomme);
    afficheLigneSeparateur()
}

function afficherLesJoueurs(){
    joueurs.forEach(joueur=>afficherUnJoueur(joueur));
}

function afficheMenu() {
    let text =" "
    text +="1- afficher le joueur1 \n"
    text +="2- afficher les deux Joueurs \n"
    text +="3- afficher la difference d'age \n"
    text +="4- afficher l'age Moyenne \n"
    text +="5- afficher Ajout un Joueur\n"
    text +="9- quittern"
    console.log(text) 
}

function afficherlerGenre(genre)
{ 
    genre==true ? console.log(` c'est suis un hommme`): console.log(`c'est une Femme`)
}
function afficheLigneSeparateur(){
    let ligne ='';
    for(let i=0; i< 50; i++){
        ligne+= '-';
    }
    console.log(ligne);
}

function afficherDifferenceAge(joueurs)
{   let agesSup = 0;
    let index = 0;
    for(let i =0; i<joueurs.length; i++)
    {
        if(joueurs[i].age > agesSup){
            agesSup = joueurs[i].age;
            index = i;
        }
    }
    console.log(index)
    console.log(`le plus âge est : ${joueurs[index].nom } avec un age de ${agesSup} `)
}

