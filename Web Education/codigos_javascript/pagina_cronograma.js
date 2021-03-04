slide_atual=1
slide_max=6;
slide_tempo=3000;

function troca(){
    document.getElementById("imagem1").style.visibility="hidden";
    document.getElementById("imagem2").style.visibility="hidden";
    document.getElementById("imagem3").style.visibility="hidden";
    document.getElementById("imagem4").style.visibility="hidden";
    document.getElementById("imagem5").style.visibility="hidden";
    document.getElementById("imagem6").style.visibility="hidden";

    document.getElementById("imagem"+slide_atual).style.visibility="visible";
    slide_atual = slide_atual + 1;

    if(slide_atual > slide_max){
        slide_atual = 1;
    }
}
function slider(){
    document.getElementById("imagem1").style.visibility="hidden";
    document.getElementById("imagem2").style.visibility="hidden";
    document.getElementById("imagem3").style.visibility="hidden";
    document.getElementById("imagem4").style.visibility="hidden";
    document.getElementById("imagem5").style.visibility="hidden";
    document.getElementById("imagem6").style.visibility="visible";

    slideTime=setInterval(troca, slide_tempo);
}