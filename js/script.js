document.addEventListener('DOMContentLoaded', function() {
    
    // --- PART A: FILTER BUTTONS ---
    const filterButtons = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.album-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove 'active' from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add 'active' to clicked button
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

    // --- PART B: ALBUM DATABASE (8 ITEMS) ---
    const albumData = {
        mansion: {
            title: "MANSION (2015)",
            desc: "His first major-label album, it was released with Capitol CMG and peaked at number one on the Christian charts.",
            tracks: ["1. Intro", "2. Mansion", "3. All I Have", "4. Wake Up", "5. Paralyzed"]
        },
        therapy: {
            title: "THERAPY SESSION (2016)",
            desc: "This album continued his success, winning a Gospel Music Association Dove Award for Rap/Hip Hop Album of the Year.",
            tracks: ["1. Intro 2", "2. Therapy Session", "3. I Just Wanna Know", "4. How Could You Leave Us", "5. Real"]
        },
        perception: {
            title: "PERCEPTION (2017)",
            desc: "This was his breakthrough album, charting at number one on the US Billboard 200 and achieving double-platinum sales.",
            tracks: ["1. Intro III", "2. Outcast", "3. 10 Feet Down", "4. Green Lights", "5. Let You Down"]
        },
        search: {
            title: "THE SEARCH (2019)",
            desc: "His second consecutive album to debut at number one on the Billboard 200, known for its introspective lyrics.",
            tracks: ["1. The Search", "2. Leave Me Alone", "3. Change", "4. Nate", "5. Time"]
        },
        hope: {
            title: "HOPE (2023)",
            desc: "This is NF's most recent studio album, which reached number two on the Billboard 200 chart.",
            tracks: ["1. HOPE", "2. MOTTO", "3. CAREFUL", "4. MAMA", "5. HAPPY"]
        },
        clouds: {
            title: "CLOUDS (THE MIXTAPE)",
            desc: "An inward-looking project that was his first mixtape release and debuted within the top three on the Billboard 200 chart.",
            tracks: ["1. CLOUDS", "2. THAT'S A JOKE", "3. JUST LIKE YOU", "4. STORY", "5. LOST"]
        },
        nfep: {
            title: "NF (EP)",
            desc: "A self-titled EP released with Capitol CMG that helped him gain traction in the Christian music scene.",
            tracks: ["1. All I Have", "2. Wake Up", "3. Hands Up", "4. Only One", "5. Thing Called Love"]
        },
        fear: {
            title: "FEAR (EP)",
            desc: "This is NF's most recent EP, released in November 2025.",
            tracks: ["1. FEAR", "2. RUNNING", "3. DARKNESS", "4. SILENCE", "5. BREAK"]
        }
    };

    // --- PART C: MODAL LOGIC ---
    const modal = document.getElementById("album-modal");
    const modalTitle = document.getElementById("modal-title");
    const modalDesc = document.getElementById("modal-desc");
    const modalList = document.getElementById("modal-tracklist");
    const closeBtn = document.querySelector(".close-btn");

    // 1. Listen for clicks on cards
    cards.forEach(card => {
        card.addEventListener('click', () => {
            // Get the unique ID from the HTML
            const albumID = card.getAttribute('data-id');
            // Find the matching data in our list above
            const data = albumData[albumID];

            if (data) {
                // Update text
                modalTitle.innerText = data.title;
                modalDesc.innerText = data.desc;
                
                // Reset list and add new tracks
                modalList.innerHTML = ""; 
                data.tracks.forEach(track => {
                    const li = document.createElement("li");
                    li.innerText = track;
                    modalList.appendChild(li);
                });

                // Show modal
                modal.style.display = "block";
            } else {
                console.log("No data found for: " + albumID);
            }
        });
    });

    // 2. Close when clicking 'X'
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.style.display = "none";
        });
    }

    // 3. Close when clicking outside
    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });

    console.log("All Scripts Loaded Successfully");
});
// --- PART D: NEWSLETTER VALIDATION ---
    const newsletterForm = document.getElementById('newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Stop page from reloading
            
            const emailInput = document.getElementById('email');
            const emailValue = emailInput.value;

            if(emailValue.includes('@') && emailValue.includes('.')) {
                alert("Welcome to the movement. You are subscribed.");
                emailInput.value = ""; // Clear the box
            } else {
                alert("Please enter a valid email address.");
            }
        });
    }