// Definim scorul
var scor = 85;

// Verificăm condițiile și afișăm mesajul corespunzător



function evaluareScor(){
    if (scor > 90) {
        console.log("Foarte bine");
    } 
    else if (scor >= 80 && scor <= 90) {
        console.log("gut")
        return "gut";
    } 
    else if (scor >= 70 && scor < 80) {
        console.log("Satisfăcător")
        return "Satisfacator";
    } 
    else if (scor >= 60 && scor < 70) {
        console.log("Suficient");
    } 
    else {
        console.log("Fail");
    }

}


// Apelarea funcției cu un scor specific și afișarea rezultatului în consolă
var scorTest = 85;
console.log("Pentru scorul"+ scorTest + "evaluarea este:"+ evaluareScor(scorTest));