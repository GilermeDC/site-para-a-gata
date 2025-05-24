function atualizarContador() {
  const dataInicio = new Date("2022-11-13");
  const agora = new Date();
  const diff = agora - dataInicio;

  const diasTotais = Math.floor(diff / (1000 * 60 * 60 * 24));
  const anos = Math.floor(diasTotais / 365);
  const diasRestantesAno = diasTotais % 365;

  const meses = Math.floor(diasRestantesAno / 30.44); 
  const diasRestantesMes = diasRestantesAno % 30.44;

  const semanas = Math.floor(diasRestantesMes / 7);
  const dias = Math.floor(diasRestantesMes % 7);

  const contador = document.getElementById("contador");
  contador.textContent = `Há ${anos} anos, ${meses} meses, ${semanas} semanas e ${dias} dias, conheci o amor da minha vida 💖`;
}
atualizarContador();
setInterval(atualizarContador, 1000 * 60 * 60);


const imagens = [
  'foto1.jpg',
  'foto2.jpg',
  'foto3.png',
  'foto4.jpg',  // ← essa é a PNG
  'foto5.jpg',
  'foto6.jpg',
  'foto7.jpg',
  'foto8.jpg',
  'foto9.jpg',
  'foto10.jpg'
];

let indiceAtual = 0;

function mudarImagem(direcao) {
  indiceAtual += direcao;

  if (indiceAtual < 0) {
    indiceAtual = imagens.length - 1;
  } else if (indiceAtual >= imagens.length) {
    indiceAtual = 0;
  }

  const imagem = document.getElementById('imagem');
  imagem.src = `imagens/${imagens[indiceAtual]}`;
}
function tocarMusica() {
    const musica = document.getElementById("musicaFundo");
    musica.play();
    document.getElementById("botaoMusica").style.display = "none";
  }
  