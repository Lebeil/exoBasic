// La fonction Factorielle (version récursive)

n = ''
n = prompt('Veuillez indiquer un nombre :')


function factorielle(n)
{
    if (n<0) {
        alert ("Veuillez Saisir Un Entier Positif ou null");
        return "### Erreur ###";
    }
    else {
        if (n === 0) {
            return 1;
        }
        else {
            return n * factorielle (n-1);
        }
    }
}

console.log(factorielle(n))