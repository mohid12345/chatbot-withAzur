const chatData = [
    {
        id: "welcome",
        text: "Welcome to Halleck Vineyard fellow wine enthusiast! I am Halle, your Virtual Concierge...",
        options: [
            { label: "Taste our wines", nextId: "taste" },
            { label: "Explore our Memberships", nextId: "membership" },
            { label: "Shop our wines", nextId: "shop" },
            { label: "Events", nextId: "events" },
            { label: "Ask a Question", nextId: "ask" },
        ],
    },
    {
        id: "shop",
        text: "We have so many good wines, let's figure out your preference...",
        options: [
            { label: "North Coast", nextId: "northCoast" },
            { label: "Russian River Valley", nextId: "russianRiver" },
            { label: "Sonoma Coast", nextId: "sonomaCoast" },
            { label: "Sonoma Mountain", nextId: "sonomaMountain" },
        ],
    },
    {
        id: "sonomaCoast",
        text: "Here are some wines from Sonoma Coast",
        products: [
            {
                name: "Pinot Noir Sonoma Coast Hillside Cuvee, 2019",
                price: "$55.00",
                image: "./public/images/download.jpg",
            },
            {
                name: "Chardonnay Sonoma Coast Reserve, 2020",
                price: "$48.00",
                image: "http://dummyimage.com/300x400/000/fff",
            },
            {
                name: "Syrah Sonoma Coast Estate Grown, 2018",
                price: "$60.00",
                image: "https://dummyimage.com/300x400/000/fff",
            },
            {
                name: "Rosé Sonoma Coast Vineyard Blend, 2021",
                price: "$38.00",
                image: "https://dummyimage.com/300x400/000/fff",
            },
        ],
    },
    {
        id: "taste",
        text: "Here are some experiences you shouldn't miss to 'Join us at our Halleck Estate for a sublime tasting experience'",
        event: [
            {
                title: "Sonoma Wine Tasting",
                subtitle: "$65/person",
                description: [
                    "20 guests max per wine tasting",
                    "Open Thursday thru Sunday",
                    "Seated wine tastings at 11 am & 3 pm",
                    "Reservations Required",
                    "$78pp for groups of 7-12",
                ],
                image: "sonoma-tasting.jpg",
                buttonText: "Reserve",
                link: "/reserve/sonoma-wine-tasting",
            },
        ],
    },
    {
        id: "memberships",
        text: "Explore our memberships to get exclusive wines, tastings, and access to events.",
        options: [
            { label: "Taste our wines", nextId: "taste" },
            { label: "Shop our wines", nextId: "shop" },
            { label: "Events", nextId: "events" },
            { label: "Ask a Question", nextId: "ask" },
        ],
    },
    {
        id: "shop",
        text: "Discover our exquisite wine collection, hand-picked for every wine lover.",
        options: [
            { label: "Taste our wines", nextId: "taste" },
            { label: "Explore our Memberships", nextId: "memberships" },
            { label: "Events", nextId: "events" },
            { label: "Ask a Question", nextId: "ask" },
        ],
    },
    {
        id: "events",
        text: "We host a variety of events ranging from intimate tastings to grand vineyard celebrations.",
        options: [
            { label: "Taste our wines", nextId: "taste" },
            { label: "Explore our Memberships", nextId: "memberships" },
            { label: "Shop our wines", nextId: "shop" },
            { label: "Ask a Question", nextId: "ask" },
        ],
    },
    {
        id: "ask",
        text: "Sure, feel free to ask me anything about Halleck Vineyard, our wines, or events!",
        options: [
            { label: "Taste our wines", nextId: "taste" },
            { label: "Explore our Memberships", nextId: "memberships" },
            { label: "Shop our wines", nextId: "shop" },
            { label: "Events", nextId: "events" },
        ],
    },

    {
        id: "events",
        text: "Here are some Upcoming Events. If you want to explore more you can click on the link below.",
        carousel: [
            {
                title: "Turkish Wine Tour Adventure",
                date: "Sep 6 - Sep 20, 2025",
                price: "$20,889.00",
                image: "turkish-tour.jpg",
                buttonText: "Select",
                nextId: "turkishDetails",
            },
            {
                title: "Halleck Vineyard Harvest",
                date: "Oct 19, 2025",
                price: "$145",
                image: "harvest.jpg",
                buttonText: "Select",
                nextId: "harvestDetails",
            },
        ],
        options: [
            { label: "Wine Tour Adventure", nextId: "turkishDetails" },
            { label: "Vineyard Harvest", nextId: "harvestDetails" },
            { label: "Wine & Wildlife Expedition", nextId: "wildlife" },
            { label: "At the Left Bank with Halleck Vineyard", nextId: "leftBank" },
            { label: "Explore More", nextId: "exploreMore" },
        ],
    },
    {
        id: "turkishDetails",
        text: "Here's your brief information:",
        event: {
            title: "Turkish Wine Tour Adventure",
            date: "Sep 6 - Sep 20, 2025",
            price: "$20,889.00 per person",
            details: [
                "For same day reservations, specific times or larger groups please call 707-944-5620 x1.",
                "*Note: For cancellations with < 4 hours notice or no-shows, the full experience fee will be applied.*",
            ],
            buttonText: "Book your Slot",
            buttonLink: "/book/turkish-wine-tour",
        },
    },
    {
        id: "harvestDetails",
        text: "Here’s your brief information:",
        event: {
            title: "Halleck Vineyard Harvest",
            date: "Oct 19, 2025",
            price: "$145.00 per person",
            details: [
                "Harvest day with winemakers & vineyard team.",
                "Includes food pairings, grape stomping, and private tours.",
                "*Spots are limited — early booking recommended.*",
            ],
            buttonText: "Book your Slot",
            buttonLink: "/book/harvest",
        },
    },

    {
        id: "welcome",
        text: "Welcome to Halleck Vineyard fellow wine enthusiast! I am Halle, your Virtual Concierge and Wine Educator, here to be your guide. Ask me anything about Wine & Halleck",
        options: [
            { label: "Taste our wines", nextId: "tasteWines" },
            { label: "Explore our Memberships", nextId: "memberships" },
            { label: "Shop our wines", nextId: "shopWines" },
            { label: "Events", nextId: "events" },
            { label: "Ask a Question", nextId: "askQuestion" },
        ],
    },
    {
        id: "memberships",
        text: "We have so many Membership tailored to your taste. You can choose any of the options below",
        options: [
            { label: "6 Bottle Club", nextId: "sixBottleOptions" },
            { label: "12 Bottle Club", nextId: "twelveBottleOptions" },
        ],
    },
    {
        id: "sixBottleOptions",
        text: "We have so many Membership tailored to your taste. You can choose any of the options below",
        carousel: [
            {
                title: "Pinot Noir Only",
                price: "$325 avg per shipment",
                features: ["6 wines", "Twice per year", "Custom selection of your favorite wines"],
                buttonText: "Choose your Wine",
                nextId: "pinotNoirOnly",
            },
            {
                title: "Pinot Noir & Whites",
                price: "$300 avg per shipment",
                features: ["6 wines", "Twice per year", "Custom selection of your favorite wines"],
                buttonText: "Choose your Wine",
                nextId: "pinotNoirWhite",
            },
        ],
    },
];
