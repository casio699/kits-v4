const services = [
    {
        title: 'Service 1',
        description: 'Description of your first service offering.',
        icon: 'service1-icon.svg'
    },
    {
        title: 'Service 2',
        description: 'Description of your second service offering.',
        icon: 'service2-icon.svg'
    },
    {
        title: 'Service 3',
        description: 'Description of your third service offering.',
        icon: 'service3-icon.svg'
    }
    // Add more services as needed
];

function initializeServices() {
    const servicesGrid = document.querySelector('.services-grid');
    
    services.forEach(service => {
        const card = document.createElement('div');
        card.className = 'service-card';
        
        const icon = document.createElement('img');
        icon.src = `assets/${service.icon}`;
        icon.alt = `${service.title} icon`;
        icon.className = 'service-icon';
        
        const title = document.createElement('h3');
        title.textContent = service.title;
        
        const description = document.createElement('p');
        description.textContent = service.description;
        
        const learnMore = document.createElement('a');
        learnMore.href = '#';
        learnMore.textContent = 'Learn More';
        learnMore.className = 'learn-more-btn';
        
        card.appendChild(icon);
        card.appendChild(title);
        card.appendChild(description);
        card.appendChild(learnMore);
        
        servicesGrid.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', initializeServices);