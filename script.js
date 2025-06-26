import { entrepreneurs } from './data.js';
// ---------------------------------------------------------------------------

// function hello() {
//   let script1 = "Hello World";
//   return script1;
// }
// console.log("script1:", hello());
// ---------------------------------------------------------------------------
// function promptName() {
//   let prenom = prompt("Quel est ton prénom?");
//   return prenom;
// }
// console.log("script2-prompt:", `Bonjour ${promptName()}`);
// -------------------------------------------------------------------------

// function factoriel() {
//   let nb = prompt("donne un chiffre entre 1 et 10: ");

//   nb = Number(nb);
//   if (!isNaN(nb) && nb >= 1 && nb <= 10) {
//     let fact = 1;
//     for (let i = 1; i <= nb; i++) {
//       fact *= i;
//     }
//     return fact;
//   } else {
//     return "Entrée invalide";
//   }
// }

// console.log("script3-factoriel: ", factoriel());
// -------------------------------------------------------------------------
// #
// ##
// ###
// ####
// #####

// function pyramideMario() {
//   let nbStorey = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ? (entre 1 et 20)");
//   nbStorey = Number(nbStorey);
//   if (isNaN(nbStorey) || nbStorey < 1 || nbStorey > 20) {
//     return "Nombre invalide, veuillez entrer un nombre entre 1 et 20.";
//   } else {
//     for (let i = 1; i <= nbStorey; i++) {
//       console.log("#".repeat(i));
//     }
//     return ""; // pour éviter d'afficher undefined
//   }

// }
// console.log("script4-pyramide: \n", pyramideMario());

// -------------------------------------------------------------------------


// function bornIn70s() {
//   let entreprener70s = entrepreneurs.filter(entrepreneur => entrepreneur.year >= 1970 && entrepreneur.year < 1980);
//   return entreprener70s.map(entrepreneur => `${entrepreneur.first} ${entrepreneur.last} (${entrepreneur.year})`);
// }

// console.log("script5-bornIn70s: ", bornIn70s());

// function nomPrenom() {
//   return entrepreneurs.map(entrepreneur => `${entrepreneur.first} ${entrepreneur.last}`);
// }

// console.log("script5-nomPrenom: ", nomPrenom());

// function ageToday() {
//   // const currentYear = 2025;
//   const currentYear = new Date().getFullYear(); // new Date() est la date complete(jour, mois, année, heure) en cours , getFullYear() retourne juste l'année actuelle
//   return entrepreneurs.map(entrepreneur => {
//     const age = currentYear - entrepreneur.year;
//     return `${entrepreneur.first} ${entrepreneur.last} a ${age} ans.`;
//   });
// }

// console.log("script5-ageToday: ", ageToday());

// function sortNames() {
//   let lastNames = [];
//   entrepreneurs.forEach(entrepreneur => {
//     lastNames.push(entrepreneur.last);
//   });
//   return lastNames.sort();
// }

// console.log("script5-sortNames: ", sortNames());

// -------------------------------------------------------------------------
