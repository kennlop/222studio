window.addEventListener('wheel', (event) => {
        const projectsRow = document.querySelector('.projects-row');
        const deltaY = event.deltaY;
        const newScrollLeft = projectsRow.scrollLeft + deltaY;
      
        projectsRow.scrollLeft = newScrollLeft;
});