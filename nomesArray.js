// Entrada de dados

// Criar variavel para receber arrays de nomes
 const nomes = ["Raphael", "Claudia", "Paulo", "Luis", "Karen"];

 // Criar variavel para receber arrays de sobrenomes
 const sobrenomes = ["Perdigão", "Perdigão", "Perdigão", "Perdigão", "Perdigão"]

 // Processameto

// Criar variavel para ajuntar o nomes e sobrenomes

// Map altera um array nomes - pegar um array principal no caso o nomes
 const nomeCompletos = nomes.map((nome, index) => {

    return `${nome} ${sobrenomes[index]}`;
  
 });

 // Foreach para listar os nomes completos
   nomeCompletos.forEach((listaNomes) => {
      
// Saída de dados
   return console.log(listaNomes);
      
 })



 // Saída de dados
//  console.log("Nomes:", nomes);
//  console.log("Sobrenomes:", sobrenomes);
//  console.log("Nomes Completos:", nomeCompletos);
