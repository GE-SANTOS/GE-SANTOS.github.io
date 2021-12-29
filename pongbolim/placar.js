//placar do jogo
let meusPontos = 0;
let pontosDoOponente = 0;

//chance de errar do oponente
let chanceDeErrar = 0;

function incluiPlacar() {
    strokeWeight(1.5);
    stroke(240,248,255);
    textAlign(CENTER);
    textSize(16);
    fill(color(0,0,255));
    rect(150, 19, 40, 20);
    fill(240,248,255);
    text(meusPontos, 170, 35);
    fill(color(255,0,0));
    rect(405, 19, 40, 20);
    fill(240,248,255);
    text(pontosDoOponente, 425, 35);
    fill("white");
    stroke("white");
    text("PREGUIÇA F.C", 425, 15);
    text("ESFORÇO F.C", 170, 15);
}

function marcaPonto(){
    colisaoGol(xGols[1], yGols[0]);
    if(colisao){
      meusPontos ++;
      posicaoInicialDaBola();
      ponto.play();
  }

    colisaoGol(xGols[0], yGols[0]);
    if (colisao){
      pontosDoOponente ++;
      posicaoInicialDaBola();
      ponto.play();
  }
}

function calculaChanceDeErrar() {
  if (pontosDoOponente == meusPontos) {
    chanceDeErrar += 1
    if (chanceDeErrar >= 30){
    chanceDeErrar = 30
    }
  } else {
    chanceDeErrar -= 1
    if (chanceDeErrar <= 40){
    chanceDeErrar = 39
    }
  }
}


