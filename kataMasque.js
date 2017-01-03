var input = prompt("Entrez une chaine.");

console.log(input);

var diese = "#".repeat(input.length-4);

var sliced = input.slice(input.length-4);

console.log(sliced);

var fini = diese+sliced;

console.log(fini);