function carregarEmocoes(){
    var emocoes = {
        emocao01: {
            imagem: "assets/alegria.jpg.webp",
            nome: "Alegria",
            descricao: "Uma das protagonistas do primeiro filme, é Alegria, a primeira emoção a aparecer na mente de Riley. Atuando como líder, ela não poupa esforços para manter a protagonista feliz. Ela está confirmada e já apareceu nas imagens da sequência da animação.",
            classe: "alegria"},
        emocao02: {
            imagem: "./assets/raiva.webp",
            nome: "Raiva",
            descricao: "Como seu nome já menciona, o Raiva é responsável pelos momentos de fúria da personagem. Movido pela paixão de garantir que as coisas sejam justas para Riley, ele possui um espírito impetuoso e tende a literalmente explodir quando as coisas saem do planejado.",
            classe: "raiva"},
        emocao03: {
            imagem: "./assets/tristeza.jpg.webp",
            nome: "Tristeza",
            descricao: "Assim como a Alegria está presente na vida de Riley, a Tristeza também está. Incompreendida pelas outras emoções, Tristeza constantemente tenta ser mais otimista e útil para Riley, mas acha muito difícil ser positiva, muitas vezes se rendendo a deitar no chão e chorar.",
            classe: "tristeza"},
        emocao04: {
            imagem: "./assets/medo.webp",
            nome: "Medo",
            descricao: "Após sentir Tristeza, Riley presenciou o Medo, outra emoção presente no 1º filme. Preocupado com a segurança e bem-estar da personagem, a emoção é sempre muito preocupada com as escolhas que a protagonista faz em sua vida, sempre agindo com cautela e desconfiança.",
            classe: "medo"},
        emocao05: {
            imagem: "./assets/nojinho.webp",
            nome: "Nojinho",
            descricao: "Honesta, teimosa e cética são algumas características da emoção Nojinho, que tem como uma de suas metas, evitar que Riley seja envenenada, tanto fisicamente, quanto socialmente. Da cor verde, Nojinho sempre tem a melhor das intenções e se recusa a diminuir seus padrões.",
            classe: "nojinho"},
        emocao06: {
            imagem: "./assets/ansiedade.webp",
            nome: "Ansiedade",
            descricao: "A primeira emoção apresentada no novo filme, é a Ansiedade, que chega assim que Riley entra na adolescência. De aparência nervosa, ela literalmente sempre carrega a sua bagagem de preocupações. Assim como a Alegria, ela também possui o ímpeto de estar no controle e de livrar Riley dos perigos da vida.",
            classe: "ansiedade"},
        emocao07: {
            imagem: "./assets/tedio.webp",
            nome: "Tedio",
            descricao: "Outra nova emoção é Tédio, que está sempre apático, preguiçoso e sem muita expressão. Até a forma que a emoção fala é de forma monótona e desinteressada ao interagir com as demais emoções de Riley.",
            classe: "tedio"},
        emocao08: {
            imagem: "./assets/inveja.webp",
            nome: "Inveja",
            descricao: "Outra novidade de “Divertida Mente 2” é a emoção Inveja, que sempre sabe o que quer. Com ciúmes do que todo mundo tem, ela sempre aparenta ter fascínio pelas coisas mais novas que chamam a sua atenção.",
            classe: "inveja"},
        emocao09: {
            imagem: "assets/vergonha.webp",
            nome: "Vergonha",
            descricao: "o contrário da Inveja, que é pequena, a Vergonha é caracterizada por um gigante gentil e rosa, que quer se esconder e dificilmente, consegue passar despercebido. Ele ainda é silencioso e usa um moletom como um esconderijo embutido.",
            classe: "vergonha"}
        }

var conteudo = document.getElementById("conteudo")

for (var emocao in emocoes) {
    conteudo.innerHTML += 
    '<div class="card ' + emocoes[emocao].classe + '">' + 
    '<img src = "' +
    emocoes[emocao].imagem +
    '"/>' + 
    "<details>" +
    "<summary>" + 
    emocoes[emocao].nome + 
    "</summary>" + 
    '<p>'+
    emocoes[emocao].descricao +
    "</p>" + 
    '</details>' + 
    '</div>'
    ;
    }
}

carregarEmocoes();