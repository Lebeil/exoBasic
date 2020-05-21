// UCU ou UCC ou UCA ou UCG ou AGU ou AGC => Sérine
// CCU ou CCC ou CCA ou CCG => Proline
// UUA ou UUG => Leucine
// UUU ou UUC => Phénylalanine
// CGU ou CGC ou CGA ou CGG ou AGA ou AGG => Arginine
// UAU ou UAC => Tyrosine

function arnToCodons(arn) {
    let codons = [];
    for(let i = 0; i < arn.length; i += 3) {
        codons.push(arn.slice(i, i+3));
    }
    return codons;
}

function codonToProtein(codon) {
    let protein;
    switch (codon) {
        // UCU ou UCC ou UCA ou UCG ou AGU ou AGC => Sérine
        case "UCU":
        case "UCC":
        case "UCA":
        case "UCG":
        case "AGU":
        case "AGC":
            protein = "Sérine";
            break;
        // CCU ou CCC ou CCA ou CCG => Proline
        case "CCU":
        case "CCC":
        case "CCA":
        case "CCG":
            protein = "Proline";
            break;
        // UUA ou UUG => Leucine
        case "UUA":
        case "UUG":
            protein = "Leucine";
            break;
        // UUU ou UUC => Phénylalanine
        case "UUU":
        case "UUC":
            protein = "Phénylalanine";
            break;
        // CGU ou CGC ou CGA ou CGG ou AGA ou AGG => Arginine
        case "CGU":
        case "CGC":
        case "CGA":
        case "CGG":
        case "AGA":
        case "AGG":
            protein = "Arginine";
            break;
        // UAU ou UAC => Tyrosine
        default:
            protein = "Tyrosine";
            break;
    }
    return protein;
}
console.log(codonToProtein("AGG"));

function arnToProteins(arn) {
    let codons = arnToCodons(arn);
    let proteins = [];
    for(let index in codons){
        proteins.push(codonToProtein(codons[index]));
    }
    return proteins.join("-");
}

console.log("ARN à traduire : CCGUCGUUGCGCUACAGC");
console.log(arnToProteins("CCGUCGUUGCGCUACAGC"));
console.log("******************");
console.log("ARN à traduire : CCUCGCCGGUACUUCUCG");
console.log(arnToProteins("CCUCGCCGGUACUUCUCG"));