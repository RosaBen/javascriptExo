
function hello() {
  let script1 = "Hello World";
  return script1;
}
console.log("script1:", hello());
// ---------------------------------------------------------------------------
function promptName() {
  let prenom = prompt("Quel est ton prénom?");
  return prenom;
}
console.log("script2-prompt:", `Bonjour ${promptName()}`);
// -------------------------------------------------------------------------

function factoriel() {
  let nb = prompt("donne un chiffre entre 1 et 10: ");

  nb = Number(nb);
  if (!isNaN(nb) && nb >= 1 && nb <= 10) {
    let fact = 1;
    for (let i = 1; i <= nb; i++) {
      fact *= i;
    }
    return fact;
  } else {
    return "Entrée invalide";
  }
}

console.log("script3-factoriel: ", factoriel());
// -------------------------------------------------------------------------