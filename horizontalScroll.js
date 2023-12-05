window.addEventListener('wheel', (event) => {
        const projectshowcaserow = document.querySelector('.project-showcase-row');
        const deltaY = event.deltaY;
        const newScrollLeft = projectshowcaserow.scrollLeft + deltaY;
      
        projectshowcaserow.scrollLeft = newScrollLeft;
 });