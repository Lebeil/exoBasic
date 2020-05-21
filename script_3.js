
let floor = prompt("Combien d'étages veux-tu ?")

let current_floor = 1
let i = 1;

while (i <= floor) {
    console.log(' '.repeat(floor) + '#'.repeat(current_floor));
    floor = floor - 1
    current_floor = current_floor + 1
}