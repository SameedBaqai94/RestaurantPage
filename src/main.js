const mainPage = () => {
    const mainUI = () => {
        const div = document.createElement('div');
        div.classList.add('qouteContainer');
        const p = document.createElement('p');

        p.textContent = '"I think of dieting, then I eat pizza" - Lara Stone';
        div.appendChild(p);

        return div;
    }
    return { mainUI }
}

export default mainPage;