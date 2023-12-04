const projectsRow = document.querySelector('.projects-row');

        projectsRow.addEventListener('wheel', (event) => {
        const deltaY = event.deltaY;
        const newScrollLeft = projectsRow.scrollLeft + deltaY;

        projectsRow.scrollLeft = newScrollLeft;
});