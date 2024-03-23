function changeContainer(id){
    let containers = document.querySelectorAll('container');
    containers.forEach(container => container.classList.remove("containerActive"));
    containers.forEach(container => container.classList.remove("containerNone"));

    for(let i = 0; i < containers.length; i++){
        if(containers[i] == document.getElementById(id)){
            containers[i].classList.add("containerActive");
        }
        else{
            containers[i].classList.add("containerNone");
        }
    }
}