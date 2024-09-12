document.addEventListener('DOMContentLoaded', () => {
    const rentButtons = document.querySelectorAll('.rent-btn');
    
    rentButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Car has been successfully rented!');
        });
    });
});

