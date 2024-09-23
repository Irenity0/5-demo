function activeBtn(btnName){
    btnName.classList.add('bg-lime-400');
    btnName.classList.add('font-bold');
    btnName.classList.remove('btn-outline');
}

function inactiveBtn(btnName){
    btnName.classList.remove('bg-lime-400');
    btnName.classList.remove('font-bold');
    btnName.classList.add('btn-outline');
}


