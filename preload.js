
// let a="val from preload";
const castleImage=new Image();
const cloudsImage=new Image();
const mountainImage=new Image();
const spriteSheetImage=new Image();
const tilesetImage=new Image();
function preload(){
    castleImage.src="./marioda/assets/sprites/castle.png";
    cloudsImage.src="./marioda/assets/sprites/clouds.png";
    mountainImage.src="./marioda/assets/sprites/mountain.png";
    spriteSheetImage.src="./marioda/assets/sprites/spritesheet.png";
    tilesetImage.src="./marioda/assets/sprites/tileset_gutter.png";

    return new Promise(function(resolve,reject){
        let p1= new Promise(function(resolve,reject){
            castleImage.addEventListener("load",function(){
                console.log("Image loaded");
                resolve();
            });
        })
        let p2= new Promise(function(resolve,reject){
            cloudsImage.addEventListener("load",function(){
                console.log("Image loaded");
                resolve();
            });
        })
        let p3= new Promise(function(resolve,reject){
            mountainImage.addEventListener("load",function(){
                console.log("Image loaded");
                resolve();
            });
        })
        let p4= new Promise(function(resolve,reject){
            spriteSheetImage.addEventListener("load",function(){
                console.log("Image loaded");
                resolve();
            });
        })
        let p5= new Promise(function(resolve,reject){
            tilesetImage.addEventListener("load",function(){
                console.log("Image loaded");
                resolve();
            });
        })
        let BigPromise=Promise.all([p1,p2,p3,p4,p5]);
        BigPromise.then(function(){
            resolve();
        })
    })

   
}
