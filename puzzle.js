// Data for Walking Simulators
const walkingContent = [
    {
        image: "img/WS/What_Remains_of_Edith_Finch_header.jpg",
        title: "What Remains of Edith Finch",
        description: "Explore a collection of strange tales about a family in Washington state. Walk through the life of Edith Finch and uncover the secrets of her family’s history.",
        details: {
            link: "https://store.steampowered.com/app/501300/What_Remains_of_Edith_Finch/",
            rating: "4.9/5"
        },
        video: "https://video.fastly.steamstatic.com/store_trailers/256720203/movie480.webm?t=1529339369"
    },
    {
        image: "img/WS/Antichamber_header.jpg",
        title: "Antichamber",
        description: "Experience a mind-bending psychological exploration game set in a world where nothing can be taken for granted. Solve puzzles and rethink your expectations.",
        details: {
            link: "https://store.steampowered.com/app/219890/Antichamber/",
            rating: "4.6/5"
        },
        video: "https://video.fastly.steamstatic.com/store_trailers/2028342/movie480.webm?t=1447357349"
    },
    {
        image: "img/WS/Manifold_Garden_header.jpg",
        title: "Manifold Garden",
        description: "Explore a mind-bending world of impossible geometry in Manifold Garden. Solve puzzles to uncover new perspectives and redefine gravity as you explore the infinite.",
        details: {
            link: "https://store.steampowered.com/app/473950/Manifold_Garden/",
            rating: "4.5/5"
        },
        video: "https://video.fastly.steamstatic.com/store_trailers/256803952/movie480_vp9.webm?t=1602099599"
    },
    {
        image: "img/WS/Return_of_the_Obra_Dinn_header.jpg",
        title: "Return of the Obra Dinn",
        description: "Investigate the mystery of the Obra Dinn, a merchant ship that drifted into port with no crew. Use logic and deduction to solve the fate of its sixty passengers.",
        details: {
            link: "https://store.steampowered.com/app/653530/Return_of_the_Obra_Dinn/",
            rating: "4.8/5"
        },
        video: "https://video.fastly.steamstatic.com/store_trailers/256728392/movie480.webm?t=1686697587"
    },
    {
        image: "img/WS/superliminal_header.jpg",
        title: "Superliminal",
        description: "Dive into a world of forced perspective and optical illusions in Superliminal. Solve puzzles by changing your perception of objects and their size.",
        details: {
            link: "https://store.steampowered.com/app/1049410/Superliminal/",
            rating: "4.7/5"
        },
        video: "https://video.fastly.steamstatic.com/store_trailers/256803623/movie480_vp9.webm?t=1602530552"
    },
    {
        image: "img/WS/The_Unfinished_Swan_header.jpg",
        title: "The Unfinished Swan",
        description: "Embark on a magical journey through an unfinished world full of mystery and wonder in this visually unique game.",
        details: {
            link: "https://store.steampowered.com/app/325610/The_Unfinished_Swan/",
            rating: "4.5/5"
        },
        video: "https://video.fastly.steamstatic.com/store_trailers/256797664/movie480_vp9.webm?t=1599753080"
    },
    {
        image: "img/WS/Frame_of_Mind_header.jpg",
        title: "Frame of Mind",
        description: "Challenge your perception in Frame of Mind, a psychological puzzle platformer exploring the concept of reality and imagination.",
        details: {
            link: "https://store.steampowered.com/app/1515670/Frame_of_Mind/",
            rating: "4.4/5"
        },
        video: "https://video.fastly.steamstatic.com/store_trailers/256810994/movie480_vp9.webm?t=1610443343"
    }
];






let currentWalkingIndex = 0;

function changeWalkingContent(direction) {
    const slider = document.querySelector('.image-slider');
    const buttons = document.querySelectorAll('.controls button');

    // Update currentWalkingIndex based on direction
    if (direction === 'next') {
        currentWalkingIndex = (currentWalkingIndex + 1) % walkingContent.length;
    } else if (direction === 'prev') {
        currentWalkingIndex = (currentWalkingIndex - 1 + walkingContent.length) % walkingContent.length;
    } else if (typeof direction === 'number') {
        currentWalkingIndex = direction - 1;
    }

    // Move the slider
    slider.style.transform = `translateX(-${currentWalkingIndex * 100}%)`;

    // Update text content
    document.getElementById("walkingTitle").textContent = walkingContent[currentWalkingIndex].title;
    document.getElementById("walkingDescription").textContent = walkingContent[currentWalkingIndex].description;
    document.querySelector(".details a").href = walkingContent[currentWalkingIndex].details.link;
    document.querySelector(".details span").textContent = `Rating: ${walkingContent[currentWalkingIndex].details.rating}`;

    // Update active button styling
    buttons.forEach((button, index) => {
        if (index === currentWalkingIndex) {
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
        // wrapper.style.transform = 'scale(1.1)'; // Zoom-in effect
        // video.style.transform = 'scale(1.1)'; // Make the video larger
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





///////////////////////////////////////////////////////////////////////////

// Data for Point & Click Games
const pointAndClickContent = [
    {
        image: "img/P&C/Gorogoa_header.jpg",
        title: "Gorogoa",
        description: "Explore the intricacies of art and puzzle-solving in Gorogoa, a beautifully hand-illustrated game.",
        details: {
            link: "https://store.steampowered.com/app/557600/Gorogoa/",
            rating: "4.9/5"
        },
        video: "https://video.fastly.steamstatic.com/store_trailers/256717596/movie480.webm?t=1527026591"
    },
    {
        image: "img/P&C/Monument_Valley_header.jpg",
        title: "Monument Valley",
        description: "A surreal exploration through architecture and impossible geometry.",
        details: {
            link: "https://store.steampowered.com/app/1234567/Monument_Valley/",
            rating: "4.8/5"
        },
        video: "https://video.fastly.steamstatic.com/store_trailers/256895871/movie480_vp9.webm?t=1657623824"
    },
    {
        image: "img/P&C/Rusty_Lake_Hotel_header.jpg",
        title: "Rusty Lake Series",
        description: "Dive into the mysterious and creepy world of Rusty Lake with clever puzzles.",
        details: {
            link: "https://store.steampowered.com/app/1234568/Rusty_Lake_Series/",
            rating: "4.7/5"
        },
        video: "https://video.fastly.steamstatic.com/store_trailers/256832191/movie480_vp9.webm?t=1667254773"
    },
    {
        image: "img/P&C/Chants_of_Sennaar_header.jpg",
        title: "Chants of Sennaar",
        description: "Unravel the secrets of a fragmented society in this beautiful puzzle game.",
        details: {
            link: "https://store.steampowered.com/app/1961950/Chants_of_Sennaar/",
            rating: "4.7/5"
        },
        video: "https://video.fastly.steamstatic.com/store_trailers/256967855/movie480_vp9.webm?t=1693929330"
    },
    {
        image: "img/P&C/Machinarium_header.jpg",
        title: "Machinarium",
        description: "Help a little robot solve puzzles and find his way back home in this steampunk adventure.",
        details: {
            link: "https://store.steampowered.com/app/40700/Machinarium/",
            rating: "4.8/5"
        },
        video: "https://video.fastly.steamstatic.com/store_trailers/256718460/movie480.webm?t=1527759803"
    },
    {
        image: "img/P&C/Creaks_header.jpg",
        title: "Creaks",
        description: "Enter a mysterious mansion full of creepy creatures and clever puzzles.",
        details: {
            link: "https://store.steampowered.com/app/956030/Creaks/",
            rating: "4.6/5"
        },
        video: "https://video.fastly.steamstatic.com/store_trailers/256791563/movie480_vp9.webm?t=1593693655"
    },
    {
        image: "img/P&C/The_Room_header.jpg",
        title: "The Room",
        description: "Solve intricate mechanical puzzles and uncover the mysteries of The Room.",
        details: {
            link: "https://store.steampowered.com/app/288160/The_Room/",
            rating: "4.8/5"
        },
        video: "https://video.fastly.steamstatic.com/store_trailers/2032805/movie480.webm?t=1447362253"
    },
    {
        image: "img/P&C/Isoland_header.jpg",
        title: "Isoland Series",
        description: "Embark on a mysterious adventure through the quirky and atmospheric Isoland.",
        details: {
            link: "https://store.steampowered.com/app/833860/Isoland/",
            rating: "4.5/5"
        },
        video: "https://video.fastly.steamstatic.com/store_trailers/256714063/movie480.webm?t=1524018754"
    },
    {
        image: "img/P&C/A_Little_to_the_Left_header.jpg",
        title: "A Little to the Left",
        description: "Tidy up household objects to find satisfaction and uncover hidden secrets.",
        details: {
            link: "https://store.steampowered.com/app/1629520/A_Little_to_the_Left/",
            rating: "4.6/5"
        },
        video: "https://video.fastly.steamstatic.com/store_trailers/256915259/movie480_vp9.webm?t=1668016351"
    }
];


let currentPointIndex = 0;


function changePointContent(direction) {
    // console.log("Function triggered with direction:", direction);
    // Select the slider and buttons for Point & Click
    const slider = document.querySelector('.point-click-slider');
    const buttons = document.querySelectorAll('.point-click-controls button');

    // Update currentPointIndex based on direction
    if (direction === 'next') {
        currentPointIndex = (currentPointIndex + 1) % pointAndClickContent.length;
    } else if (direction === 'prev') {
        currentPointIndex = (currentPointIndex - 1 + pointAndClickContent.length) % pointAndClickContent.length;
    } else if (typeof direction === 'number') {
        currentPointIndex = direction - 1;
    }

    // Move the slider
    slider.style.transform = `translateX(-${currentPointIndex * 100}%)`;

    // Update the text content
    document.getElementById("pointClickTitle").textContent = pointAndClickContent[currentPointIndex].title;
    document.getElementById("pointClickDescription").textContent = pointAndClickContent[currentPointIndex].description;
    document.querySelector(".point-click-details a").href = pointAndClickContent[currentPointIndex].details.link;
    document.querySelector(".point-click-details span").textContent = `Rating: ${pointAndClickContent[currentPointIndex].details.rating}`;

    // Update active button styling
    buttons.forEach((button, index) => {
        if (index === currentPointIndex) {
            button.classList.add('active'); // Highlight current button
        } else {
            button.classList.remove('active'); // Remove highlight from others
        }
    });
}

// Add hover effects for videos in the Point & Click section
document.querySelectorAll('.point-click-image-wrapper').forEach((wrapper) => {
    const video = wrapper.querySelector('video');

    // Add hover events to play/pause the video
    wrapper.addEventListener('mouseenter', () => {
        video.play();
        // wrapper.style.transform = 'scale(1.1)'; // Zoom-in effect
        // video.style.transform = 'scale(1.2)'; // Make the video larger
    });

    wrapper.addEventListener('mouseleave', () => {
        video.pause();
        video.currentTime = 0; // Reset video to the start
        wrapper.style.transform = 'scale(1)'; // Reset zoom effect
        video.style.transform = 'scale(1)'; // Reset video size
    });
});

// Initialize: Set the first button as active for Point & Click
document.addEventListener('DOMContentLoaded', () => {
    changePointContent(1); // Activate the first slide
});




////////////////////////////////////////////////////////////////////////////////////////////////////

// Data for Platformers
const platformerContent = [
    {
        image: "img/PF/GRIS_header.jpg",
        title: "GRIS",
        description: "A serene and evocative experience, free of danger or frustration. Explore a world brought to life with delicate art and animation.",
        details: {
            link: "https://store.steampowered.com/app/683320/GRIS/",
            rating: "4.9/5"
        },
        video: "https://video.fastly.steamstatic.com/store_trailers/256738119/movie480.webm?t=1544618804"
    },
    {
        image: "img/PF/LIMBO_header.jpg",
        title: "LIMBO",
        description: "Uncertain of his sister's fate, a boy enters LIMBO. A haunting and atmospheric puzzle-platformer.",
        details: {
            link: "https://store.steampowered.com/app/48000/LIMBO/",
            rating: "4.8/5"
        },
        video: "https://video.fastly.steamstatic.com/store_trailers/256828212/movie480_vp9.webm?t=1617191650"
    },
    {
        image: "img/PF/FAR_Lone_Sails_header.jpg",
        title: "FAR: Lone Sails",
        description: "Traverse a dried-out sea in a unique landship, solving puzzles and uncovering the remnants of a once-prosperous world.",
        details: {
            link: "https://store.steampowered.com/app/609320/FAR_Lone_Sails/",
            rating: "4.7/5"
        },
        video: "https://video.fastly.steamstatic.com/store_trailers/256711611/movie480.webm?t=1521110522"
    },
    {
        image: "img/PF/Pikuniku_header.jpg",
        title: "Pikuniku",
        description: "A delightful dystopian adventure that will make you laugh while uncovering a conspiracy.",
        details: {
            link: "https://store.steampowered.com/app/572890/Pikuniku/",
            rating: "4.6/5"
        },
        video: "https://video.fastly.steamstatic.com/store_trailers/256741328/movie480.webm?t=1548346313"
    },
    {
        image: "img/PF/Hue_header.jpg",
        title: "Hue",
        description: "A vibrant, award-winning puzzle-platformer where you alter the world by changing its background color.",
        details: {
            link: "https://store.steampowered.com/app/383270/Hue/",
            rating: "4.5/5"
        },
        video: "https://video.fastly.steamstatic.com/store_trailers/256669861/movie480.webm?t=1474553838"
    },
    {
        image: "img/PF/FRAMED_header.jpg",
        title: "FRAMED",
        description: "A noir-puzzle game where you rearrange comic panels to change the outcome of the story.",
        details: {
            link: "https://store.steampowered.com/app/322450/FRAMED_Collection/",
            rating: "4.4/5"
        },
        video: "https://video.fastly.steamstatic.com/store_trailers/256717071/movie480.webm?t=1552292699"
    },
    {
        image: "img/PF/Firework_header.jpg",
        title: "Firework",
        description: "A thrilling puzzle-platformer that explores themes of sacrifice, fear, and determination.",
        details: {
            link: "https://store.steampowered.com/app/1371470/Firework/",
            rating: "4.3/5"
        },
        video: "https://video.fastly.steamstatic.com/store_trailers/256853450/movie480_vp9.webm?t=1632974722"
    }
];

// Add changePlatformerContent function
let currentPlatformerIndex = 0;

function changePlatformerContent(direction) {
    const slider = document.querySelector('.platformer-slider');
    const buttons = document.querySelectorAll('.platformer-controls button');

    // Update currentPlatformerIndex based on direction
    if (direction === 'next') {
        currentPlatformerIndex = (currentPlatformerIndex + 1) % platformerContent.length;
    } else if (direction === 'prev') {
        currentPlatformerIndex = (currentPlatformerIndex - 1 + platformerContent.length) % platformerContent.length;
    } else if (typeof direction === 'number') {
        currentPlatformerIndex = direction - 1;
    }

    // Move the slider
    slider.style.transform = `translateX(-${currentPlatformerIndex * 100}%)`;

    // Update text content
    document.getElementById("platformerTitle").textContent = platformerContent[currentPlatformerIndex].title;
    document.getElementById("platformerDescription").textContent = platformerContent[currentPlatformerIndex].description;
    document.querySelector(".platformer-details a").href = platformerContent[currentPlatformerIndex].details.link;
    document.querySelector(".platformer-details span").textContent = `Rating: ${platformerContent[currentPlatformerIndex].details.rating}`;

    // Update active button styling
    buttons.forEach((button, index) => {
        if (index === currentPlatformerIndex) {
            button.classList.add('active'); // Highlight current button
        } else {
            button.classList.remove('active'); // Remove highlight from others
        }
    });
}

// Initialize Platformers section
document.addEventListener('DOMContentLoaded', () => {
    changePlatformerContent(1);
});
