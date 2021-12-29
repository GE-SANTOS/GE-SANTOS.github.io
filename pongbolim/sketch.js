function setup() {
  createCanvas(600, 400);
  trilha.loop();
  
  print("********************** PongBolim ***********************");
  print("Informações importantes:")
  print("Use as teclas W e S para movimentar o time ESFORÇO, e as teclas seta ⬆ e seta ⬇ para movimentar o time PREGUIÇA.");

  print("Boa Sorte!!!");
  
}

function draw() {
  background(34,139,34);
  mostrarCampo();
  grandeArea();
  pequenaArea();
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraJogadores();
  mostraJogadoresOponente();
  movimentaMeuJogador();
  movimentaJogadorAdversario();
  verificaColisaoAtacante();
  verificaColisaoZagueiro();
  verificaColisaoAtacanteOponente();
  verificaColisaoZagueiroOponente();
  incluiPlacar();
  marcaPonto();
  calculaChanceDeErrar();
  mostraGol(xGols[0], yGols[0]);
  mostraGol(xGols[1], yGols[0]);
  colisaoGol(xGols[0], yGols[0]);
  colisaoGol(xGols[1], yGols[0]);
  moverParaBaixo();
  moverParaCima();
  
}
