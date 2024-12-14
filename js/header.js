function createNavMenu() {
    const nav = document.createElement('nav');
    nav.className = 'nav-menu';

    const menuItems = [
        { text: 'Home', link: 'index.html' },
        {
            text: 'About',
            submenu: [
                { text: 'About Us', link: 'about.html' },
                { text: 'Our Team', link: 'team.html' },
                { text: 'Our Mission', link: 'mission.html' }
            ]
        },
        {
            text: 'Projects',
            submenu: [
                { text: 'Recent Projects', link: 'recent-projects.html' },
                { text: 'Upcoming Projects', link: 'upcoming-projects.html' },
                { text: 'Project Gallery', link: 'gallery.html' }
            ]
        },
        { text: 'Services', link: '#services' },
        { text: 'Contact', link: '#contact' }
    ];

    const ul = document.createElement('ul');
    ul.className = 'nav-list';

    menuItems.forEach(item => {
        const li = document.createElement('li');
        li.className = 'nav-item';

        if (item.submenu) {
            const dropdownBtn = document.createElement('button');
            dropdownBtn.className = 'dropdown-btn';
            dropdownBtn.textContent = item.text;
            
            const submenu = document.createElement('ul');
            submenu.className = 'submenu';
            
            item.submenu.forEach(subItem => {
                const subLi = document.createElement('li');
                const subLink = document.createElement('a');
                subLink.href = subItem.link;
                subLink.textContent = subItem.text;
                subLi.appendChild(subLink);
                submenu.appendChild(subLi);
            });

            li.appendChild(dropdownBtn);
            li.appendChild(submenu);
        } else {
            const link = document.createElement('a');
            link.href = item.link;
            link.textContent = item.text;
            li.appendChild(link);
        }

        ul.appendChild(li);
    });

    nav.appendChild(ul);
    return nav;
}

function initializeHeader() {
    const header = document.getElementById('main-header');
    header.className = 'header';

    const headerContainer = document.createElement('div');
    headerContainer.className = 'header-container';

    const logoContainer = document.createElement('div');
    logoContainer.className = 'logo-container';

    const logo = document.createElement('img');
    logo.src = 'assets/full-logo.svg';
    logo.alt = 'KiTS Logo';
    logo.className = 'logo';

    const companyName = document.createElement('h1');
    companyName.className = 'company-name';
    companyName.textContent = 'KiTS';

    const motto = document.createElement('p');
    motto.className = 'motto';
    motto.textContent = 'Innovation Through Technology';

    logoContainer.appendChild(logo);
    logoContainer.appendChild(companyName);
    headerContainer.appendChild(logoContainer);
    headerContainer.appendChild(createNavMenu());
    headerContainer.appendChild(motto);
    header.appendChild(headerContainer);
}

document.addEventListener('DOMContentLoaded', initializeHeader);