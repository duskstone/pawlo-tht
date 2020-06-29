var honeyTile = document.createElement("img");
var dirtTile = document.createElement("img");
var pawlo = document.createElement("img");

picsToLoad = 0;

function countLoadedImagesAndLaunchIfReady() {
    picsToLoad--;
    if(picsToLoad == 0) {
        imageLoadingDoneSoStartGame();
    }
}

function beginLoadingImage(imgVar, filename) {
    imgVar.onload = countLoadedImagesAndLaunchIfReady;
    imgVar.src = "images/"+filename;
}

function loadImages() {
    
    var imageList = [
        {varName: honeyTile, theFile: 'honey_comb_tile.png'},
        {varName: dirtTile, theFile: 'dirt_tile.png'},
        {varName: pawlo, theFile: 'pawlo.png'}
    ]

    picsToLoad = imageList.length;

    for(var i=0; i<imageList.length; i++) {
        beginLoadingImage(imageList[i].varName, imageList[i].theFile);
    }
}