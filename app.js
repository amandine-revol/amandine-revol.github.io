(function(){

    //quand clic sur nav selectionne img correspondante

    let tabs = document.querySelectorAll("li a"); //selectionne a
    //console.log("tabs : " + tabs)
    
    for(let i=0; i< tabs.length; i ++){

        tabs[i].addEventListener("click", function(e){ // event qd click sur un element de nav

            var href = tabs[i].getAttribute("href");//recup le href du lien de nav selectionné ex : #all

            var hrefClean = href.slice(1); // remove le #

            var li = this.parentNode;

            var div = this.parentNode.parentNode.parentNode;

            if(li.classList.contains("selected")){
                return false;
            }

            div.querySelector(".selected").classList.remove("selected"); //enleve class active de element dj actif

            li.classList.add("selected"); //ajoute class active à element de nav actif

            var gridContainer = document.querySelector(".grid-container"); //selectionne img container

            //loop les children du container = les img
            for (let ii = 0; ii < gridContainer.children.length; ii++) {
                var test = gridContainer.children[ii].classList.contains(hrefClean); //regarde si img a la class qui coresspond au href des elements nav (ex : all, js, python), return true or false
                if(test == false){
                    gridContainer.children[ii].style.display = "none"; //on fait disparaitre les img qui non pas la class
                }
                if(test == true){
                    gridContainer.children[ii].style.display = "inline-block";
                }
              }
        });
    }



}());