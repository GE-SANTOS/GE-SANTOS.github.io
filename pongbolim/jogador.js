//variáveis do jogador
let jogadorRaio = 15;
let jogadorComprimento = 15;
let jogadorAltura = 100;
//zagueiro
let xZagueiro = [110];
let yZagueiro = [150];
//atacante
let xAtacante = [375];
let yAtacante = [150];

let colidiu = false;

function mostraJogadores(){
  for(let i = 0; i < xAtacante.length; i++){
    stroke("white");
    fill(color(0,0,255));
    rect(xAtacante[i], yAtacante[i], jogadorComprimento, 
      jogadorAltura, jogadorRaio);
    rect(xZagueiro[i], yZagueiro[i], jogadorComprimento, 
      jogadorAltura, jogadorRaio); 
  }
}

function verificaColisaoAtacante(){
  for(let i = 0; i < xAtacante.length; i++){
    colidiu = collideRectCircle(xAtacante[i],yAtacante[i],jogadorComprimento, jogadorAltura, xBolinha, yBolinha, raio);
  if(colidiu){
    velocidadeXBolinha *= -1;
    raquetada.play();
    }
  }
}

function verificaColisaoZagueiro(){
  for(let i = 0; i < xZagueiro.length; i++){
    colidiu = collideRectCircle(xZagueiro[i],yZagueiro[i], jogadorComprimento, jogadorAltura, xBolinha, yBolinha, raio);
  if(colidiu){
    velocidadeXBolinha *= -1;
    raquetada.play();
    }
  }
}

function movimentaMeuJogador(){
  if (keyIsDown(87)){
    if(moverParaCima()){
      yAtacante[0] -= 10;
      yZagueiro[0] -= 10;
  }
}
  if (keyIsDown(83)){
    if(moverParaBaixo()){
      yAtacante[0] += 10;
      yZagueiro[0] += 10;
    }
  }
}

function moverParaBaixo(){
  return yZagueiro < 300;
}

function moverParaCima(){
  return yZagueiro > 5;
}

