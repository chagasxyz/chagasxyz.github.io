document.addEventListener("DOMContentLoaded", () => {
  // CONFIGURAÇÃO DAS MEMÓRIAS COM FOTOS, TÍTULOS E TEXTOS PERSONALIZADOS
  const memorias = [
    { foto: "FOTOS/1_JUNTOS.jpg", titulo: "A primeira foto💚", texto: "O início de tudo, onde nossa história começou a ser escrita, aquele beijinho realmente me conquistou." },
    { foto: "FOTOS/2_HERHOUSE.jpg", titulo: "Conhecendo os sogros💚", texto: "A primeira vez na sua casa, conhecendo os sogros só como amigo kk." },
    { foto: "FOTOS/3_JUNINA.jpg", titulo: "A Festa junina💚", texto: "A primeira festa juntos, você toda nervosa com a sogra. Ali descobri que você não gosta de canela." },
    { foto: "FOTOS/4_CRISMA.jpg", titulo: "Sua Crisma💚", texto: "O dia em que conheci toda sua familia, eu tocando violão com o seu tio. Eu tava morrendo de vergonha." },
    { foto: "FOTOS/5_JULINA.jpg", titulo: "Festa Julina da Capela💚", texto: "Te apresentando para os meus amigos da igreja, quem diria que logo eles virariam seus também." },
    { foto: "FOTOS/6_NIVERJULIA.jpg", titulo: "Niver Júlia💚", texto: "Você estava linda, estar ao seu lado é sempre uma grande alegria, eu te amo meu amor." },
    { foto: "FOTOS/7_NIVERLEGAL.jpg", titulo: "Niver da Legal pra Caramba💚", texto: "Aqui junto com seus amigos, curtindo risadas, você marcando território, aiai." },
    { foto: "FOTOS/8_JANTARKARATE.jpg", titulo: "Jantar do Karatê💚", texto: "Te trazendo um pouquinho mais pro meu universo, e tendo um tempinho juntinhos." },
    { foto: "FOTOS/9_PORDOSOL24.jpg", titulo: "Pôr do Sol 2024💚", texto: "A primeira vez no por do sol juntinhos, curtindo a piscina e um ao outro dia e noite." },
    { foto: "FOTOS/10_ALIANÇA.jpg", titulo: "A Aliança💚", texto: "Nós dois cheios de lagrimas nos olhos. O símbolo concreto do nosso compromisso. " },
    { foto: "FOTOS/11_FORMATURA.jpg", titulo: "Sua Formatura💚", texto: "Celebrando mais uma conquista lado-a-lado e sabendo que venceremos cada etapa juntos." },
    { foto: "FOTOS/12_CANTATA.jpg", titulo: "Cantata de Natal💚", texto: "Sentindo a emoção das apresentações e medo do solo além da harmonia perfeita do nosso amor." },
    { foto: "FOTOS/13_NATAL24.jpg", titulo: "Natal 2024💚", texto: "O melhor presente de natal sempre será a sua presença e o seu abraço quentinho." },
    { foto: "FOTOS/14_CASAMENTO.jpg", titulo: "Casamento da Tia💚", texto: "Morrendo de medo, ter que tocar em um casamento, mas com você ao lado tudo fica mais fácil." }, 
    { foto: "FOTOS/15_PRAIA24.jpg", titulo: "Praia 2024💚", texto: "A primeira grande viagem juntos. Pés na areia, a brisa do mar e a paz de estar ao seu lado." },
    { foto: "FOTOS/16_MYNIVER25.jpg", titulo: "Meu Aniversário 2025💚", texto: "Comemorar meu aniversário ao seu lado faz todos os meus desejos de felicidade se realizarem." },
    { foto: "FOTOS/17_EXPO25.jpg", titulo: "Expo 2025💚", texto: "Dia de shows, risadas e muito romance na multidão, além do surgimento do segundo ursinho." },
    { foto: "FOTOS/18_CASAMENTOLUCAS.jpg", titulo: "Casamento do Lucas💚", texto: "Prestigiando a união de pessoas queridas e sonhando com o nosso futuro grande dia." },
    { foto: "FOTOS/19_1ANO.jpg", titulo: "1 Ano💚", texto: "Primeiro ano ao seu lado, Sou grato por te ter para mim, que venham muitos outros. (O Japa tava top)" },
    { foto: "FOTOS/20_1ANO_2.jpg", titulo: "1 Ano - Parte 2💚", texto: "Esse jantar foi maravilhoso, o garçom perguntando se queriamos vinho, tudo estava uma delícia." },
    { foto: "FOTOS/21_SESSÃOFOTOS.jpg", titulo: "Sessão de Fotos💚", texto: "Capturando a nossa essência e eternizando os nossos olhares apaixonados antes da sua festa." },
    { foto: "FOTOS/22_15ANOS.jpg", titulo: "Seus 15 Anos💚", texto: "Estar ao seu lado e falar que tudo vai dar certo é uma delicia, no final deu certo não deu?" },
    { foto: "FOTOS/23_15ANOS.jpg", titulo: "15 Anos - Parte 2💚", texto: "Feliz de poder comemorar ao seu lado momentos que ficaram guardados para sempre na memória." },
    { foto: "FOTOS/24_APARECIDA.jpeg", titulo: "Viagem para Aparecida💚", texto: "Concretizando um sonho seu e consagrando sob o manto da Cidinha o nosso relacionamento." },
    { foto: "FOTOS/25_FESTASP.jpg", titulo: "Casamento Tia Ana💚", texto: "Correria de tirar foto e tentar aproveitar a festa, cada foto doida saiu dai kk, mas demos conta." },
    { foto: "FOTOS/26_NIVERNICOLLY.jpg", titulo: "Aniversário da Nicolly💚", texto: "E no final, a gente dançando junto, um ao lado do outro, rindo e curtindo o momento." },
    { foto: "FOTOS/27_NATAL25.jpg", titulo: "Natal 2025💚", texto: "A gente passando o natal juntos, todo mundo na junto, a gente brincando com a Sky, foi tão gostoso." },
    { foto: "FOTOS/28_ANONOVO25.jpg", titulo: "Ano Novo 2025💚", texto: "A gente levando a clara pra escorregar foi com certeza a melhor parte, amo estar ao seu lado." },
    { foto: "FOTOS/29_PRAIA25.jpg", titulo: "Praia 2025💚", texto: "Praia esse ano, cheio de aventuras, além de medos, mas no final tudo foi maravilhoso. (Churras tava top)" },
    { foto: "FOTOS/30_PRAIA25.jpg", titulo: "Praia 2025 - Parte 2💚", texto: "Aproveitando intensamente cada segundo ao seu lado, cada risada e momento, Eu te amo." },
    { foto: "FOTOS/31_JOGOLON.jpg", titulo: "Jogo do Londrina💚", texto: "Ô chuvão em amor, além de perder, ainda tomar chuva. Mas pelo menos estavamos juntinhos." },
    { foto: "FOTOS/32_MYNIVER26.jpg", titulo: "Meu Aniversário 2026💚", texto: "Você me pegou somente até a minha casa, aquele monte de carro não tinha como disfarçar kkk." },
    { foto: "FOTOS/33_EXPO26.jpg", titulo: "Expo 2026💚", texto: "O show foi maravilhoso, e no final o lanche tava tão gostoso kk, mais um momento que ficará na história." },
    { foto: "FOTOS/34_PORDOSOL26.jpg", titulo: "Pôr do Sol 2026💚", texto: "Segunda vez no por do sol, aproveitando com você noite e dia, que orgulho de você, Minha corajosa." },
    { foto: "FOTOS/35_NIVER2026.jpg", titulo: "Aniversário Aleatório 2026💚", texto: "Cada coisa que a gente se enfia né kk, naquele breu dava um medinho, mas pelo menos tava do seu lado." }
  ];

  // CORREÇÃO DOS ARQUIVOS COM EXTENSÕES EM MAIÚSCULO NO WINDOWS/LINUX
  memorias[27].foto = "FOTOS/28_ANONOVO25.JPG";
  memorias[28].foto = "FOTOS/29_PRAIA25.JPG";

  // ATUALIZA CONTAGEM NO HEADER
  const totalMemoriasEl = document.getElementById("totalMemorias");
  if (totalMemoriasEl) {
    totalMemoriasEl.innerText = `${memorias.length} memórias 💚`;
  }

  // ELEMENTOS DO CARROSSEL
  const track = document.getElementById("track");
  const indicadores = document.getElementById("indicadores");
  let indiceAtual = 0;

  // CRIA AS IMAGENS DO CARROSSEL (UMA ÚNICA VEZ - CORRIGINDO DUPLICAÇÃO)
  memorias.forEach((memoria, index) => {
    const img = document.createElement("img");
    img.src = memoria.foto;
    img.alt = memoria.titulo;
    img.classList.add("slide");

    // Fotos com ajustes específicos
    if ([24, 26, 27].includes(index)) {
      img.classList.add("ajuste-esquerda");
    }

    // Ao clicar na foto do carrossel, abre o player daquela memória
    img.addEventListener("click", () => {
      carregarMemoria(index);
      abrirPlayerModal();
      setPlayState(true);
    });

    track.appendChild(img);
  });

  // CRIA OS INDICADORES (BOLINHAS)
  function criarIndicadores() {
    indicadores.innerHTML = "";
    memorias.forEach((_, index) => {
      const bolinha = document.createElement("div");
      bolinha.classList.add("bolinha");
      if (index === indiceAtual) {
        bolinha.classList.add("ativa");
      }
      
      // Clicar nas bolinhas muda o carrossel e o player carregado
      bolinha.addEventListener("click", () => {
        carregarMemoria(index);
      });
      
      indicadores.appendChild(bolinha);
    });
  }

  // ATUALIZA TRANSLAÇÃO DO CARROSSEL
  function atualizarCarrossel() {
    track.style.transform = `translateX(-${indiceAtual * 100}%)`;
    criarIndicadores();
  }

  // NAVEGAÇÃO DO CARROSSEL
  function proximaMemoria() {
    let index = indiceAtual + 1;
    if (index >= memorias.length) index = 0;
    carregarMemoria(index);
  }

  function anteriorMemoria() {
    let index = indiceAtual - 1;
    if (index < 0) index = memorias.length - 1;
    carregarMemoria(index);
  }

  document.getElementById("next").addEventListener("click", proximaMemoria);
  document.getElementById("prev").addEventListener("click", anteriorMemoria);

  // SUPORTE A ARRASTAR COM O DEDO NO CELULAR (SWIPE)
  let startX = 0;
  let endX = 0;

  track.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
  }, { passive: true });

  track.addEventListener("touchend", (e) => {
    endX = e.changedTouches[0].clientX;
    const distancia = startX - endX;

    if (distancia > 50) proximaMemoria();
    else if (distancia < -50) anteriorMemoria();
  }, { passive: true });

  // INICIALIZA CARROSSEL
  atualizarCarrossel();


  // CONTROLLER DO AUDIO REAL E PLAYER SPOTIFY
  const audioPlayer = document.getElementById("audioPlayer");
  const playerModal = document.getElementById("playerModal");
  const playBtn = document.getElementById("playBtn"); // Play flutuante no carrossel
  const fecharPlayer = document.getElementById("fecharPlayer");
  
  const mainPlayBtn = document.getElementById("mainPlayBtn"); // Play verde do topo
  const playPauseBtn = document.getElementById("playPauseBtn"); // Play do modal
  const anteriorBtn = document.getElementById("anteriorBtn");
  const proximoBtn = document.getElementById("proximoBtn");
  
  const barraProgresso = document.getElementById("barraProgresso");
  const progressoAtivo = document.getElementById("progressoAtivo");
  const tempoAtualEl = document.getElementById("tempoAtual");
  const tempoTotalEl = document.getElementById("tempoTotal");
  
  const volumeBar = document.getElementById("volumeBar");
  const volumeAtivo = document.getElementById("volumeAtivo");

  let isPlaying = false;

  // Carrega a memória ativa nos campos do Modal Player
  function carregarMemoria(index) {
  indiceAtual = index;

  const foto = document.getElementById("playerFoto");

  foto.src = memorias[indiceAtual].foto;
  foto.style.objectPosition = "center center";

  // Foto 11 - Formatura
  if (indiceAtual === 10) {
    foto.style.objectPosition = "center 20%";
  }

  // Foto 21 - Sessão de Fotos
  if (indiceAtual === 20) {
    foto.style.objectPosition = "center 5%";
  }

  document.getElementById("playerTitulo").innerText =
    memorias[indiceAtual].titulo;

  document.getElementById("playerTexto").innerText =
    memorias[indiceAtual].texto;

  atualizarCarrossel();
}

  // Abre e fecha o Modal do Player
  function abrirPlayerModal() {
    playerModal.classList.add("mostrar");
  }

  function fecharPlayerModal() {
    playerModal.classList.remove("mostrar");
  }

  if (playBtn) {
    playBtn.addEventListener("click", () => {
      carregarMemoria(indiceAtual);
      abrirPlayerModal();
      setPlayState(true);
    });
  }

  if (fecharPlayer) {
    fecharPlayer.addEventListener("click", fecharPlayerModal);
  }

  // Fecha clicando fora do card do player
  playerModal.addEventListener("click", (e) => {
    if (e.target === playerModal) {
      fecharPlayerModal();
    }
  });

  // FORMATADOR DE TEMPO (EX: 2:45)
  function formatarTempo(segundos) {
    if (isNaN(segundos)) return "0:00";
    const min = Math.floor(segundos / 60);
    const seg = Math.floor(segundos % 60);
    return `${min}:${seg < 10 ? "0" : ""}${seg}`;
  }

  // CONTROLE DO ESTADO DE REPRODUÇÃO (PLAY/PAUSE)
  function setPlayState(state) {
    isPlaying = state;
    if (isPlaying) {
      audioPlayer.play().then(() => {
        // Altera ícone de Play no topo para Pause (esconde triângulo, mostra duas barras)
        document.getElementById("playIconSvg").classList.add("hidden");
        document.getElementById("pauseBar1").classList.remove("hidden");
        document.getElementById("pauseBar2").classList.remove("hidden");

        // Altera ícone no Modal Player para Pause
        document.getElementById("modalPlaySvg").classList.add("hidden");
        document.getElementById("modalPause1").classList.remove("hidden");
        document.getElementById("modalPause2").classList.remove("hidden");
      }).catch(err => {
        console.log("Reprodução automática bloqueada temporariamente. Aguardando interação.", err);
      });
    } else {
      audioPlayer.pause();
      // Altera ícone de Play no topo para Play (mostra triângulo, esconde barras)
      document.getElementById("playIconSvg").classList.remove("hidden");
      document.getElementById("pauseBar1").classList.add("hidden");
      document.getElementById("pauseBar2").classList.add("hidden");

      // Altera ícone no Modal Player para Play
      document.getElementById("modalPlaySvg").classList.remove("hidden");
      document.getElementById("modalPause1").classList.add("hidden");
      document.getElementById("modalPause2").classList.add("hidden");
    }
  }

  // Cliques de Play/Pause
  mainPlayBtn.addEventListener("click", () => {
    carregarMemoria(indiceAtual);
    abrirPlayerModal();
    setPlayState(true);
  });

  playPauseBtn.addEventListener("click", () => {
    setPlayState(!isPlaying);
  });

  // Botões de Anterior e Próximo no Player Modal
  proximoBtn.addEventListener("click", proximaMemoria);
  anteriorBtn.addEventListener("click", anteriorMemoria);

  // EVENTOS DO ELEMENTO DE ÁUDIO
  audioPlayer.addEventListener("loadedmetadata", () => {
    tempoTotalEl.innerText = formatarTempo(audioPlayer.duration);
  });

  audioPlayer.addEventListener("timeupdate", () => {
    tempoAtualEl.innerText = formatarTempo(audioPlayer.currentTime);
    const pct = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    progressoAtivo.style.width = `${pct}%`;
  });

  // Clique na Barra de Progresso para seek (avançar/retroceder)
  barraProgresso.addEventListener("click", (e) => {
    const rect = barraProgresso.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;
    const pct = clickX / width;
    
    if (audioPlayer.duration) {
      audioPlayer.currentTime = pct * audioPlayer.duration;
      // Garante que o áudio continue tocando
      if (!isPlaying) setPlayState(true);
    }
  });

  // CONTROLE DO SLIDER DE VOLUME
  audioPlayer.volume = 0.8; // volume inicial 80%
  volumeAtivo.style.width = "80%";

  volumeBar.addEventListener("click", (e) => {
    const rect = volumeBar.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;
    let vol = clickX / width;
    
    vol = Math.max(0, Math.min(1, vol)); // clamp entre 0 e 1
    audioPlayer.volume = vol;
    volumeAtivo.style.width = `${vol * 100}%`;
  });


  // BOTÃO DO CORAÇÃO / FAVORITAR (EFEITO TOAST DO SPOTIFY)
  const btnFavorito = document.getElementById("btn");
  const msg = document.getElementById("msg");
  const heartBtn = btnFavorito.querySelector(".action-btn-heart");
  let msgTimeout;

  if (btnFavorito && msg) {
    btnFavorito.addEventListener("click", (e) => {
      e.stopPropagation();
      heartBtn.classList.toggle("heart-active");
      msg.classList.toggle("mostrar");

      // Limpa timeouts anteriores
      clearTimeout(msgTimeout);

      if (msg.classList.contains("mostrar")) {
        // Esconde o toast após 3 segundos
        msgTimeout = setTimeout(() => {
          msg.classList.remove("mostrar");
        }, 3000);
      }
    });
  }

  // BOTÃO DO RELÓGIO (ROLA ATÉ O CONTADOR)
  const timeBtn = document.getElementById("timeBtn");
  if (timeBtn) {
    timeBtn.addEventListener("click", () => {
      document.getElementById("contador-section").scrollIntoView({
        behavior: "smooth"
      });
    });
  }


  // CONTADOR DE TEMPO JUNTOS (DESDE 12 DE JUNHO DE 2024 ÀS 19:00:00)
  function atualizarContador() {
    const inicio = new Date(2024, 5, 12, 19, 0, 0); // 12/Jun/2024 às 19:00:00
    const agora = new Date();

    let anos = agora.getFullYear() - inicio.getFullYear();
    let meses = agora.getMonth() - inicio.getMonth();
    let dias = agora.getDate() - inicio.getDate();

    let horas = agora.getHours() - inicio.getHours();
    let minutos = agora.getMinutes() - inicio.getMinutes();
    let segundos = agora.getSeconds() - inicio.getSeconds();

    // Ajustes matemáticos de datas negativas
    if (segundos < 0) { segundos += 60; minutos--; }
    if (minutos < 0) { minutos += 60; horas--; }
    if (horas < 0) { horas += 24; dias--; }

    if (dias < 0) {
      const ultimoMes = new Date(agora.getFullYear(), agora.getMonth(), 0);
      dias += ultimoMes.getDate();
      meses--;
    }

    if (meses < 0) { meses += 12; anos--; }

    // Atualiza o DOM
    const elAnos = document.getElementById("anos");
    const elMeses = document.getElementById("meses");
    const elDias = document.getElementById("dias");
    const elHoras = document.getElementById("horas");
    const elMin = document.getElementById("minutos");
    const elSeg = document.getElementById("segundos");

    if (elAnos) elAnos.innerText = anos;
    if (elMeses) elMeses.innerText = meses;
    if (elDias) elDias.innerText = dias;
    if (elHoras) elHoras.innerText = horas;
    if (elMin) elMin.innerText = minutos;
    if (elSeg) elSeg.innerText = segundos;
  }

  // Executa o relógio em tempo real a cada 1 segundo
  setInterval(atualizarContador, 1000);
  atualizarContador();
});