// Data for Walking Simulators
const walkingContent = [
    {
        image: "img/Manifold_Garden_header.jpg",
        title: "Manifold Garden",
        description: "Explore a mind-bending world of impossible geometry in Manifold Garden. Solve puzzles to uncover new perspectives and redefine gravity as you explore the infinite.",
        details: {
            link: "https://store.steampowered.com/app/473950/Manifold_Garden/",
            rating: "4.5/5"
        },
        video: "https://video.fastly.steamstatic.com/store_trailers/256803952/movie480_vp9.webm?t=1602099599"
    },
    {
        image: "img/Return_of_the_Obra_Dinn_header.jpg",
        title: "Return of the Obra Dinn",
        description: "Investigate the mystery of the Obra Dinn, a merchant ship that drifted into port with no crew. Use logic and deduction to solve the fate of its sixty passengers.",
        details: {
            link: "https://store.steampowered.com/app/653530/Return_of_the_Obra_Dinn/",
            rating: "4.8/5"
        },
        video: "https://video.fastly.steamstatic.com/store_trailers/256728392/movie480.webm?t=1686697587"
    },
    {
        image: "img/superliminal_header.jpg",
        title: "Superliminal",
        description: "Dive into a world of forced perspective and optical illusions in Superliminal. Solve puzzles by changing your perception of objects and their size.",
        details: {
            link: "https://store.steampowered.com/app/1049410/Superliminal/",
            rating: "4.7/5"
        },
        video: "https://video.fastly.steamstatic.com/store_trailers/256803623/movie480_vp9.webm?t=1602530552"
    }
];

let currentIndex = 0;

function changeWalkingContent(direction) {
    const slider = document.querySelector('.image-slider');
    const buttons = document.querySelectorAll('.controls button');

    // Update currentIndex based on direction
    if (direction === 'next') {
        currentIndex = (currentIndex + 1) % walkingContent.length;
    } else if (direction === 'prev') {
        currentIndex = (currentIndex - 1 + walkingContent.length) % walkingContent.length;
    } else if (typeof direction === 'number') {
        currentIndex = direction - 1;
    }

    // Move the slider
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;

    // Update text content
    document.getElementById("walkingTitle").textContent = walkingContent[currentIndex].title;
    document.getElementById("walkingDescription").textContent = walkingContent[currentIndex].description;
    document.querySelector(".details a").href = walkingContent[currentIndex].details.link;
    document.querySelector(".details span").textContent = `Rating: ${walkingContent[currentIndex].details.rating}`;

    // Update active button styling
    buttons.forEach((button, index) => {
        if (index === currentIndex) {
            button.classList.add('active'); // Highlight current button
        } else {
            button.classList.remove('active'); // Remove highlight from others
        }
    });
}

// Play and pause video on hover
document.querySelectorAll('.image-wrapper').forEach((wrapper) => {
    const video = wrapper.querySelector('video');

    // Add hover events to play/pause the video
    wrapper.addEventListener('mouseenter', () => {
        video.play();
        wrapper.style.transform = 'scale(1.1)'; // Zoom-in effect
        video.style.transform = 'scale(1.2)'; // Make the video larger
    });

    wrapper.addEventListener('mouseleave', () => {
        video.pause();
        video.currentTime = 0; // Reset video to the start
        wrapper.style.transform = 'scale(1)'; // Reset zoom effect
        video.style.transform = 'scale(1)'; // Reset video size
    });
});

// Initialize: Set the first button as active
document.addEventListener('DOMContentLoaded', () => {
    changeWalkingContent(1);
});
