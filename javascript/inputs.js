function setFocusEvent(inputId){
    const input = document.getElementById(inputId);
    const label = input.nextElementSibling;
    
    if(input){
        input.addEventListener('focus',()=>{
            input.classList.add('focused');
            if(label){
                label.classList.add('focused');
            }
        });

        input.addEventListener('blur', ()=>{
            if(input.value==''){
                input.classList.remove('focused');
                if(label){
                    label.classList.remove('focused')
                }
            }
        })
    }
}

setFocusEvent('nome');
setFocusEvent('whatsapp');
setFocusEvent('email');