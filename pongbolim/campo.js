//variaveis do campo
let xCampo = 10;
let yCampo = 18;
let campoLargura = 580;
let campoAltura = 365;

//variaveis pequena área
let xAreas = [10, 555];
let yAreas = [155, 155];
let areaLargura = 35;
let areaAltura = 100;

//variaveis grande área
let xGAreas = [10, 525];
let yGAreas = [129, 129];
let gAreaLargura = 65;
let gAreaAltura = 150;

//gols
let xTraves = [2, 590];
let yTraves = [160, 160];
let traveAltura = 90;
let traveComprimento= 8;

//Campo de futebol
function mostrarCampo(){
  strokeWeight(2);
  stroke(245,255,250);
  noFill();
  rect(xCampo, yCampo, campoLargura, campoAltura);
  fill('white');
  line(300, 20, 300, 383); // linha central
   //Círculo meio de campo
  arc(300, 200, 4, 4, PI, 3*PI);
  noFill();
  arc(300, 200, 110, 110, PI, 3*PI); 
  //escanteio
  noFill();
  strokeWeight(2.5);
  arc(10, 18, 40, 40, 0, HALF_PI);
  arc(590, 18, 40, 40, PI / 2, PI);
  arc(590, 383, 40, 40, PI, 3*PI/2);
  arc(10, 383, 40, 40, 3*PI/2, 0);
}
  
//pequena área
function pequenaArea(){
  for(let i = 0; i < xAreas.length; i++){
    strokeWeight(2);
    noFill();
    rect(xAreas[i], yAreas[i], areaLargura, areaAltura);
    rect(xTraves[i], yTraves[i], traveComprimento, 
      traveAltura);
    fill("white")
    arc(60, 200, 3, 3, PI, 3*PI);//círculo pequena área
    arc(540, 200, 3, 3, PI, 3*PI);//círculo pequena área oponente
  }
}
  
//grande área
  function grandeArea(){
    for(let i = 0; i < xGAreas.length; i++){
      strokeWeight(2);
      rect(xGAreas[i], yGAreas[i], gAreaLargura, gAreaAltura);
      arc(75, 200, 50, 50, 3*PI/2, PI/2);
      arc(525, 200, 50, 50, PI/2, 3*PI/2);
  }
}
  
  
  
