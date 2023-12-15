//Js - DOM response test (lineup 1.)
console.log('JS OK');

//(lineup 2.)
document.getElementById('printer');
console.log(printer);

//(lineup 3.)
let firstName = prompt('Inserisci il tuo nome:', 'Lorenzo');
console.log(firstName)

let lastName = prompt('Inserisci il tuo Cognome:', 'Chierisini');
console.log(lastName)

let favColor = prompt('Inserisci il tuo Colore preferito:', 'Nero');
console.log(favColor)

//(lineup 4.)
const password = firstName + lastName + favColor + '23';
console.log(password)

//(lineup 5)
printer.innerHTML = `<strong>La tua password è:</strong> ${password}`

/* 
Personal BONUS: Saluture l'utente quando accede
 */
document.getElementById('welcome');
console.log(welcome);

//Personal BONUS step 2
welcome.innerHTML = `${firstName} ${lastName}`