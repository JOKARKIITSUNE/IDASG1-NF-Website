// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function() {
    
    // Select all filter buttons and all album cards
    const filterButtons = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.album-card');

    // Add click event to each button
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            
            // 1. Remove 'active' class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // 2. Add 'active' class to the clicked button
            button.classList.add('active');

            // 3. Get the category to filter by (e.g., 'album' or 'single')
            const filterValue = button.getAttribute('data-filter');

            // 4. Loop through all cards and show/hide based on category
            cards.forEach(card => {
                if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                    card.style.display = 'block'; // Show item
                } else {
                    card.style.display = 'none'; // Hide item
                }
            });
        });
    });

    console.log("NF Website Loaded Successfully");
});