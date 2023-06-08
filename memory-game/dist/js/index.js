/**
 * 1. Hämta alla kort och sätt en eventlistener på varje kort
 * 2. När jag klickar på ett kort så sätt klassen flip och spara undan kortet
 * 3. Om jag har klickat på två kortet så hämta data-card och jämför värden
 *   a. Om samma öka hittade par med 1
 *   b. Annars ta bort klassen flip från både korten
 * 4. Om antal hittade par är 8 så visa att man vann
 * 5. Shuffla korten.
*/
const memoryCards = document.querySelectorAll('.memory-card');
const closeElem = document.querySelector('.close');
let pickedCards = [];
let foundPairs = 0;
function resetGame() {
    memoryCards.forEach((memoryCard) => {
        const card = memoryCard;
        card.classList.toggle('flip');
    });
    foundPairs = 0;
}
function hasWon() {
    if (foundPairs === 8) {
        document.querySelector('.overlay').classList.toggle('show');
        resetGame();
    }
}
function compareCards() {
    const cardOne = pickedCards[0].getAttribute('data-card');
    const cardTwo = pickedCards[1].getAttribute('data-card');
    if (cardOne === cardTwo) {
        // Hittade ett par
        foundPairs++;
        pickedCards = [];
        hasWon();
    }
    else {
        setTimeout(() => {
            pickedCards[0].classList.toggle('flip');
            pickedCards[1].classList.toggle('flip');
            pickedCards = [];
        }, 1500);
    }
}
function shuffle() {
    memoryCards.forEach((memoryCard) => {
        const card = memoryCard;
        const position = Math.floor(Math.random() * memoryCards.length); // Slumpa en siffra mellan 0 - 16
        card.style.order = position.toString();
    });
}
memoryCards.forEach((card) => {
    card.addEventListener('click', (event) => {
        const elem = event.currentTarget; // Gör om till ett HTML element
        if (pickedCards.length < 2) { // Kolla så man bara kan välja två kort
            elem.classList.toggle('flip');
            pickedCards.push(elem);
        }
        if (pickedCards.length === 2) {
            console.log('Jämför');
            compareCards();
        }
    });
});
closeElem.addEventListener('click', () => {
    document.querySelector('.overlay').classList.toggle('show');
});
shuffle();
