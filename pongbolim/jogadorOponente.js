//zagueiro oponente
let xZagueiroOponente = [475];
let yZagueiroOponente = [150];
//AtacanteOponente
let xAtacanteOponente = [210];
let yAtacanteOponente = [150];

let velocidadeYOponente;

function mostraJogadoresOponente(){
  for(let i = 0; i < xAtacante.length; i++){
    fill(color(255,0,0));
    rect(xAtacanteOponente[i], yAtacanteOponente[i], jogadorComprimento, jogadorAltura, jogadorRaio);
    rect(xZagueiroOponente[i], yZagueiroOponente[i],
       jogadorComprimento, jogadorAltura, jogadorRaio);
  }
}

function verificaColisaoAtacanteOponente(){
  for(let i = 0; i < xAtacante.length; i++){
    colidiu = collideRectCircle(xAtacanteOponente[0],yAtacanteOponente[0], jogadorComprimento, jogadorAltura, xBolinha, yBolinha, raio);
  if(colidiu){
    velocidadeXBolinha *= -1;
    raquetada.play();
    }
  }
}

function verificaColisaoZagueiroOponente(){
  for(let i = 0; i < xAtacante.length; i++){
    colidiu = collideRectCircle(xZagueiroOponente[i], yZagueiroOponente[i], jogadorComprimento, jogadorAltura, xBolinha, yBolinha, raio);
  if(colidiu){
    velocidadeXBolinha *= -1;
    raquetada.play();
    }
  }
}

function movimentaJogadorAdversario(){
  if (keyIsDown(UP_ARROW)){
    if(moverParaCimaOponente()){
      yAtacanteOponente[0] -= 10;
      yZagueiroOponente[0] -= 10;
  }
}
  if (keyIsDown(DOWN_ARROW)){
    if(moverParaBaixoOponente()){
      yAtacanteOponente[0] += 10;
      yZagueiroOponente[0] += 10;
    }
  }
}

function moverParaBaixoOponente(){
  return yZagueiroOponente < 300;
}

function moverParaCimaOponente(){
  return yZagueiroOponente > 5;
}
