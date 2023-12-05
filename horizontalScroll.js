const projectshowcaserow = document.querySelector('.project-showcase-row');

        projectshowcaserow.addEventListener('wheel', (event) => {
        const deltaY = event.deltaY;
        const newScrollLeft = projectshowcaserow.scrollLeft + deltaY;

        projectshowcaserow.scrollLeft = newScrollLeft;
});