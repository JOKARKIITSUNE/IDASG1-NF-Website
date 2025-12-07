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
document.addEventListener('DOMContentLoaded', function() {
    
    // --- 1. FILTER FUNCTIONALITY ---
    const filterButtons = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.album-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            const filterValue = button.getAttribute('data-filter');

            cards.forEach(card => {
                if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // --- 2. MODAL DATA (The Album Details) ---
    const albumData = {
        fear: {
            title: "FEAR",
            desc: "The latest chapter. A journey into the darkest corners of the mind, confronting the anxieties that hold us back.",
            tracks: ["1. Fear", "2. Safe", "3. Let Me Go", "4. Running", "5. The End"]
        },
        hope: {
            title: "HOPE",
            desc: "A turning point. Moving away from the darkness and finding a new direction.",
            tracks: ["1. HOPE", "2. MOTTO", "3. CAREFUL", "4. MAMA", "5. HAPPY"]
        },
        search: {
            title: "THE SEARCH",
            desc: "The breakthrough album. Questioning everything and looking for answers.",
            tracks: ["1. The Search", "2. Leave Me Alone", "3. Change", "4. Nate", "5. Time"]
        },
        clouds: {
            title: "CLOUDS (THE MIXTAPE)",
            desc: "A raw collection of thoughts and technical skill.",
            tracks: ["1. CLOUDS", "2. THAT'S A JOKE", "3. JUST LIKE YOU", "4. STORY", "5. LOST"]
        }
    };

    // --- 3. MODAL LOGIC ---
    const modal = document.getElementById("album-modal");
    const modalTitle = document.getElementById("modal-title");
    const modalDesc = document.getElementById("modal-desc");
    const modalList = document.getElementById("modal-tracklist");
    const closeBtn = document.querySelector(".close-btn");

    // Open Modal when card is clicked
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const albumID = card.getAttribute('data-id');
            const data = albumData[albumID];

            if (data) {
                // Populate the modal
                modalTitle.innerText = data.title;
                modalDesc.innerText = data.desc;
                
                // Clear previous tracks and add new ones
                modalList.innerHTML = ""; 
                data.tracks.forEach(track => {
                    const li = document.createElement("li");
                    li.innerText = track;
                    modalList.appendChild(li);
                });

                // Show the modal
                modal.style.display = "block";
            }
        });
    });

    // Close Modal when 'X' is clicked
    closeBtn.addEventListener('click', () => {
        modal.style.display = "none";
    });

    // Close Modal when clicking outside the box
    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });

    console.log("NF Website Interactions Loaded");
});