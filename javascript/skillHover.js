const elements = document.querySelectorAll('.skill');

elements.forEach((element) => {
    let canHover = true;

    element.addEventListener('mouseenter', ()=> {
        if(canHover){
            element.classList.add('hovered');
        }
    })

    element.addEventListener('mouseleave', ()=> {
        setTimeout(()=>{
            element.classList.remove('hovered');
        },300)
        canHover = true
        // setTimeout(()=>{
        //     canHover = true;
        // }, 100)
    })
});


