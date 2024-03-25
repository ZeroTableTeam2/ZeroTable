let goToFindButton = document.getElementById('goToFindButton');

function changeContainer(event, id){
    event.preventDefault();
    let containers = document.querySelectorAll('.container');
    for(let i = 0; i < containers.length; i++){
        if(containers[i].id === id){
            containers[i].style.display = "flex";
        }
        else{
            containers[i].style.display = "none";
        }
    }
}

goToFindButton.addEventListener('click', event => changeContainer(event, 'find'));