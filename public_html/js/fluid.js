function adjustVisualInit() {
    var winW = window.innerWidth,
        winH = window.innerHeight,
        paper = document.getElementsByClassName('paper')[0];

    //var winH = window.innerHeight;
        
    //Largura do "papel"
    paper.style.width = ((winW - 90) < 850 ? (winW - 90) : 850)+ "px";
    
    //Altura do "papel"
    //paper.style.minHeight = (winH - 90) + "px";
    
    //Margem à esquerda
    paper.style.left = ((winW / 2) - (paper.offsetWidth / 2)) + "px";
    paper.style.minHeight = winH  + "px";
    
    if (winW < 700) {
        document.getElementById('authorContainerBig').style.display = "none";
        document.getElementById('authorContainerSmall').style.display = "block";
    } else {
        document.getElementById('authorContainerBig').style.display = "block";
        document.getElementById('authorContainerSmall').style.display = "none";
    }
}

function adjustVisual() {
    var winW = window.innerWidth,
        paper = document.getElementsByClassName('paper')[0],
        authorContainerBig = document.getElementById('authorContainerBig'),
        authorContainerSmall = document.getElementById('authorContainerSmall');
    
    //Largura do "papel"
    paper.style.width = ((winW - 90) < 850 ? (winW - 90) : 850)+ "px";
    
    //Margem à esquerda
    paper.style.left = ((winW / 2) - (paper.offsetWidth / 2)) + "px";
    
    if (winW < 700) {
        authorContainerBig.style.display = "none";
        authorContainerSmall.style.display = "block";
    } else {
        authorContainerBig.style.display = "block";
        authorContainerSmall.style.display = "none";
    }
}