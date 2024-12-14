const testimonials = [
    {
        name: 'John Doe',
        position: 'CEO, Company X',
        content: 'Working with KiTS has been an amazing experience. Their innovative solutions helped transform our business.',
        image: 'testimonial1.jpg'
    },
    {
        name: 'Jane Smith',
        position: 'Director, Company Y',
        content: 'The team at KiTS delivered beyond our expectations. Highly recommended!',
        image: 'testimonial2.jpg'
    }
    // Add more testimonials as needed
];

function initializeTestimonials() {
    const container = document.querySelector('.testimonials-container');
    
    testimonials.forEach(testimonial => {
        const card = document.createElement('div');
        card.className = 'testimonial-card';
        
        const image = document.createElement('img');
        image.src = `assets/${testimonial.image}`;
        image.alt = testimonial.name;
        image.className = 'testimonial-image';
        
        const content = document.createElement('p');
        content.className = 'testimonial-content';
        content.textContent = testimonial.content;
        
        const author = document.createElement('div');
        author.className = 'testimonial-author';
        
        const name = document.createElement('h4');
        name.textContent = testimonial.name;
        
        const position = document.createElement('p');
        position.textContent = testimonial.position;
        
        author.appendChild(name);
        author.appendChild(position);
        
        card.appendChild(image);
        card.appendChild(content);
        card.appendChild(author);
        
        container.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', initializeTestimonials);