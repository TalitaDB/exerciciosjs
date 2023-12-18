/* Utilizando as variáveis acima faça com que o output mostre:

    varA = B;
    varB = C;
    varC = A;

*/

let varA = 'A';
let varB ='B';
let varC = 'C';

//tentativa
varA = varB // output = B 
varB = varC // output = C
varC = varA // output = B --> isso ocorre porque la na primeira linha a varA já perdeu o valor "A"
console.log(varA, varB, varC)

//forma correta - criar uma variável temporária
let varA1 = 'A';
let varB1 ='B';
let varC1 = 'C';

const varATemp1 = varA1;
varA1 = varB1 // output = B 
varB1 = varC1 // output = C
varC1 = varATemp1 // output = A
console.log(varA1, varB1, varC1)

//MANEIRA MAIS MODERNA
let varA2 = 'A';
let varB2 ='B';
let varC2 = 'C';
[varA2, varB2, varC2] = [varB2, varC2, varA2];
console.log(varA2, varB2, varC2)