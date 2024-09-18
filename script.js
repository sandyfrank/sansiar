// Text content for both languages
const translations = {
    en: {
        home: "Home",
        services: "Services",
        car_rental: "Car Rental",
        car_rental_title: "Car Rental",
        car_rental_desc: "Book a car with SANSIAR for a period that suits your needs.",
        name: "Name:",
        phone: "Phone:",
        start_date: "Start Date:",
        end_date: "End Date:",
        car_type: "Car Type:",
        sedan: "Sedan",
        suv: "SUV",
        truck: "Truck",
        book_now: "Book Now",
        about: "About Us",
        contact: "Contact",
        welcome: "Welcome to SANSIAR",
        intro: "Your trusted partner in Transport, Real Estate, International Trade, and Import-Export.",
        our_services: "Our Services",
        transport: "Transport",
        transport_desc: "Providing reliable transport solutions for all your needs.",
        real_estate: "Real Estate",
        real_estate_desc: "Expert real estate services to help you find your dream property.",
        international_trade: "International Trade",
        international_trade_desc: "Facilitating international orders and deliveries efficiently.",
        import_export: "Import-Export",
        import_export_desc: "Your go-to experts for seamless import and export processes.",
        about_us: "About Us",
        about_desc: "SANSIAR is a dynamic company offering innovative solutions in various fields...",
        contact_us: "Contact Us",
        inquiries: "For inquiries, please reach out to us at:",
    },
    fr: {
        home: "Accueil",
        services: "Services",
        car_rental: "Location de Voiture",
        car_rental_title: "Location de Voiture",
        car_rental_desc: "Réservez une voiture chez SANSIAR pour une période qui vous convient.",
        name: "Nom:",
        phone: "Téléphone:",
        start_date: "Date de début:",
        end_date: "Date de fin:",
        car_type: "Type de voiture:",
        sedan: "Berline",
        suv: "SUV",
        truck: "Camion",
        book_now: "Réservez maintenant",
        about: "À propos de nous",
        contact: "Contact",
        welcome: "Bienvenue chez SANSIAR",
        intro: "Votre partenaire de confiance pour le transport, l'immobilier, le commerce international, et l'import-export.",
        our_services: "Nos Services",
        transport: "Transport",
        transport_desc: "Nous fournissons des solutions de transport fiables pour tous vos besoins.",
        real_estate: "Immobilier",
        real_estate_desc: "Des services immobiliers experts pour vous aider à trouver la propriété de vos rêves.",
        international_trade: "Commerce International",
        international_trade_desc: "Nous facilitons efficacement les commandes et livraisons internationales.",
        import_export: "Import-Export",
        import_export_desc: "Vos experts en import-export pour des processus transparents.",
        about_us: "À propos de nous",
        about_desc: "SANSIAR est une entreprise dynamique offrant des solutions innovantes dans divers domaines...",
        contact_us: "Contactez-nous",
        inquiries: "Pour toute question, veuillez nous contacter à :",
    }
};

// Language switcher logic
const enBtn = document.getElementById('en-btn');
const frBtn = document.getElementById('fr-btn');
const translatableElements = document.querySelectorAll('[data-key]');

enBtn.addEventListener('click', () => switchLanguage('en'));
frBtn.addEventListener('click', () => switchLanguage('fr'));

function switchLanguage(lang) {
    translatableElements.forEach((el) => {
        const key = el.getAttribute('data-key');
        el.textContent = translations[lang][key];
    });
}

// Car Rental form submission logic
const form = document.getElementById('car-rental-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Collect form data
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const startDate = document.getElementById('start-date').value;
    const startTime = document.getElementById('start-time').value;
    const endDate = document.getElementById('end-date').value;
    const endTime = document.getElementById('end-time').value;
    const carType = document.getElementById('car-type').value;

    // Create CSV content
    const csvContent = `Name,Phone,Start Date, Start Time, End Date, End Time, Car Type\n${name},${phone},${startDate},${startTime},${endDate},${endTime},${carType}`;

    // Create a download link for the CSV file
    const link = document.createElement('a');
    link.setAttribute('href', 'data:text/csv;charset=utf-8,' + encodeURIComponent(csvContent));
    link.setAttribute('download', 'car_rental_reservations.csv');
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Clear the form after submission
    form.reset();

    alert('Car rental booked successfully! The data has been saved.');
});

