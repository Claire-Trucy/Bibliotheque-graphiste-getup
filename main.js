const button = document.getElementById('magnetic-button');

document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const buttonX = button.offsetLeft + button.clientWidth / 2;
    const buttonY = button.offsetTop + button.clientHeight / 2;

    const deltaX = mouseX - buttonX;
    const deltaY = mouseY - buttonY;

    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

    if (distance < 200) {
        // Modifier le facteur d'attraction selon votre préférence
        const attractionFactor = 0.1;
        const translateX = deltaX * attractionFactor;
        const translateY = deltaY * attractionFactor;

        button.style.transform = `translate(${translateX}px, ${translateY}px)`;
    } else {
        button.style.transform = '';
    }
});
