var jardimImg;
var gato, gatoImg, gatoImg2, rato, ratoImg, ratoImg2,  ratoImg3, gatoImg3;


function preload() {
    //carregue as imagens aqui
    jardimImg = loadImage("images/garden.png");
    gatoImg = loadAnimation("images/cat1.png");
    ratoImg = loadAnimation("images/mouse1.png");
    ratoImg2 = loadAnimation("images/mouse2.png", "images/mouse3.png");
    gatoImg2 = loadAnimation("images/cat2.png", "images/cat3.png");
    gatoImg3 = loadAnimation("images/cat4.png");
    ratoImg3 = loadAnimation("images/mouse4.png");
}

function setup() {
    createCanvas(1000, 800);

  rato = createSprite(200, 700, 20, 20);
    rato.addAnimation("mouse", ratoImg);
    rato.scale = 0.1;
 
   
                
    gato = createSprite(800, 700, 20, 20);
    gato.addAnimation("cat", gatoImg);
    gato.scale = 0.1;

  

    //crie os sprites de gato e rato aqui


}

function draw() {

    background(jardimImg);
    //Escreva a condição aqui para avaliar se o gato e o rato colidem

    if (gato.x - rato.x < (gato.width - rato.width)/2) {
        gato.addAnimation("gatoFinal", gatoImg3);
        gato.changeAnimation("gatoFinal", gatoImg3);

        rato.addAnimation("ratoFinal", ratoImg3);
        rato.changeAnimation("ratoFinal", ratoImg3);

        gato.velocityX = 0;


    }






    drawSprites();
}


function keyPressed() {

    if (keyCode === LEFT_ARROW) {

        rato.addAnimation("provocando", ratoImg2);
        rato.changeAnimation("provocando", ratoImg2);
        rato.frameDelay = 25;

        gato.addAnimation("andando", gatoImg2);
        gato.changeAnimation("andando", gatoImg2);
        gato.velocityX = -5;
        gato.scale = 0.2;
        gato.frameDelay = 6;
    }


}
