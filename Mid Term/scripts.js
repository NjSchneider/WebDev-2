function Racer(position, name, image){
    this.position = position;
    this.name = name;
    this.image = image;
    this.displayRacer = function(){
        return `<img id=${name} src=${image} alt=${name}>`
    }
}

rick = new Racer(0, "rick", "Images/rick.png");
morty = new Racer(0, "morty", "Images/morty.png");

document.getElementById('racer1').innerHTML = rick.displayRacer();
document.getElementById('racer2').innerHTML = morty.displayRacer();

var divWidth = document.getElementById('land').offsetWidth - 400;
console.log(divWidth);
var winner = false;0
var raceTimer;

document.getElementById('fart').addEventListener("click", startRace);

function startRace(){ 
    document.getElementById('fart').src = "Images/fart-green.png";   
    document.getElementById('portal').style.visibility = 'visible';
    raceTimer = setInterval(raceAnimation, 100);
}

function raceAnimation(){
    if(rick.position >= divWidth && morty.position >= divWidth){
        clearInterval(raceTimer);
        return;   
    }
    if(rick.position < divWidth){
        rick.position += Math.floor(Math.random() * 10 + 1);
        if(rick.position >= divWidth){
            if(!winner){
                winner = true;     
                closePortal();           
                hideRick();
                document.getElementById('morty').src = 'Images/mortyLoser1.png';
                document.getElementById('rickWinner').style.display = 'block';
                document.getElementById('winnerTag').innerHTML = `${rick.name} is the Winner!`;
                document.getElementById('winnerTag').style.display = 'block';
            }
        }
        document.getElementById('rick').style.left = rick.position + "px";
    }
    if(morty.position < divWidth){
        morty.position += Math.floor(Math.random() * 10 + 1);
        if(morty.position >= divWidth){
            if(!winner){
                winner = true;  
                closePortal();              
                hideMorty();
                document.getElementById('rick').src = 'Images/rickLoser.png';
                document.getElementById('mortyWinner').style.display = 'block';
                document.getElementById('winnerTag').innerHTML = `${morty.name} is the Winner!`;
                document.getElementById('winnerTag').style.display = 'block';
            }
        }
        document.getElementById('morty').style.left = morty.position + "px";
    }
}

document.getElementById('winner').addEventListener("click", function (e){
    winner = false;
    document.getElementById('fart').src = "Images/fart-red.png";
    var winnerClicked = e.target.id;
    resetImages();
    document.getElementById(winnerClicked).style.display = 'none';
    document.getElementById('winnerTag').innerHTML = "";
});

function hideRick(){
    document.getElementById('rick').style.visibility = 'hidden';    
}

function hideMorty(){
    document.getElementById('morty').style.visibility = 'hidden';    
}

function closePortal(){
    document.getElementById('portal').style.visibility = 'hidden';
}

function resetImages(){
    document.getElementById('rick').src = 'Images/rick.png';
    document.getElementById('morty').src = 'Images/morty.png';
    document.getElementById('rick').style.visibility = 'visible';
    document.getElementById('morty').style.visibility = 'visible';

    rick.position = 0;
    morty.position = 0;
    document.getElementById('rick').style.left = rick.position;
    document.getElementById('morty').style.left = morty.position;
}