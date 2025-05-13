// DATA DO INÍCIO DO RELACIONAMENTO (altere aqui)
const dataInicio = new Date("2022-11-13");

// Atualiza contador
function atualizarContador() {
  const agora = new Date();
  const diff = agora - dataInicio;

  const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
  const anos = Math.floor(dias / 365);
  const diasRestantes = dias % 365;

  const contador = document.getElementById("contador");
  contador.textContent = `Há ${anos} anos e ${diasRestantes} dias, conheci o amor da minha vida 💖`;
}

atualizarContador();
setInterval(atualizarContador, 1000 * 60 * 60); // Atualiza a cada hora

// Carrossel de imagens
const imagens = [
  "imagens/foto1.jpg",
  "imagens/foto2.jpg",
  "imagens/foto3.jpg",
  "imagens/foto4.jpg",
  "imagens/foto5.jpg",
  "imagens/foto6.jpg",
  "imagens/foto7.jpg",
  "imagens/foto8.jpg",
  "imagens/foto9.jpg",
  "imagens/foto10.jpg"
];

let indiceAtual = 0;

function mudarImagem(direcao) {
  indiceAtual = (indiceAtual + direcao + imagens.length) % imagens.length;
  document.getElementById("imagem").src = imagens[indiceAtual];
}
function tocarMusica() {
    const musica = document.getElementById("musicaFundo");
    musica.play();
    document.getElementById("botaoMusica").style.display = "none";
  }
  