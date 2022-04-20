const navBar = () => {

    const createNav = () => {
        const links = ['HOME', 'MENU', 'CONTACT'];
        const ids = links.map(ele => ele.toLowerCase());

        const nav = document.createElement('nav');
        const ul = document.createElement('ul');

        for (let i = 0; i < links.length; i++) {
            const li = document.createElement('li');
            li.setAttribute('id', ids[i]);
            li.textContent = links[i];
            ul.appendChild(li);
        }

        nav.classList.add('nav');
        nav.appendChild(ul);

        return nav;
    }
    return { createNav }
}

export default navBar;