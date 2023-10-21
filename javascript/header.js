function scrollToElement(id){
    const element = document.getElementById(id).scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}