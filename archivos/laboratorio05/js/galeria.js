const abrirmodal=document.querySelectorAll("[data-open]");
const cerramodal=document.querySelectorAll("[data-close]")
const isVisible = "is-visible";

for(const modal of abrirmodal){
    modal.addEventlistener("click", function(){
        var modalid = this.dataset.open;
        document.getElementById(modalid).classList.add(isVisible);
    });
}

for(const modal of cerrarmodal){
    modal.addEventlistener("click", function(){
        this.parentElement.parentElement.parentElement.classList.remove
        (isVisible);
    });
}

document.addEventListener("click",(e)=>{
    if(e.target==document.querySelector(".modal .is-visible"))
    {
        document.querySelector(".modal is-visible").classList.remove(isVisible);
    }
});