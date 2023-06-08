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
let pickedCards: HTMLElement[] = [];
let foundPairs: number = 0;

function resetGame(): void {
    memoryCards.forEach((memoryCard) => {
        const card: HTMLElement = memoryCard as HTMLElement;
        card.classList.toggle('flip');
    });

    foundPairs = 0;
}

function hasWon(): void {
    if (foundPairs === 8) {
        document.querySelector('.overlay').classList.toggle('show');
        resetGame();
    }
}

function compareCards(): void {
    const cardOne: string = pickedCards[0].getAttribute('data-card');
    const cardTwo: string = pickedCards[1].getAttribute('data-card');

    if (cardOne === cardTwo) {
        // Hittade ett par
        foundPairs++;
        pickedCards = [];

        hasWon();
    } else {
        setTimeout(() => {
            pickedCards[0].classList.toggle('flip');
            pickedCards[1].classList.toggle('flip');

            pickedCards = [];
        }, 1500);
    }

}

function shuffle(): void {
    memoryCards.forEach((memoryCard) => {
        const card: HTMLElement = memoryCard as HTMLElement;
        const position: number = Math.floor(Math.random() * memoryCards.length); // Slumpa en siffra mellan 0 - 16
        card.style.order = position.toString();
    })
}

memoryCards.forEach((card) => {
    card.addEventListener('click', (event) => {
        const elem: HTMLElement = event.currentTarget as HTMLElement; // Gör om till ett HTML element
        
        if (pickedCards.length < 2) { // Kolla så man bara kan välja två kort
            elem.classList.toggle('flip');
            pickedCards.push(elem)
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