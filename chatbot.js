let currentId = "welcome";

function toggleChatPopup() {
    document.getElementById("chatPopup").classList.toggle("open");
    if (document.getElementById("chatBody").innerHTML === "") {
        renderChat(currentId);
    }
}

function toggleClosePopup() {
    document.getElementById("chatPopup").classList.toggle("open");
    if (document.getElementById("chatBody").innerHTML === "") {
        renderChat(currentId);
    }
    resetChat();
}

function resetChat() {
    const chatBody = document.getElementById("chatBody");

    chatBody.innerHTML = "";

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
        const  wrapperOptions = document.createElement("div")
        wrapperOptions.className = "options-wrapper"
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
        const carouselWrapper = document.createElement("div");
        carouselWrapper.className = "carousel-container"; // flex row wrapper

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
            carouselWrapper.appendChild(card);
        });

        chatBody.appendChild(carouselWrapper);
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

    
    if (node.event) {
        const carouselWrapper = document.createElement("div");
        carouselWrapper.className = "event-container"; // make sure this is styled as flex row
    
        node.event.forEach((p) => {
            
            const card = document.createElement("div");
            card.className = "event-card"; 
    
            card.innerHTML = `
                <div class="event-image-container">
                    <img src="${p.image}" alt="${p.title}" />
                    <div class="event-title">${p.title}</div>
                    <div class="event-subtitle">${p.subtitle}</div>
                </div>
                <ul>
                    ${p.description.map(d => `<li>${d}</li>`).join("")}
                </ul>
                <a href="${p.link}" target="_blank">
                    <button>${p.buttonText}</button>
                </a>
            `;
    
            carouselWrapper.appendChild(card);
        });
    
        chatBody.appendChild(carouselWrapper);
    }
    
}
