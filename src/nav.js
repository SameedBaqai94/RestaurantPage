const navBar = () => {

    const createNav = () => {
        const links = ['HOME', 'MENU'];
        const ids = links.map(ele => ele.toLowerCase());

        const nav = document.createElement('nav');
        const ul = document.createElement('ul');

        for (let i = 0; i < links.length; i++) {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.setAttribute('id', ids[i]);
            a.setAttribute('href', `#${ids[i]}`);
            a.textContent = links[i];
            li.appendChild(a);
            ul.appendChild(li);
        }

        nav.classList.add('nav');
        nav.appendChild(ul);

        return nav;
    }
    return { createNav }
}

export default navBar;