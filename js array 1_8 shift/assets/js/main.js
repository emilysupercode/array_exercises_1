console.log("test")

const deutscheGerichte = ["Speckkuchen", "Thüringer Rostbratwurst", "Quarkkeulchen", "Sauerbraten"];

console.log(deutscheGerichte);

deutscheGerichte.unshift("alles mit Spargel", "DDR Suppe", "Spätzle", "Hefeklöße", "Mohnkuchen", "Senfeier");
console.log(deutscheGerichte)

const one = deutscheGerichte.shift();
console.log(deutscheGerichte);
console.log(one);
const two = deutscheGerichte.shift();
console.log(deutscheGerichte);
console.log(two);
const three = deutscheGerichte.shift();
console.log(deutscheGerichte);
console.log(three);
const nichtGut = deutscheGerichte;
console.log(nichtGut)