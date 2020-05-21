var read = require("readline-sync");

const toolsBox = {
    saisirText(text){
       return read.question(text);
    },

     genererChiffreAlleatoire(min, max){
        return (Math.floor(Math.random()*(max-min) +min))
     }
}

module.exports = toolsBox;