let num = Number(prompt('Digite um número')); // é preciso fazer isso porque a função prompt retorna uma string, não um número. PARA CORRIGIR, COLOCA-SE NUMBER antes
let numTitulo = document.getElementById('numero-titulo');
let texto = document.getElementById('texto');

numTitulo.innerHTML = num;
texto.innerHTML += `A raiz quadrada do seu número é <strong>${Math.sqrt(num)}</strong> <br />`; 
texto.innerHTML += `<strong>${num}</strong> é um número inteiro? <strong>${Number.isInteger(num)}</strong> <br />`; // output = 
texto.innerHTML += `<strong>${num}</strong> é um NaN? <strong>${Number.isNaN(num)}</strong> <br />`; 
texto.innerHTML += `Arredondando para baixo o resultado é <strong>${Math.floor(num)}</strong> <br />`; 
texto.innerHTML += `Arredondando para cima o resultado é <strong>${Math.ceil(num)}</strong> <br />`; 
texto.innerHTML += `Com duas casas decimais o resultado é <strong>${num.toFixed(2)}</strong> <br />`; 


//IMPRESCINDÍVEL A UTILIZAÇÃO DE   +=

// IMPRESCINDÍVEL COLOCAR  Number() E DENTRO DELE prompt()20.10