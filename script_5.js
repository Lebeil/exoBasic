const books = [
    { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
    { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
    { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
    { title: 'Les frères Karamazov', id: 450911, rented: 55 },
    { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
    { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
    { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
    { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
    { title: 'La disparition', id: 364445, rented: 33 },
    { title: 'La lune seule le sait', id: 63541, rented: 43 },
    { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
    { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

console.log('Est-ce que tous les livres ont été au moins empruntés une fois ? ')
const once = books.map(book => book.rented >=1)
console.log(once)

console.log('Quel est livre le plus emprunté ?')
const max = books.sort(function(a,b){
    return a.rented-b.rented
})
console.log(max[max.length-1].title)

console.log('Quel est le livre le moins emprunté ?')
const min = books.sort(function(a,b){
    return a.rented-b.rented
})
console.log(min[0].title)

console.log("Trouve le livre avec l'ID: 873495")
const livre = books.find(book => book.id === 873495)
console.log(livre.title)

console.log('Supprime le livre avec l\'ID: 133712');
const supprime = books.splice(books.findIndex(book => book.id === 133712),1)
console.log('Ce livre :')
console.log(supprime)
console.log('a été supprimé !')

console.log('Trie les livres par ordre alphabétique (sans celui avec l\'ID 133712 car il est supprimé).')
const c = books.sort((a,b)=> {
    return a-b
})
console.log(c)
