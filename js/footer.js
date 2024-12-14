function initializeFooter() {
    const footer = document.getElementById('main-footer');
    footer.className = 'footer';

    const footerContainer = document.createElement('div');
    footerContainer.className = 'footer-container';

    // Create social media links
    const socialLinks = document.createElement('div');
    socialLinks.className = 'social-links';

    const socialMedia = [
        { platform: 'Instagram', icon: 'instagram.svg', url: 'https://instagram.com/kits' },
        { platform: 'Facebook', icon: 'facebook.svg', url: 'https://facebook.com/kits' },
        { platform: 'WhatsApp', icon: 'whatsapp.svg', url: 'https://wa.me/yournumber' },
        { platform: 'YouTube', icon: 'youtube.svg', url: 'https://youtube.com/@kits' }
    ];

    socialMedia.forEach(social => {
        const link = document.createElement('a');
        link.href = social.url;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        
        const icon = document.createElement('img');
        icon.src = `assets/${social.icon}`;
        icon.alt = `${social.platform} icon`;
        icon.className = 'social-icon';
        
        link.appendChild(icon);
        socialLinks.appendChild(link);
    });

    // Create footer sections
    const sections = [
        {
            title: 'Quick Links',
            links: [
                { text: 'About Us', url: 'about.html' },
                { text: 'Services', url: '#services' },
                { text: 'Projects', url: 'projects.html' },
                { text: 'Contact', url: '#contact' }
            ]
        },
        {
            title: 'Contact Info',
            content: [
                'Email: info@kits.com',
                'Phone: +1 234 567 890',
                'Address: Your Company Address'
            ]
        }
    ];

    sections.forEach(section => {
        const div = document.createElement('div');
        div.className = 'footer-section';
        
        const title = document.createElement('h3');
        title.textContent = section.title;
        div.appendChild(title);

        if (section.links) {
            const ul = document.createElement('ul');
            section.links.forEach(link => {
                const li = document.createElement('li');
                const a = document.createElement('a');
                a.href = link.url;
                a.textContent = link.text;
                li.appendChild(a);
                ul.appendChild(li);
            });
            div.appendChild(ul);
        } else if (section.content) {
            section.content.forEach(text => {
                const p = document.createElement('p');
                p.textContent = text;
                div.appendChild(p);
            });
        }

        footerContainer.appendChild(div);
    });

    footerContainer.appendChild(socialLinks);
    footer.appendChild(footerContainer);

    // Add copyright notice
    const copyright = document.createElement('div');
    copyright.className = 'copyright';
    copyright.textContent = `© ${new Date().getFullYear()} KiTS. All rights reserved.`;
    footer.appendChild(copyright);
}

document.addEventListener('DOMContentLoaded', initializeFooter);