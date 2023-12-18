const name = 'Erling';
const middleName = 'Braut';
const lastName = 'Haaland';
let age = 23;
let weight = 88;
let height = 1.94;
let imc = weight / (height * height);
let yearBirth = 2023 - age ;
console.log(imc);
console.log(yearBirth)
console.log(
    name, middleName, lastName, 'tem', age, 'anos de idade, tendo nascido em', yearBirth,
    'pesa', weight, 'kg e tem', height, 'cm de altura. Seu imc é, portanto, de,', imc,'.')

//é possível substituir a vírgula pelo sinas + para adicionar espaços. Observe, porém, que entre as variáveis não foi adicionado espaço corretamente
console.log(
    name + middleName + lastName + 'tem' + age + 'anos de idade, tendo nascido em' + yearBirth + '' +
        name + 'pesa' + weight + 'kg e tem' + height + 'cm de altura. Seu imc é, portanto, de' + imc )

/* porém, é preciso adicionar os espaços, do contrário ficará tudo grudado  
    para adicionar espaços:
    + ' ' + 
*/
console.log(
    name + ' ' +  middleName + ' ' +  lastName + ' ' +  'tem' + ' ' +  age + ' ' +  'anos de idade, tendo nascido em' + ' ' +  yearBirth + '.' + ' ' + 
    name + ' ' +  'pesa' + ' ' +  weight + ' ' +  'kg e tem' + ' ' +  height + ' ' +  'cm de altura. Seu imc é, portanto,' + ' ' +  imc + '' + '.')

/* também é possível utilizar strings
    Isto é: usar ´(crase) e, nas variáveis, ${}
    Veja abaixo o exemplo
*/
console.log(
    `${name} ${middleName} ${lastName} tem ${age} anos de idade tendo nascido em ${yearBirth}. 
    ${name} pesa ${weight} kg e tem ${height} cm de altura. Seu imc é portanto de ${imc}.`)