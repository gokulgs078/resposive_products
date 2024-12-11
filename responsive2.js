// const cardContainer = document.getElementById('card-container');
const carouselImages = document.querySelector('.carousel-images');
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;
let currentIndex = 0;
let interval;


function showImages(index) {
    currentIndex = (index + totalItems) % totalItems; 
    const offset = -currentIndex * 100; 
    carouselImages.style.transform = `translateX(${offset}%)`;
}


function showNextImages() {
    showImages(currentIndex + 1);
}


function showPrevImages() {
    showImages(currentIndex - 1);
}


function startAutoSlide() {
    interval = setInterval(showNextImages, 5000); 
}


document.getElementById('nextButton').addEventListener('click', () => {
    clearInterval(interval); 
    showNextImages(); 
    startAutoSlide(); 
});

document.getElementById('prevButton').addEventListener('click', () => {
    clearInterval(interval); 
    showPrevImages();
    startAutoSlide(); 
});


startAutoSlide();


const cardContainer = document.getElementById('card_container');

const cardsData = [
    { title: 'Card 1', content: 'This is the content of card 1.', image: 'Images/nature1.jpeg'},
    { title: 'Card 2', content: 'This is the content of card 2.', image: 'Images/nature2.jpeg' },
    { title: 'Card 3', content: 'This is the content of card 3.', image: 'Images/nature3.jpeg' },
    { title: 'Card 4', content: 'This is the content of card 4.', image: 'Images/nature1.jpeg' },
];

cardsData.forEach(card => {
    const cardElement = document.createElement('div');
    cardElement.className = 'card';
    cardElement.innerHTML = `<img src="${card.image}" alt="${card.title}"><h3>${card.title}</h3><p>${card.content}</p>`;
    cardContainer.appendChild(cardElement);
});