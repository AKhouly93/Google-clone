const clearBtn = document.getElementsByClassName('clear-button')[0];
const input = document.getElementById('text-box');
input.addEventListener('input', ()=>{
    if (input.value !=''){
        clearBtn.style.display ='flex'
    }else{
        clearBtn.style.display ='none'
    }
});
clearBtn.addEventListener('click', ()=>{
    clearBtn.style.display = 'none';
    input.value ='';
});