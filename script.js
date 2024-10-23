document.addEventListener("DOMContentLoaded", () => {
    const contactButton = document.querySelector('.contact-button');
    
    contactButton.addEventListener('click', (event) => {
        event.preventDefault();
        alert('¡Gracias por tu mensaje! Pronto me pondré en contacto contigo.');
        document.getElementById('contact-form').reset();  // Resetea el formulario
    });

    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.2)";
        });

        card.addEventListener('mouseleave', () => {
            card.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
        });
    });
});

document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', function() {
    });a
});

