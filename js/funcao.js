function   mudar()
{  document.getElementById("cara").src="img/cara doida.png";  }
function   voltar()
{document.getElementById("cara").src="img/cara triste.png"; }
function   trocar(info){
if(info==1){
document.getElementById("cara").src=("img/cara triste.png"); 
}else{
    document.getElementById("cara").src=("img/cara doida.png"); 
     }
}