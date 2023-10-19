const projects = document.querySelectorAll('.project-img');
const containers = document.querySelectorAll('.project-container');

containers.forEach((container, index) => {
    container.addEventListener('mousemove', (e)=>{
        rotateElement(e, projects[index]);
    });
});

function rotateElement(event, element){
    const rect = element.getBoundingClientRect();
    const elementX = event.clientX - rect.left;
    const elementY = event.clientY - rect.top;
    const middleX = rect.width / 2;
    const middleY = rect.height / 2;

    const offsetX = ((elementX - middleX) / middleX) * 20;
    const offsetY = ((elementY - middleY) / middleY) * 20;

    element.style.setProperty("--rotateX", -1 * offsetX + 'deg');
    element.style.setProperty("--rotateY", -1 * offsetY + 'deg');

    element.style.setProperty('--shadowX', (-1 * offsetX) / 2 + 'px');
    element.style.setProperty('--shadowY', (-1 * offsetY) / 2 + 'px');
}
