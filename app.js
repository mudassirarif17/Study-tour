let openClose = document.getElementById("open-close");
let mblMenu = document.getElementById("mbl-menu");

openClose.addEventListener("click" , function(){
    let isHide = mblMenu.classList.contains('hidden');
    if(isHide){
        mblMenu.classList.remove('hidden')
    }else{
        mblMenu.classList.add('hidden')
    }
})




