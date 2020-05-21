let question = prompt("Bonjour, quelle est ta question ?")

if (question.toLocaleLowerCase().includes("fortnite")) {
    console.log("on s'fait une partie soum-soum ?")
} else if (question.endsWith("?")) {
    console.log("Ouais Ouais...")
} else if (question === "") {
    console.log("t'es en PLS ?")
} else if (question === question.toUpperCase()) {
    console.log("Pwa, calme-toi...")
} else {
    console.log("balek les couilles.")
}