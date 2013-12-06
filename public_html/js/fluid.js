function adjustVisualInit(){
    var winW = window.innerWidth;
    var winH = window.innerHeight;
    
    var paper = document.getElementsByClassName('paper')[0];
    
    //Largura do "papel"
    paper.style.width = ((winW - 90) < 850 ? (winW - 90) : 850)+ "px";
    //Altura do "papel"
    paper.style.minHeight = (winH - 90) + "px";
    
    //Margem à esquerda
    paper.style.left = ((winW / 2) - (paper.offsetWidth / 2)) + "px";
}

function adjustVisual(){
    var winW = window.innerWidth;
    
    var paper = document.getElementsByClassName('paper')[0];
    
    //Largura do "papel"
    paper.style.width = ((winW - 90) < 850 ? (winW - 90) : 850)+ "px";
    
    //Margem à esquerda
    paper.style.left = ((winW / 2) - (paper.offsetWidth / 2)) + "px";
}