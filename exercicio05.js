function mercado () { 
// a função 'mercado' é definida para configurar o comportamento do formulário.        
    
    // 'document.querySelector' é usado para obter referências aos elementos HTML relevantes (formulário e div de resultado)
    const form = document.querySelector('.form');       
    const resultado = document.querySelector('.resultado');

    // Array definido para armazenar os dados dos produtos adicionados.
    const products = []; 

   // função para lidar com o evento de envio do formulário
   // Ela coleta os dados do formulário, os adiciona ao array products e chama a função mostrarResultados.
   function recebeEventoForm (evento) {
    //preventDefault() para não atualizar a página e perder os dados
    evento.preventDefault();   

    const nomeMercado = form.querySelector('.nome-mercado');
    const foodName = form.querySelector('.food-name');
    const quantity = form.querySelector('.quantity');
    const price = form.querySelector('.price');
    
    // Adicionar um objeto com os dados do produto ao array de produtos
    products.push({
        nomeMercado: nomeMercado.value,
        foodName: foodName.value,
        quantity: quantity.value,
        price: price.value
    });

    console.log(products);

    // Exibir os dados do produto na div de resultado.
    resultado.innerHTML += `<p> No ${nomeMercado.value} comprei ${foodName.value}, cuja quantidade é ${quantity.value} pelo preço de ${price.value}</p>`;
  
   };

   // Adicionar um ouvinte de evento ao formulário para lidar com o envio
   form.addEventListener('submit', recebeEventoForm);
}

// Chamar a função mercado para configurar o comportamento do formulário
mercado()