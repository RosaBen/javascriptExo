import { entrepreneurs, books, acidesAmines, messages } from './data.js';
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
//     return nbStorey;
//   } else {
//     for (let i = 1; i <= nbStorey; i++) {
//       console.log(" ".repeat(nbStorey - i) + "#".repeat(i));
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
// -------------------------------------------------------------------------

// function nomPrenom() {
//   return entrepreneurs.map(entrepreneur => `${entrepreneur.first} ${entrepreneur.last}`);
// }

// console.log("script5-nomPrenom: ", nomPrenom());
// -------------------------------------------------------------------------
// function ageToday() {
//   // const currentYear = 2025;
//   const currentYear = new Date().getFullYear(); // new Date() est la date complete(jour, mois, année, heure) en cours , getFullYear() retourne juste l'année actuelle
//   return entrepreneurs.map(entrepreneur => {
//     const age = currentYear - entrepreneur.year;
//     return `${entrepreneur.first} ${entrepreneur.last} a ${age} ans.`;
//   });
// }

// console.log("script5-ageToday: ", ageToday());
// -------------------------------------------------------------------------
// function sortNames() {
//   let lastNames = [];
//   entrepreneurs.forEach(entrepreneur => {
//     lastNames.push(entrepreneur.last);
//   });
//   return lastNames.sort();
// }

// console.log("script5-sortNames: ", sortNames());

// -------------------------------------------------------------------------

// function borrowedOnce() {
//   return books.map(book => {
//     if (book.rented >= 1) {
//       return `Le livre "${book.title}" a été emprunté ${book.rented} fois.`;
//     } else {
//       return `Le livre "${book.title}" n'a jamais été emprunté.`;
//     }
//   });
// }

// console.log("script6-borrowedOnce: ", borrowedOnce());
// -------------------------------------------------------------------------
// function sortedBooksByRented() {
//   const sorted = books.sort((a, b) => b.rented - a.rented);
//   return sorted;
// }

// function maxRentedBook() {
//   const sorted = sortedBooksByRented();
//   const maxRented = sorted[0].rented;
//   return maxRented;
// }

// function minRentedBook() {
//   const sorted = sortedBooksByRented();
//   const minRented = sorted[sorted.length - 1].rented;
//   return minRented;
// }



// function borrowedBooks() {
//   const maxRented = maxRentedBook();
//   const minRented = minRentedBook();
//   const mostBorrowedBooks = books.filter(book => book.rented === maxRented);
//   const leastBorrowedBooks = books.filter(book => book.rented === minRented);

//   let result = {
//     messageMostBorrowed: `Le livre le plus emprunté est "${mostBorrowedBooks[0].title}" avec ${maxRented} emprunts.`
//   };

//   if (minRented !== 0) {
//     result.messageLeastBorrowed = `Le livre le moins emprunté est "${leastBorrowedBooks[0].title}" avec ${minRented} emprunts.`;
//   } else {
//     result.messageLeastBorrowed = `Le livre "${leastBorrowedBooks[0].title}" n'a jamais été emprunté.`;
//   }

//   return result;
// }

// console.log("script6-borrowedBooks: ", borrowedBooks());
// -------------------------------------------------------------------------

// function findBookById(id) {
//   const book = books.find(book => book.id === id);
//   if (book) {
//     return `Le livre avec l'ID: ${id} est "${book.title}".`;
//   }
//   return `Aucun livre trouvé avec l'ID: ${id}.`;
// }

// console.log("script6-findBookById: ", findBookById(873495));
// console.log("script6-findBookById: ", findBookById(0));
// -------------------------------------------------------------------------
// function removeBookById(id) {
//   const index = books.findIndex(book => book.id === id);
//   if (index !== -1) {
//     const removedBook = books.splice(index, 1);
//     return `Le livre "${removedBook[0].title}" a été supprimé avec succès.`;
//   }
//   return `Aucun livre trouvé avec l'ID: ${id}.`;
// }

// console.log("script6-RemoveBookById: ", removeBookById(133712));
// -------------------------------------------------------------------------
// function removeBookById(id) {
//   const bkToRemove = books.findIndex(book => book.id === id);
//   // console.log("script6-RemoveBookById: ", bkToRemove);
//   if (bkToRemove !== -1) {
//     books.splice(bkToRemove, 1);
//     return books;
//   }
// }

// function sortBooks() {
//   let books = removeBookById(133712);
//   // console.log("script6-sortBooks: ", books);
//   let sortedBooks = books.sort(function (a, b) {
//     if (a.title < b.title) {
//       return -1;
//     }
//     if (a.title > b.title) {
//       return 1;
//     }
//     return 0;
//   });
//   return sortedBooks;
// }
// console.log("script6-sortBooks: ", sortBooks());
// -------------------------------------------------------------------------

// function codonAcidesAmines(string) {
//   let resultARN = [];
//   for (let i = 0; i < string.length; i += 3) {
//     const codon = string.slice(i, i + 3);
//     resultARN.push(codon);

//   }
//   return resultARN;
// }


// function compareCodonWithAcidesAmines(array, objet) {
//   let result = [];
//   // loop pour parcourir chaque clés de l'objet acidesAmines (ex clé= serine, proline, etc)
//   for (const acAm in objet[0]) {
//     // récupère les valeurs de chaque clé (ex: ["UCU", "UCC", "UCA", "UCG", "AGU", "AGC"] pour serine)
//     const group = objet[0][acAm];
//     // array.some() permet de vérifier si au moins un élément du tableau correspond à un élément du groupe
//     // 
//     const isAMatch = array.some(name => group.includes(name));
//     isAMatch ? result.push(acAm) : null;
//   }
//   return result.join("-");
// }

// console.log("script7-compareCodonWithAcidesAmines: ", compareCodonWithAcidesAmines(codonAcidesAmines("CCGUCGUUGCGCUACAGC"), acidesAmines));
// console.log("script7-compareCodonWithAcideAline: ", compareCodonWithAcidesAmines(codonAcidesAmines("CCUCGCCGGUACUUCUCG"), acidesAmines));
// -------------------------------------------------------------------------

function chatBot() {
  let userMessage = prompt("Comment puis je t'aider?")
  const listMessages = messages;
  let isMatch = false;
  for (const message of listMessages) {
    if (message.regex.test(userMessage)) {
      isMatch = true;
      return message.message;
    }
  }
  if (!isMatch) {
    return "Désolé, je n'ai pas compris votre demande.";
  }
}


console.log(chatBot());

// -------------------------------------------------------------------------





// -------------------------------------------------------------------------

// const regex = /\?/;

// // Alternative syntax using RegExp constructor
// // const regex = new RegExp('\\?', '')

// const str = `test?`;

// // Reset `lastIndex` if this regex is defined globally
// // regex.lastIndex = 0;

// let m;

// if ((m = regex.exec(str)) !== null) {
//   // The result can be accessed through the `m`-variable.
//   m.forEach((match, groupIndex) => {
//     console.log(`Found match, group ${groupIndex}: ${match}`);
//   });
// }



// const regex = /^[A-Z\s\W\d]+$/g;

// // Alternative syntax using RegExp constructor
// // const regex = new RegExp('^[A-Z\\s\\W\\d]+$', 'g')

// const str = `TEST EEEEEE`;

// // Reset `lastIndex` if this regex is defined globally
// // regex.lastIndex = 0;

// let m;

// while ((m = regex.exec(str)) !== null) {
//   // This is necessary to avoid infinite loops with zero-width matches
//   if (m.index === regex.lastIndex) {
//     regex.lastIndex++;
//   }

//   // The result can be accessed through the `m`-variable.
//   m.forEach((match, groupIndex) => {
//     console.log(`Found match, group ${groupIndex}: ${match}`);
//   });
// }
