const pizzas = [
    { name: 'calabresa', toppings: 'calabresa' },
    { name: '4 queijos', toppings: 'calabresa' }
];

// Arrow function
const mappedPizzas = pizzas.map((pizza) => {
    return pizza.name.toUpperCase();
});

// Arrow function com retorno implícito
const mappedPizzasImplicitReturn = pizzas.map(pizza => pizza.name.toUpperCase());

console.log('Arrow function ', mappedPizzas);
console.log('Arrow function retorno implícito ', mappedPizzasImplicitReturn);


// Parâmetro default
function multiply(a: number, b = 5) {
    return a * b;
}

console.log('Com parâmetro opcional', multiply(2, 5));
console.log('Sem parâmetro opcional', multiply(2));
