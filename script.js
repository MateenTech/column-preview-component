const cardsContainer = document.querySelector(".cards");



const cars = [
    {
        model: "Sedans",
        descp: `Choose a sedan for its affordability and excellent fuel economy. Ideal for
    cruising in the city or on your next road trip.`,
        cta: "learn more"
    },
    {
        model: "SUVs",
        descp: `Take an SUV for its
    spacious interior, power, and versatility. Perfect for your next family
    vacation and off-road adventures.`,
        cta: 'learn more'
    },
    {
        model: "Luxury",
        descp: `Cruise in the best car brands
    without the bloated prices. Enjoy the enhanced comfort of a luxury rental
    and arrive in style.`,
        cta: 'learn more'
    }
];

function loadCardsContent() {
    let carHtml = '';

    cars.map(({ model, descp, cta }) => {
        carHtml += `
        
        <div class="cards__col cards__col-${model.toLowerCase()}">
          <div class="cards__col__img">
            <img src="./images/icon-${model.toLowerCase()}.svg" alt="${model.toLowerCase()} icon" />
          </div>
         <div class="cards__col__descp">
            <h1>${model}</h1>
            <p>
            ${descp}
            </p>
         </div>
          <button class="cta cta__${model.toLowerCase()}">
            ${cta}
          </button>
        </div>
        
        `;
    });
    cardsContainer.innerHTML = carHtml;
};

loadCardsContent();