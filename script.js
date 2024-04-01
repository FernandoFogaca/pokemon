console.log("Página aberta");

// Função para executar o código
// Buscar um pokemon na API do pokemon
// https://pokeapi.co/api/v2/pokemon/6/
// Como fazer:
// Entrada de dados
// 1 - Pegar o ID do pokemon no input do HTML
// Processamento
// 2 - Completar a URL da API com o ID do pokemon
// 3 - Fazer uma requisição para a API com um método fetch
// Saída de dados
// 4 - Pegar o resultado da requisição e transformar em JSON
// 5 - Pegar o nome do pokemon e exibir na tela.

async function executar() {
    // Entrada de dados
    let idPokemon = document.getElementById("input").value

    // Processamento
    let url = `https://pokeapi.co/api/v2/pokemon/${idPokemon}/`;

   

    fetch(url)
        .then(response => response.json())
        .then(data => {
            // Saída de dados
            let nomePokemon = data.name;
            let imagemPokemon = data.sprites.front_default;

            document.getElementById("nomePokemon").innerText = nomePokemon;
            document.getElementById("imagemPokemon").src = imagemPokemon;
        })
        .catch(error => {
            console.log("Erro ao buscar o pokemon: " + error);
        });

        
}
