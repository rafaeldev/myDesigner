function adjustVisualInit() {
    var paper = document.getElementsByClassName('paper')[0],
        winH = window.innerHeight;
    
    paper.style.minHeight = winH  + "px";
    
    adjustVisual();
}

function adjustVisual() {
    var winW = window.innerWidth,
        paper = document.getElementsByClassName('paper')[0],
        authorContainerBig = document.getElementById('authorContainerBig'),
        authorContainerSmall = document.getElementById('authorContainerSmall');
    
    if (winW > 380) {
        paper.style.width = ((winW - 90) < 850 ? (winW - 90) : 850)+ "px";
        paper.style.left = ((winW / 2) - (paper.offsetWidth / 2)) + "px";
        paper.className = "paper";
    } else {
        paper.style.width = "100%";
        paper.style.left = 0;
        addClass(paper, "mobile");
    }
    
    if (winW < 700) {
        authorContainerBig.style.display = "none";
        authorContainerSmall.style.display = "block";
    } else {
        authorContainerBig.style.display = "block";
        authorContainerSmall.style.display = "none";
    }
}

function addClass(E, className) {
    if (E.className.indexOf(className) === -1) {
        E.className = E.className + " " + className;
    }
}