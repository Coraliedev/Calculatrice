const Result=document.getElementById("resultat");

    const Operation= document.querySelectorAll(".calcul");
    Operation.forEach(element=> element.addEventListener("click",ajouter));
    function ajouter(){
        if(Result.innerHTML.length<20){
            if(Result.innerHTML=="" && ["*","/","+","-"].includes(this.innerHTML)){
                Result.innerHTML="";
            }
            else {
                if(/(\D){1}$/.test(Result.innerHTML) && ["*","/","+","-"].includes(this.innerHTML)){ 
                    Result.innerHTML=Result.innerHTML.substring(0,Result.innerHTML.length-1);
                    Result.innerHTML+=this.innerHTML; 
                }
                else{
            if(this.innerHTML==","){
                Result.innerHTML+= ".";
                 }
            else {
        Result.innerHTML+=this.innerHTML;
            }
            }
        }
        }
    }

    const Clear=document.querySelector(".clear");
    Clear.addEventListener("click", effacer);
    function effacer(){
        Result.innerHTML="";
    }

    const Egal=document.querySelector(".egal");
    Egal.addEventListener("click",calcul);
    function calcul(){
        Result.innerHTML=eval(Result.innerHTML);
    }