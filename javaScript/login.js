let goToFindButton = document.getElementById('goToFindButton');

function changeContainer(event, classId){
    event.preventDefault();
    let containers = document.querySelectorAll('.container');
    containers.forEach(container => container.classList.remove("containerActive"));
    containers.forEach(container => container.classList.remove("containerNone"));

    for(let i = 0; i < containers.length; i++){
        if(containers[i] == document.querySelector(`.${classId}`)){
            containers[i].classList.add("containerActive");
        }
        else{
            containers[i].classList.add("containerNone");
        }
    }
}

goToFindButton.addEventListener('click', event => changeContainer(event, 'find'));