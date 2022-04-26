const menuPage = () => {
    const menuUI = () => {
        const div = document.createElement('div');
        const pizzas = ['Chesse Pizza', 'Pepperoni Pizza', 'Chicken Pizza'];
        div.classList.add('menuContainer');

        for (let i = 0; i < 2; i++) {
            const childDiv = document.createElement('div');
            childDiv.classList.add('childDiv');
            const img = document.createElement('img');
            const h3 = document.createElement('h3');
            const p = document.createElement('p');

            img.setAttribute('src', `./src/img/img${i + 2}.jpg`)
            childDiv.appendChild(img);

            h3.textContent = pizzas[i];
            p.textContent = '$12.99';

            childDiv.appendChild(h3);
            childDiv.appendChild(p);
            div.appendChild(childDiv);
        }



        return div;
    }
    return { menuUI }
}

export default menuPage;