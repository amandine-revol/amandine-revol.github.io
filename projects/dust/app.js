//nav orange color when selected
(function(){

    let nav = document.querySelectorAll("li a");

    for (let i=0; i<nav.length; i++){

        nav[i].addEventListener("click", function(){

            var li= this.parentNode;

            if(li.classList.contains("selected")){
                return false;
            }
            //remove selected existant
            document.querySelector(".selected").classList.remove("selected");
            // add selected to li selectionné
            li.classList.add("selected");

        });
    }

}());

