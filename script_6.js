// UCU ou UCC ou UCA ou UCG ou AGU ou AGC => Sérine
// CCU ou CCC ou CCA ou CCG => Proline
// UUA ou UUG => Leucine
// UUU ou UUC => Phénylalanine
// CGU ou CGC ou CGA ou CGG ou AGA ou AGG => Arginine
// UAU ou UAC => Tyrosine

function ARN(str) {
    let arr = str.match(/.{1,3}/g)
    let protein=''
    arr.forEach(cordon => {
        switch (cordon) {
            case 'UCU':
            case 'UCC':
            case 'UCA':
            case 'UCG':
            case 'AGU':
            case 'AGC':
                protein+='Sérine '
                break;
            case 'CCU':
            case 'CCC':
            case 'CCA':
            case 'CCG':
                protein+='Proline '
                break;
            case 'UUA':
            case 'UUG':
                protein+='Leucine '
                break;
            case 'UUU':
            case 'UUC':
                protein+='Phénylalanine '
                break;
            case 'CGU':
            case 'CGC':
            case 'CGA':
            case 'CGG':
            case 'AGA':
            case 'AGG':
                protein+='Arginine '
                break;
            default:
                protein+='Tyrosine '

        }
    });
    console.log(protein);
}

ARN('UUACGCAGUAGA');

ARN('CCGUCGUUGCGCUACAGC');

ARN('CCUCGCCGGUACUUCUCG');
