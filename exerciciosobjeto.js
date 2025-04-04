//Exercícios de objetos


//Complete o código abaixo para criar um objeto carro com as propriedades marca, modelo e ano. Depois, exiba essas propriedades no console.
const carro = {
    marca: 'Chevrolet',
    modelo: "Celta",
    ano: 2012

};
console.log(carro.marca); 
console.log(carro.modelo); 
console.log(carro.ano);  


//Remova a propriedade email do objeto usuario e depois exiba o objeto para verificar.
const usuario = {
    nome: "Fernanda",
    email: "fernanda@email.com",
    idade: 25
};
delete usuario.email
console.log(usuario); 


//Complete o código para alterar a idade da pessoa para 31 anos e depois exiba a nova idade.
const pessoa = {
    nome: "Carlos",
    idade: 29
};
pessoa.idade = 31
console.log(pessoa.idade); 
