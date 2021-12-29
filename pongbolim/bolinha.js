//variáveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 9;
let raio = diametro / 2 ;

//velocidade da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 4;


let colisao = false;

function mostraBolinha(){
  
  fill('white')
  noStroke();
  circle(xBolinha, yBolinha, diametro);
}

  function movimentaBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
  
}

function verificaColisaoBorda(){
  if (xBolinha + raio> width || xBolinha - raio< 0){
    velocidadeXBolinha *= -1;
  }
  
  if (yBolinha + raio> height || yBolinha - raio < 0){
    velocidadeYBolinha *= -1;
  }
}

function posicaoInicialDaBola(){
  xBolinha = 300;
  yBolinha = 200; 
  velocidadeXBolinha *= -1;
}
