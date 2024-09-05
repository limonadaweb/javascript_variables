//Escribe tu código aquí

function welcome(){
    return ("Hello World");
};
welcome();
//Escribe tu código aquí
function evenOrOdd(n){
    
    if (n % 2 === 0) {
        return 'even';
    } else {
        return 'odd';
    }
};
console.log(evenOrOdd(5)); // Imprime 'impar'
console.log(evenOrOdd(10)); // Imprime 'par'
console.log(evenOrOdd(0)); // Imprime 'par'
//Escribe tu código aquí
function greeting(name) {
    return `Hola, ${name}!`;
};
console.log(greeting('Pedrito')); // "Hola, Pedrito!"

export { evenOrOdd, greeting, welcome }