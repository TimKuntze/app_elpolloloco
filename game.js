let canvas;
let ctx;
let character_x = 80;
let character_y = 190;
let characterEnergyImage = ['material/7.Marcadores/Barra/Marcador_vida/azul/100_.png', 'material/7.Marcadores/Barra/Marcador_vida/azul/80_.png', 'material/7.Marcadores/Barra/Marcador_vida/azul/60_.png', 'material/7.Marcadores/Barra/Marcador_vida/azul/40_.png', 'material/7.Marcadores/Barra/Marcador_vida/azul/20_.png', 'material/7.Marcadores/Barra/Marcador_vida/azul/0_.png'];
let currentEnergyImage = 'material/7.Marcadores/Barra/Marcador_vida/azul/100_.png';
let character_energy = 100;
let bottle_energy = ['material/7.Marcadores/Barra/Marcador_botella/Azul/0_.png', 'material/7.Marcadores/Barra/Marcador_botella/Azul/20_.png', 'material/7.Marcadores/Barra/Marcador_botella/Azul/40_.png', 'material/7.Marcadores/Barra/Marcador_botella/Azul/60_.png', 'material/7.Marcadores/Barra/Marcador_botella/Azul/80_.png', 'material/7.Marcadores/Barra/Marcador_botella/Azul/100_.png'];
let currentBottleImage = 'material/7.Marcadores/Barra/Marcador_botella/Azul/0_.png';
let collectedBottles = 0;
let bottleThrowTime = 0;
let finalBossEnergy = 100;
let bossDedeatedAt = 0;
let isMovingRight = false;
let isMovingLeft = false;
let isJumping = false;
let lastJumpStarted = 0;
let bg_elements = 0;
let movingBackgroundLayer1 = 1;
let movingBackgroundLayer2 = 1;
let movingBackgroundLayer3 = 1;
let movingBackgroundLayerClouds = 1;
let movingChickens = 1;
let currentBottleThrowImage = 'material/6.botella/Rotacion/Mesadetrabajo1copia3.png';
let bottleThrowImages = ['material/6.botella/Rotacion/Mesadetrabajo1copia3.png', 'material/6.botella/Rotacion/Mesadetrabajo1copia4.png', 'material/6.botella/Rotacion/Mesadetrabajo1copia5.png', 'material/6.botella/Rotacion/Mesadetrabajo1copia6.png']
let bottleThrowIndex = 0;
let currentBottleSmashImage = 'material/6.botella/Rotacion/Splashdesalsa/Mesadetrabajo1copia7.png';
let bottleSmashImages = ['material/6.botella/Rotacion/Splashdesalsa/Mesadetrabajo1copia7.png', 'material/6.botella/Rotacion/Splashdesalsa/Mesadetrabajo1copia8.png', 'material/6.botella/Rotacion/Splashdesalsa/Mesadetrabajo1copia9.png', 'material/6.botella/Rotacion/Splashdesalsa/Mesadetrabajo1copia10.png', 'material/6.botella/Rotacion/Splashdesalsa/Mesadetrabajo1copia11.png', 'material/6.botella/Rotacion/Splashdesalsa/Mesadetrabajo1copia12.png']
let bottleSmashIndex = 0;
let currentCharacterImage = 'material/2.Secuencias_Personaje-Pepe-correccion/1.IDLE/IDLE/I-1.png';
let characterGraphicsIdleRight = ['material/2.Secuencias_Personaje-Pepe-correccion/1.IDLE/IDLE/I-1.png', 'material/2.Secuencias_Personaje-Pepe-correccion/1.IDLE/IDLE/I-2.png', 'material/2.Secuencias_Personaje-Pepe-correccion/1.IDLE/IDLE/I-3.png', 'material/2.Secuencias_Personaje-Pepe-correccion/1.IDLE/IDLE/I-4.png', 'material/2.Secuencias_Personaje-Pepe-correccion/1.IDLE/IDLE/I-5.png', 'material/2.Secuencias_Personaje-Pepe-correccion/1.IDLE/IDLE/I-6.png', 'material/2.Secuencias_Personaje-Pepe-correccion/1.IDLE/IDLE/I-7.png', 'material/2.Secuencias_Personaje-Pepe-correccion/1.IDLE/IDLE/I-8.png', 'material/2.Secuencias_Personaje-Pepe-correccion/1.IDLE/IDLE/I-9.png', 'material/2.Secuencias_Personaje-Pepe-correccion/1.IDLE/IDLE/I-10.png'];
let characterGraphicsLeft = ['material/2.Secuencias_Personaje-Pepe-correccion/1.IDLE/IDLE/image80.png', 'material/2.Secuencias_Personaje-Pepe-correccion/2.Secuencia_caminata/weff.png'];
let characterGraphicsMovingRight = ['material/2.Secuencias_Personaje-Pepe-correccion/2.Secuencia_caminata/W-21.png', 'material/2.Secuencias_Personaje-Pepe-correccion/2.Secuencia_caminata/W-22.png', 'material/2.Secuencias_Personaje-Pepe-correccion/2.Secuencia_caminata/W-23.png', 'material/2.Secuencias_Personaje-Pepe-correccion/2.Secuencia_caminata/W-24.png', 'material/2.Secuencias_Personaje-Pepe-correccion/2.Secuencia_caminata/W-25.png', 'material/2.Secuencias_Personaje-Pepe-correccion/2.Secuencia_caminata/W-26.png'];
let characterJumpImage = ['material/2.Secuencias_Personaje-Pepe-correccion/3.Secuencia_salto/J-35.png', 'material/2.Secuencias_Personaje-Pepe-correccion/3.Secuencia_salto/J-36.png', 'material/2.Secuencias_Personaje-Pepe-correccion/3.Secuencia_salto/J-37.png']
let characterDeadImages = ['material/2.Secuencias_Personaje-Pepe-correccion/5.Muerte/D-51.png', 'material/2.Secuencias_Personaje-Pepe-correccion/5.Muerte/D-52.png', 'material/2.Secuencias_Personaje-Pepe-correccion/5.Muerte/D-53.png', 'material/2.Secuencias_Personaje-Pepe-correccion/5.Muerte/D-54.png', 'material/2.Secuencias_Personaje-Pepe-correccion/5.Muerte/D-55.png', 'material/2.Secuencias_Personaje-Pepe-correccion/5.Muerte/D-56.png', 'material/2.Secuencias_Personaje-Pepe-correccion/5.Muerte/D-57.png']
let characterGraphicsIndex = 0;
let characterJumpIndex = 0;
let characterDeadIndex = 0;
let currentBossImage = 'material/4.Enemies/2.Atecion-ataque/1.Alerta/G5.png';
let bossAlertImages = ['material/4.Enemies/2.Atecion-ataque/1.Alerta/G5.png', 'material/4.Enemies/2.Atecion-ataque/1.Alerta/G6.png', 'material/4.Enemies/2.Atecion-ataque/1.Alerta/G7.png', 'material/4.Enemies/2.Atecion-ataque/1.Alerta/G8.png', 'material/4.Enemies/2.Atecion-ataque/1.Alerta/G9.png', 'material/4.Enemies/2.Atecion-ataque/1.Alerta/G10.png', 'material/4.Enemies/2.Atecion-ataque/1.Alerta/G11.png', 'material/4.Enemies/2.Atecion-ataque/1.Alerta/G12.png']
let bossGraphicsIndex = 0;
let collision_boss = false;
let currentBossImageAttack = 'material/4.Enemies/2.Atecion-ataque/2.Ataque/G13.png';
let bossAttackImages = ['material/4.Enemies/2.Atecion-ataque/2.Ataque/G13.png', 'material/4.Enemies/2.Atecion-ataque/2.Ataque/G14.png', 'material/4.Enemies/2.Atecion-ataque/2.Ataque/G15.png', 'material/4.Enemies/2.Atecion-ataque/2.Ataque/G16.png', 'material/4.Enemies/2.Atecion-ataque/2.Ataque/G17.png', 'material/4.Enemies/2.Atecion-ataque/2.Ataque/G18.png', 'material/4.Enemies/2.Atecion-ataque/2.Ataque/G19.png', 'material/4.Enemies/2.Atecion-ataque/2.Ataque/G20.png']
let bossGraphicsAttackIndex = 0;
let currentBossImageHit = 'material/4.Enemies/3.Herida/G21.png';
let bossHitImages = ['material/4.Enemies/3.Herida/G21.png', 'material/4.Enemies/3.Herida/G22.png', 'material/4.Enemies/3.Herida/G23.png']
let bossGraphicsHitIndex = 0;
let currentBossImageDead = 'material/4.Enemies/4.Muerte/G24.png';
let bossDeadImages = ['material/4.Enemies/4.Muerte/G24.png', 'material/4.Enemies/4.Muerte/G25.png', 'material/4.Enemies/4.Muerte/G26.png']
let bossGraphicsDeadIndex = 0;
let currentChickenImage = 'material/3.Enemies1/Version_Gallinita/chicken1.png'
let chickenGraphicsIndex = 0;
let chickenGraphicsMoving = ['material/3.Enemies1/Version_Gallinita/chicken1.png', 'material/3.Enemies1/Version_Gallinita/2-Ga_centro.png', 'material/3.Enemies1/Version_Gallinita/3.Ga_pasoizquierdo.png'];
let bottleIndex = 0;
let imagePaths = ['material/5.Fondo/Capas/1.suelo-fondo1/completo.png', 'material/5.Fondo/Capas/4.nubes/Completo.png', 'material/5.Fondo/Capas/3.Fondo3/Completo.png', 'material/5.Fondo/Capas/2.Fondo2/completo.png', 'material/5.Fondo/Capas/5.cielo_1920-1080px.png', 'material/6.botella/Rotacion/Mesadetrabajo1copia3.png', 'material/6.botella/Rotacion/Mesadetrabajo1copia4.png', 'material/6.botella/Rotacion/Mesadetrabajo1copia5.png', 'material/6.botella/Rotacion/Mesadetrabajo1copia6.png', 'material/6.botella/Rotacion/Splashdesalsa/Mesadetrabajo1copia7.png', 'material/6.botella/Rotacion/Splashdesalsa/Mesadetrabajo1copia8.png', 'material/6.botella/Rotacion/Splashdesalsa/Mesadetrabajo1copia9.png', 'material/6.botella/Rotacion/Splashdesalsa/Mesadetrabajo1copia10.png', 'material/6.botella/Rotacion/Splashdesalsa/Mesadetrabajo1copia11.png', 'material/6.botella/Rotacion/Splashdesalsa/Mesadetrabajo1copia12.png', 'material/2.Secuencias_Personaje-Pepe-correccion/1.IDLE/IDLE/I-1.png', 'material/2.Secuencias_Personaje-Pepe-correccion/1.IDLE/IDLE/I-2.png', 'material/2.Secuencias_Personaje-Pepe-correccion/1.IDLE/IDLE/I-3.png', 'material/2.Secuencias_Personaje-Pepe-correccion/1.IDLE/IDLE/I-4.png', 'material/2.Secuencias_Personaje-Pepe-correccion/1.IDLE/IDLE/I-5.png', 'material/2.Secuencias_Personaje-Pepe-correccion/1.IDLE/IDLE/I-6.png', 'material/2.Secuencias_Personaje-Pepe-correccion/1.IDLE/IDLE/I-7.png', 'material/2.Secuencias_Personaje-Pepe-correccion/1.IDLE/IDLE/I-8.png', 'material/2.Secuencias_Personaje-Pepe-correccion/1.IDLE/IDLE/I-9.png', 'material/2.Secuencias_Personaje-Pepe-correccion/1.IDLE/IDLE/I-10.png', 'material/2.Secuencias_Personaje-Pepe-correccion/1.IDLE/IDLE/image80.png', 'material/2.Secuencias_Personaje-Pepe-correccion/2.Secuencia_caminata/weff.png', 'material/2.Secuencias_Personaje-Pepe-correccion/2.Secuencia_caminata/W-21.png', 'material/2.Secuencias_Personaje-Pepe-correccion/2.Secuencia_caminata/W-22.png', 'material/2.Secuencias_Personaje-Pepe-correccion/2.Secuencia_caminata/W-23.png', 'material/2.Secuencias_Personaje-Pepe-correccion/2.Secuencia_caminata/W-24.png', 'material/2.Secuencias_Personaje-Pepe-correccion/2.Secuencia_caminata/W-25.png', 'material/2.Secuencias_Personaje-Pepe-correccion/2.Secuencia_caminata/W-26.png', 'material/2.Secuencias_Personaje-Pepe-correccion/3.Secuencia_salto/J-33.png', 'material/2.Secuencias_Personaje-Pepe-correccion/3.Secuencia_salto/J-34.png', 'material/2.Secuencias_Personaje-Pepe-correccion/3.Secuencia_salto/J-35.png', 'material/2.Secuencias_Personaje-Pepe-correccion/3.Secuencia_salto/J-36.png', 'material/2.Secuencias_Personaje-Pepe-correccion/3.Secuencia_salto/J-37.png', 'material/2.Secuencias_Personaje-Pepe-correccion/3.Secuencia_salto/J-38.png', 'material/2.Secuencias_Personaje-Pepe-correccion/5.Muerte/D-51.png', 'material/2.Secuencias_Personaje-Pepe-correccion/5.Muerte/D-52.png', 'material/2.Secuencias_Personaje-Pepe-correccion/5.Muerte/D-53.png', 'material/2.Secuencias_Personaje-Pepe-correccion/5.Muerte/D-54.png', 'material/2.Secuencias_Personaje-Pepe-correccion/5.Muerte/D-55.png', 'material/2.Secuencias_Personaje-Pepe-correccion/5.Muerte/D-56.png', 'material/2.Secuencias_Personaje-Pepe-correccion/5.Muerte/D-57.png', 'material/4.Enemies/2.Atecion-ataque/1.Alerta/G5.png', 'material/4.Enemies/2.Atecion-ataque/1.Alerta/G6.png', 'material/4.Enemies/2.Atecion-ataque/1.Alerta/G7.png', 'material/4.Enemies/2.Atecion-ataque/1.Alerta/G8.png', 'material/4.Enemies/2.Atecion-ataque/1.Alerta/G9.png', 'material/4.Enemies/2.Atecion-ataque/1.Alerta/G10.png', 'material/4.Enemies/2.Atecion-ataque/1.Alerta/G11.png', 'material/4.Enemies/2.Atecion-ataque/1.Alerta/G12.png', 'material/4.Enemies/2.Atecion-ataque/2.Ataque/G13.png', 'material/4.Enemies/2.Atecion-ataque/2.Ataque/G14.png', 'material/4.Enemies/2.Atecion-ataque/2.Ataque/G15.png', 'material/4.Enemies/2.Atecion-ataque/2.Ataque/G16.png', 'material/4.Enemies/2.Atecion-ataque/2.Ataque/G17.png', 'material/4.Enemies/2.Atecion-ataque/2.Ataque/G18.png', 'material/4.Enemies/2.Atecion-ataque/2.Ataque/G19.png', 'material/4.Enemies/2.Atecion-ataque/2.Ataque/G20.png', 'material/4.Enemies/3.Herida/G21.png', 'material/4.Enemies/3.Herida/G22.png', 'material/4.Enemies/3.Herida/G23.png', 'material/4.Enemies/4.Muerte/G24.png', 'material/4.Enemies/4.Muerte/G25.png', 'material/4.Enemies/4.Muerte/G26.png', 'material/3.Enemies1/Version_Gallinita/chicken1.png', 'material/3.Enemies1/Version_Gallinita/2-Ga_centro.png', 'material/3.Enemies1/Version_Gallinita/3.Ga_pasoizquierdo.png'];
let images = [];
let chicken_x = 8000;
let chicken_y = 142;
let chickens = [];
let placedBottles = [500, 1700, 2800, 4000, 4500, 5000, 6500, 7800];
let thrownBottleX = 0;
let thrownBottleY = 0;
let game_finished = false;
let game_lost = false;

//Game config

let JUMP_TIME = 380; //in ms 
let GAME_SPEED = 5;
let AUDIO_RUNNING = new Audio('material/Sounds/walk_new.mp3')
let AUDIO_JUMP = new Audio('material/Sounds/jump.mp3')
let AUDIO_BOTTLE = new Audio('material/Sounds/bottle.mp3')
let AUDIO_THROW = new Audio('material/Sounds/throw.mp3')
let AUDIO_CHICKEN = new Audio('material/Sounds/chicken_new.mp3')
let AUDIO_GLASS = new Audio('material/Sounds/bottle-smash.mp3')
let AUDIO_LOOSE = new Audio('material/Sounds/Loose.mp3')
let AUDIO_WIN = new Audio('material/Sounds/win.mp3')
let AUDIO_BACKGROUND_MUSIC = new Audio('material/Sounds/game-music.mp3')
AUDIO_BACKGROUND_MUSIC.loop = true;
AUDIO_BACKGROUND_MUSIC.volume = 0.2;

function init() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext("2d");
    document.getElementById('intro-image').classList.add('d-none');
    document.getElementById('start').classList.add('d-none');
    createChickenList();
    checkForRunning();
    changeCharacters();
    drawEnergyBar();
    drawBottleBar();
    draw();
    listenForKeys();
    calculateChickenPosition();
}

function draw() {
    AUDIO_BACKGROUND_MUSIC.play();
    drawBackground();
    if (game_finished) {
        drawWin();
    } else {
        updateCharacter();
        drawBottles();
        drawChicken();
        checkForCollision();
        drawThrowBottle();
        requestAnimationFrame(draw);
    }
    drawFinalBoss();
    checkWinLoose();
}

/**
 * Preload all images. This function should be executed before starting the game.
 * imagePaths should contain all images that will be loaded: ['img/image1.png', 'img/image2.png', 'img/image3.png', ...]
 */

function preloadImages() {

    for (let i = 0; i < imagePaths.length; i++) {
        let image = new Image();
        image.src = imagePaths[i];
        images.push(image); // push image-path to images-array (which contains all image-paths)
    }
}

/**
 * Check if background-image is already loaded in cache; if not, create new image
 * @param {string} src_path - scr-path of background-image 
 */

function checkBackgroundImageCache(src_path) {
    // Check if image is found in images-array.
    base_image = images.find(function(img) {
        return img.src.endsWith(src_path.substring(src_path, src_path.length));
    })

    // Create new image if not found in cache

    if (!base_image) {
        base_image = new Image();
        base_image.src = src_path;
    }
}

function drawWin() {
    ctx.font = "60px Luckiest Guy";
    ctx.fillText('You won!!!', 210, 250);
    AUDIO_BACKGROUND_MUSIC.pause();
}

function checkWinLoose() {
    if (finalBossEnergy <= 0) {
        gameWin();
    }
    if (character_energy < 5) {
        gameLose();
    }
}

function gameWin() {
    AUDIO_CHICKEN.play();
    document.getElementById('replay').classList.remove('d-none');
    setTimeout(function() {
        AUDIO_WIN.play();
    }, 500);
    setTimeout(function() {
        game_finished = true;
    }, 1500)
}

function gameLose() {
    ctx.font = "60px Luckiest Guy";
    ctx.fillText('You lost!!!', 210, 250);
    AUDIO_GLASS.pause();
    AUDIO_BOTTLE.pause();
    setTimeout(function() {
        AUDIO_LOOSE.pause();
    }, 1500);
    document.getElementById('replay').classList.remove('d-none');
}

function changeCharacters() {
    setInterval(function() {
        if (finalBossEnergy == 100) {
            let index = bossGraphicsIndex % bossAlertImages.length;
            currentBossImage = bossAlertImages[index];
            bossGraphicsIndex = bossGraphicsIndex + 1;
        }
        if (finalBossEnergy < 1) {
            let index = bossGraphicsDeadIndex % bossDeadImages.length;
            currentBossImage = bossDeadImages[index];
            bossGraphicsDeadIndex = bossGraphicsDeadIndex + 1;
            if (bossGraphicsDeadIndex > 2) {
                currentBossImage = bossDeadImages[2];
                chicken_y = chicken_y + 80;
            }
        }
        if (character_energy <= 0) {
            let index = characterDeadIndex % characterDeadImages.length;
            currentCharacterImage = characterDeadImages[index];
            characterDeadIndex = characterDeadIndex + 1;
            character_y = character_y + 30;
            character_x = character_x + 10;

        }
        if (collision_boss == true) {
            let index = bossGraphicsHitIndex % bossHitImages.length;
            currentBossImage = bossHitImages[index];
            bossGraphicsHitIndex = bossGraphicsHitIndex + 1;
            collision_boss = false;
        }
    }, 200);

    setInterval(function() {
        if (finalBossEnergy < 100) {
            let index = bossGraphicsAttackIndex % bossAttackImages.length;
            currentBossImage = bossAttackImages[index];
            bossGraphicsAttackIndex = bossGraphicsAttackIndex + 1;
            chicken_x = chicken_x - 5;
        }
    }, 100);
    setInterval(function() {
        let index = chickenGraphicsIndex % chickenGraphicsMoving.length;
        currentChickenImage = chickenGraphicsMoving[index];
        chickenGraphicsIndex = chickenGraphicsIndex + 1;
    }, 200);
    setInterval(function() {
        let index = bottleThrowIndex % bottleThrowImages.length;
        currentBottleThrowImage = bottleThrowImages[index];
        bottleThrowIndex = bottleThrowIndex + 1;
        if (collision_boss == true) {
            currentBottleThrowImage = currentBottleSmashImage;
        }
    }, 200);
}

function drawFinalBoss() {
    if (isMovingRight) {
        chicken_x = chicken_x - GAME_SPEED;
    }
    if (isMovingLeft) {
        chicken_x = chicken_x + GAME_SPEED;
    }
    addBackgroundObject(currentBossImage, chicken_x, chicken_y, 0.25);
}

function drawThrowBottle() {
    if (bottleThrowTime) {
        let timePassed = new Date().getTime() - bottleThrowTime;
        let gravity = Math.pow(9.81, timePassed / 300);
        thrownBottleX = 130 + (timePassed * 0.6);
        thrownBottleY = 320 - (timePassed * 0.4 - gravity);
        let base_image = new Image();
        base_image.src = currentBottleThrowImage;
        if (base_image.complete) {
            ctx.drawImage(base_image, thrownBottleX, thrownBottleY, base_image.width * 0.2, base_image.height * 0.2);
        }
    }
}

function drawBottles() {
    for (i = 0; i < placedBottles.length; i++) {
        if (isMovingRight) {
            placedBottles[i] = placedBottles[i] - GAME_SPEED;
        }
        if (isMovingLeft) {
            placedBottles[i] = placedBottles[i] + GAME_SPEED;
        }
        addBackgroundObject('material/6.botella/2.Botella_enterrada1.png', placedBottles[i], 344, 0.2);
    }
}

function drawEnergyBar() {
    addBackgroundObject(currentEnergyImage, 20, 20, 0.3);
}

function drawBottleBar() {
    addBackgroundObject(currentBottleImage, 20, 60, 0.3);
}

function checkForCollision() {
    for (i = 0; i < chickens.length; i++) {
        let chicken = chickens[i];
        if ((chicken.position_x - 60) < character_x && (chicken.position_x + 10) > character_x) {
            if (character_y > 185) {
                character_energy = character_energy - 2;
                fillLifeEnergy();
            }
        };
    }
    for (i = 0; i < placedBottles.length; i++) {
        let bottle_x = placedBottles[i];
        if ((bottle_x - 60) < character_x && (bottle_x + 50) > character_x) {
            if (character_y > 185) {
                AUDIO_BOTTLE.play();
                placedBottles.splice(i, 1);
                collectedBottles++;
                fillBottleEnergy();
            }
        };
    }

    if (thrownBottleX > chicken_x - 100 && thrownBottleX < chicken_x + 100) {
        if (finalBossEnergy > 0) {
            finalBossEnergy = finalBossEnergy - 1;
            collision_boss = true;
            AUDIO_GLASS.play();
        } else {
            bossDedeatedAt = new Date().getTime();
            finalBossEnergy = 0;
        }
    }

    if ((chicken_x - 60) < character_x && (chicken_x + 10) > character_x) {
        character_energy = character_energy - 30;
        fillLifeEnergy();
    }
    drawBossBar();
    drawEnergyBar();
    drawBottleBar();
}

function drawBossBar() {
    if (finalBossEnergy > 0) {
        ctx.globalAlpha = 1;
        ctx.fillStyle = "red";
        ctx.fillRect(chicken_x, 165, 1.5 * finalBossEnergy, 8);
        ctx.globalAlpha = 0.2;
        ctx.fillStyle = "black";
        ctx.fillRect(chicken_x - 2, 163, 154, 12);
        ctx.globalAlpha = 1;
    }
}

function fillLifeEnergy() {
    if (character_energy < 75) {
        currentEnergyImage = characterEnergyImage[1];
    }
    if (character_energy < 50) {
        currentEnergyImage = characterEnergyImage[2];
    }
    if (character_energy < 25) {
        currentEnergyImage = characterEnergyImage[3];
    }
    if (character_energy < 15) {
        currentEnergyImage = characterEnergyImage[4];
    }
    if (character_energy < 5) {
        currentEnergyImage = characterEnergyImage[5];
        AUDIO_LOOSE.play();
        game_lost = true;
    }
}

function fillBottleEnergy() {
    if (bottleIndex < 5) {
        bottleIndex = bottle_energy.indexOf(currentBottleImage);
        bottleIndex++;
        currentBottleImage = bottle_energy[bottleIndex];
    }
}

function calculateChickenPosition() {
    setInterval(function() {
        for (i = 0; i < chickens.length; i++) {
            let chicken = chickens[i];
            if (isMovingRight && !isMovingLeft) {
                chicken.position_x = chicken.position_x - chicken.speed - 10;
            } else { chicken.position_x = chicken.position_x - chicken.speed };
            if (isMovingLeft && !isMovingRight) {
                chicken.position_x = chicken.position_x - chicken.speed + 10;
            } else { chicken.position_x = chicken.position_x - chicken.speed };
            if (isMovingLeft && movingBackgroundLayer1 >= 1) {
                chicken.position_x = chicken.position_x;
            }
        }
    }, 50)
}

function createChickenList() {
    chickens = [
        createChicken(1000),
        createChicken(1500),
        createChicken(2000),
        createChicken(3000),
        createChicken(4000),
        createChicken(5000),
        createChicken(6000),
        createChicken(7000)
    ];
}

function checkForRunning() {
    setInterval(function() {
        if (isMovingRight && !jump) {
            //Change character graphic
            AUDIO_RUNNING.play();
            let index = characterGraphicsIndex % characterGraphicsMovingRight.length;
            currentCharacterImage = characterGraphicsMovingRight[index];
            characterGraphicsIndex = characterGraphicsIndex + 1;
        }
        if (isMovingLeft && !jump) {
            //Change character graphic
            AUDIO_RUNNING.play();
            let index = characterGraphicsIndex % characterGraphicsLeft.length;
            currentCharacterImage = characterGraphicsLeft[index];
            characterGraphicsIndex = characterGraphicsIndex + 1;
        }
        if (!isMovingRight && !isMovingLeft) {
            AUDIO_RUNNING.pause();
        }
    }, 100);

    setInterval(function() {
        if (isMovingRight == false && !jump) {
            //Change character graphic
            let index = characterGraphicsIndex % characterGraphicsIdleRight.length;
            currentCharacterImage = characterGraphicsIdleRight[index];
            characterGraphicsIndex = characterGraphicsIndex + 1;
        }
        if (isMovingLeft && !jump) {
            //Change character graphic
            let index = characterGraphicsIndex % characterGraphicsLeft.length;
            currentCharacterImage = characterGraphicsLeft[index];
            characterGraphicsIndex = characterGraphicsIndex + 1;
        }
    }, 300);

    setInterval(function() {
        if (jump == true) {
            let index = characterJumpIndex % characterJumpImage.length;
            currentCharacterImage = characterJumpImage[index];
            characterJumpIndex = characterGraphicsIndex + 1;
        }
    }, 100);
}

function drawChicken() {
    for (i = 0; i < chickens.length; i++) {
        let chicken = chickens[i];
        addBackgroundObject(currentChickenImage, chicken.position_x, chicken.position_y, chicken.scale);
    };
}

function createChicken(position_x) {
    return {
        "img": currentChickenImage,
        "position_x": position_x,
        "position_y": 375,
        "scale": 0.2,
        "speed": (Math.random() * 3.8)
    };
}

function addBackgroundObject(src, offsetX, offsetY, scale) {
    let base_image = new Image();
    base_image.src = src;
    if (base_image.complete) {
        ctx.drawImage(base_image, offsetX, offsetY, base_image.width * scale, base_image.height * scale);
    }
}

function drawBackground() {
    let base_image_1 = new Image();
    base_image_1.src = 'material/5.Fondo/Capas/5.cielo_1920-1080px.png';
    if (base_image_1.complete) {
        ctx.drawImage(base_image_1, 0, 0, canvas.width, canvas.height);
    };
    movingBackground();
}

function updateCharacter() {
    let base_image = new Image();
    base_image.src = currentCharacterImage;
    let timePassedSinceJump = new Date().getTime() - lastJumpStarted;
    if (timePassedSinceJump < JUMP_TIME) {
        character_y = character_y - 10;
    } else {
        //Check falling 
        if (character_y < 190) {
            character_y = character_y + 10;
        }
    }
    if (character_y >= 190) {
        jump = false;
    }
    if (base_image.complete) {
        ctx.drawImage(base_image, character_x, character_y, base_image.width * 0.2, base_image.height * 0.2);
    };
}

function movingBackground() {
    movingBackgroundLayerClouds = movingBackgroundLayerClouds - 0.05;
    if (isMovingRight && movingBackgroundLayer1 > -8000) {
        movingBackgroundLayer1 = movingBackgroundLayer1 - GAME_SPEED;
        movingBackgroundLayer2 = movingBackgroundLayer2 - 2;
        movingBackgroundLayer3 = movingBackgroundLayer3 - 1;
        movingBackgroundLayerClouds = movingBackgroundLayerClouds - 0.55;
    }
    if (isMovingLeft && movingBackgroundLayer1 < 0) {
        movingBackgroundLayer1 = movingBackgroundLayer1 + GAME_SPEED;
        movingBackgroundLayer2 = movingBackgroundLayer2 + 2;
        movingBackgroundLayer3 = movingBackgroundLayer3 + 1;
        movingBackgroundLayerClouds = movingBackgroundLayerClouds + 0.6;
    }
    let base_image_moving_horizont = new Image();
    base_image_moving_horizont.src = 'material/5.Fondo/Capas/2.Fondo2/completo.png';
    for (i = 1; i < 10; i++) {
        if (base_image_moving_horizont.complete) {
            ctx.drawImage(base_image_moving_horizont, movingBackgroundLayer3, 0, canvas.width * 2, canvas.height);
            ctx.drawImage(base_image_moving_horizont, i * (2 * canvas.width) + movingBackgroundLayer3, 0, canvas.width * 2, canvas.height);
        };
    }
    let base_image_moving_middle = new Image();
    base_image_moving_middle.src = 'material/5.Fondo/Capas/3.Fondo3/Completo.png';
    for (i = 1; i < 10; i++) {
        if (base_image_moving_middle.complete) {
            ctx.drawImage(base_image_moving_middle, movingBackgroundLayer2, 0, canvas.width * 2, canvas.height);
            ctx.drawImage(base_image_moving_middle, i * (2 * canvas.width) + movingBackgroundLayer2, 0, canvas.width * 2, canvas.height);
        };
    }
    let base_image_clouds = new Image();
    base_image_clouds.src = 'material/5.Fondo/Capas/4.nubes/Completo.png';
    for (i = 1; i < 10; i++) {
        if (base_image_clouds.complete) {
            ctx.drawImage(base_image_clouds, movingBackgroundLayerClouds, 0, canvas.width * 2, canvas.height);
            ctx.drawImage(base_image_clouds, i * (2 * canvas.width) + movingBackgroundLayerClouds, 0, canvas.width * 2, canvas.height);
        };
    }
    let base_image_moving_top = new Image();
    base_image_moving_top.src = 'material/5.Fondo/Capas/1.suelo-fondo1/completo.png';
    for (i = 1; i < 10; i++) {
        if (base_image_moving_top.complete) {
            ctx.drawImage(base_image_moving_top, movingBackgroundLayer1, 0, canvas.width * 2, canvas.height);
            ctx.drawImage(base_image_moving_top, i * (2 * canvas.width) + movingBackgroundLayer1, 0, canvas.width * 2, canvas.height);
        };
    }
};

function listenForKeys() {
    document.addEventListener("keydown", e => {
        const k = e.key;
        if (k == 'ArrowRight') {
            isMovingRight = true;
        }
        if (k == 'ArrowLeft') {
            isMovingLeft = true;
        }
        if (k == 'd' && collectedBottles > 0) {
            timePassed = new Date().getTime() - bottleThrowTime;
            if (timePassed > 1000) {
                collectedBottles--;
                bottleThrowTime = new Date().getTime();
                AUDIO_THROW.play();
                if (bottleIndex > 0) {
                    bottleIndex = bottle_energy.indexOf(currentBottleImage);
                    bottleIndex--;
                    currentBottleImage = bottle_energy[bottleIndex];
                }
            }
        }
        let timePassedSinceJump = new Date().getTime() - lastJumpStarted;
        if (e.code == 'Space' && timePassedSinceJump > JUMP_TIME * 2) {
            jump = true;
            AUDIO_JUMP.play();
            lastJumpStarted = new Date().getTime();
        }
    });

    document.addEventListener("keyup", e => {
        const k = e.key;
        if (k == 'ArrowRight') {
            isMovingRight = false;
            //character_x = character_x + 5;
        }
        if (k == 'ArrowLeft') {
            isMovingLeft = false;
            //character_x = character_x - 5;
        }
        if (e.code == 'Space') {
            isJumping = false;
            isFalling = true;
        }
    });
}