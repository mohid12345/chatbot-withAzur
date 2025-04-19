let currentId = "welcome";

function toggleChatPopup() {
    document.getElementById("chatPopup").classList.toggle("open");
    if (document.getElementById("chatBody").innerHTML === "") {
        renderChat(currentId);
    }
}

function resetChat() {
    // Clear the chat body and options
    const chatBody = document.getElementById("chatBody");
    const chatOptions = document.getElementById("chatOptions");

    chatBody.innerHTML = "";
    chatOptions.innerHTML = "";

    // Reset to welcome and render again
    currentId = "welcome";
    renderChat(currentId);
}

function renderChat(id) {
    const node = chatData.find((item) => item.id === id);
    if (!node) return;

    currentId = id;

    const chatBody = document.getElementById("chatBody");

    chatBody.innerHTML += `<div class="bot-message">${node.text}</div>`;
    chatBody.scrollTop = chatBody.scrollHeight;

    if (node.options) {
        node.options.forEach((opt) => {
            const btn = document.createElement("button");
            btn.className = "option-button";
            btn.textContent = opt.label;

            btn.onclick = () => {
                // Disable all option buttons after selection
                const allButtons = chatBody.querySelectorAll(".option-button");
                allButtons.forEach((b) => {
                    //   b.disabled = true;
                    b.classList.remove("selected"); // optional: remove previous selected
                });

                // Highlight the selected one
                btn.classList.add("selected");

                // Continue to next node
                renderChat(opt.nextId);
            };

            chatBody.appendChild(btn);
        });
    }

    if (node.carousel) {
        node.carousel.forEach((item) => {
            const card = document.createElement("div");
            card.className = "carousel-card";
            card.innerHTML = `
        <img src="${item.image}" alt="${item.title}" />
        <h4>${item.title}</h4>
        <p>${item.date || ""}</p>
        <p>${item.price || ""}</p>
        <button onclick="renderChat('${item.nextId}')">${item.buttonText}</button>
      `;
            chatBody.appendChild(card);
        });
    }

    //PRODUCT COUROSAL
    if (node.products) {
        const carouselWrapper = document.createElement("div");
        carouselWrapper.className = "carousel-container";

        node.products.forEach((p) => {
            const card = document.createElement("div");
            card.className = "carousel-card";
            card.innerHTML = `
            <img src="https://dummyimage.com/300x400/000/fff" alt="${p.name}" />
            <h4>${p.name}</h4>
            <p>${p.price}</p>
            <button>Buy Now</button></a>
        `;
            carouselWrapper.appendChild(card);
        });

        chatBody.appendChild(carouselWrapper);
    }

    // Carousel navigation functionality
    const prevArrow = document.querySelector(".prev-arrow");
    const nextArrow = document.querySelector(".next-arrow");
    const cards = document.querySelectorAll(".carousel-card");
    let currentIndex = 0;
    const cardsToShow = window.innerWidth < 768 ? 1 : 2; // Show 1 card on mobile, 2 on larger screens

    // Initially hide prev button if at start
    prevArrow.style.visibility = currentIndex === 0 ? "hidden" : "visible";

    // Update carousel position
    function updateCarousel() {
        const cardWidth = cards[0].offsetWidth + 30; // Card width + margin
        carouselTrack.style.transform = `translateX(-${currentIndex * cardWidth}px)`;

        // Show/hide arrows based on position
        prevArrow.style.visibility = currentIndex === 0 ? "hidden" : "visible";
        nextArrow.style.visibility = currentIndex >= cards.length - cardsToShow ? "hidden" : "visible";
    }

    // Event listeners for arrows
    prevArrow.addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });

    nextArrow.addEventListener("click", () => {
        if (currentIndex < cards.length - cardsToShow) {
            currentIndex++;
            updateCarousel();
        }
    });

    // Handle window resize
    window.addEventListener("resize", () => {
        // Recalculate cardsToShow based on new window width
        const newCardsToShow = window.innerWidth < 768 ? 1 : 2;
        if (cardsToShow !== newCardsToShow) {
            cardsToShow = newCardsToShow;
            // Reset position if needed
            if (currentIndex > cards.length - cardsToShow) {
                currentIndex = Math.max(0, cards.length - cardsToShow);
            }
            updateCarousel();
        }
    });

    // Initialize carousel
    updateCarousel();

    if (node.event) {
        // const eventData = node.event[0];
        console.log("envent data::", node.event);

        // const card = document.createElement('div');
        // card.className = 'carousel-card';

        // card.innerHTML = `
        //   <h4>${eventData.title}</h4>
        //   <p><strong>Subtitle:</strong> ${eventData.subtitle}</p>
        //   <ul>
        //     ${eventData.description.map(d => `<li>${d}</li>`).join('')}
        //   </ul>
        //   <a href="${eventData.link}" target="_blank">
        //     <button>${eventData.buttonText}</button>
        //   </a>
        // `;

        chatBody.appendChild(card);
    }
}
