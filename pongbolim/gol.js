//variáveis do gol
let golComprimento = 3;
let golAltura = 80;
//gols
let xGols = [7, 590];
let yGols = [165, 165];

function mostraGol(){
  for(let i = 0; i < xGols.length; i++){
    stroke(245,255,250);
    rect(xGols[i], yGols[i], golComprimento, 
      golAltura);
  }
}

function verificaColisaoGol(){
  for(let i = 0; i < xGols.length; i++){
    if (xBolinha - raio < xGols[i] + golComprimento &&   yBolinha - raio < yGols[i] + golAltura && yBolinha + raio > yGol[i]){
    velocidadeXBolinha *= -1;
    }
  }
}

function colisaoGol(x,y){
  for(let i = 0; i < xGols.length; i++){
    colisao =
    collideRectCircle(x, y, golComprimento,     golAltura, xBolinha, yBolinha, raio);
  if(colisao){
    velocidadeXBolinha *= -1;
    }
  }
}
