const nome="Ana Westhpal";
let nome2 = "";
let pessoaDefault = {
    nome: "Ana Westhpal",
    idade: "33",
    trabalho:"Publicitária"
}

let nomes = ["Ana Westhpal", "Manoela Machado", "Phantom"];

let pessoasLustaVazia = [];

let pessoas = [
    {
        nome: "Ana Westhpal",
        idade: "33",
        trabalho:"Publicitária",   
    },
    {
        nome: "Manoela Machado",
        idade: "39",
        trabalho:"Engenheira Ambiental"
    }
];


function alterarNome () {
    nome2 = "Phantom";
    console.log("Valor alterado:");
    console.log(nome2);
}

function recebeEalteraNome(novoNome) {
    nome2 = novoNome;
    console.log("Valor alterado recebendo um nome:");
    console.log(nome2);
}

function imprimirPessoa(pessoa) {
    console.log("Nome:");
    console.log(pessoa.nome);

    console.log("Idade:");
    console.log(pessoa.idade);

    console.log("Trabaho:");
    console.log(pessoa.trabalho);
}

function adicionarPessoa(pessoa) {
    pessoas.push(pessoa);
}

function imprimirPessoas() {
    console.log("------IMPRIMIR PESSOAS------")
    pessoas.forEach((item) => {
        console.log("Nome:");
        console.log(item.nome);

        console.log("Idade:");
        console.log(item.idade);
    
        console.log("Trabaho:");
        console.log(item.trabalho);
    })
}

imprimirPessoas();

adicionarPessoa ({
    nome: "Phantom",
    idade: "10",
    trabalho: "incomodar a noite",
});

imprimirPessoas();

//imprimirPessoa(pessoaDefault);

// imprimirPessoa( {
// nome: "Manoela Machado",
// idade: "39",
// trabalho:"Egenheira Ambiental"
//})

//recebeEalteraNome("Blake");
//recebeEalteraNome("Gorila");

//alterarNome();