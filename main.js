// Utiliser une boucle for pour afficher les nombres de 1 à 10 dans la console.
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
// Utiliser une boucle while pour afficher les nombres de 1 à 10 dans la console.
let a = 0;
while (a <= 10) {
  console.log(a);
  a++;
}
// Créer un tableau de noms de fruits (au moins 5 noms). Utilisez une boucle for pour afficher chaque nom de fruit dans la console.
let fruitsArray = ["Pomme", "Banane", "Orange", "Avocat", "Mangue"];
for (let i = 0; i < fruitsArray.length; i++) {
  const element = fruitsArray[i];
  console.log(element);
}
// Autre façcon de le faire
fruitsArray.forEach((Element) => {
  console.log(Element);
});
