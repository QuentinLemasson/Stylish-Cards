const numberOfDeck = 4;
let currentId = 0;
let allowClick = true;
const allowDelay = 600;

const handleLikeClick = () => {
    if(allowClick) {
        allowClick=false;

        const nextId = (currentId + 1) % numberOfDeck;
    
        const activeDeck = document.querySelector(`[data-id="${currentId}"]`);
        const nextActiveDeck = document.querySelector(`[data-id="${nextId}"]`);
    
        activeDeck.dataset.status = 'to-right';
        nextActiveDeck.dataset.status = 'from-left';
    
        
        setTimeout(() => {
            nextActiveDeck.dataset.status = 'active';
            currentId = nextId;
        })

        setTimeout(() => {
            allowClick=true;
        }, allowDelay)
    }


}

const handleDislikeClick = () => {
    if(allowClick) {
        allowClick=false;
        
        const nextId = (currentId + 1) % numberOfDeck;

        const activeDeck = document.querySelector(`[data-id="${currentId}"]`);
        const nextActiveDeck = document.querySelector(`[data-id="${nextId}"]`);

        activeDeck.dataset.status = 'to-left';
        nextActiveDeck.dataset.status = 'from-right';

        setTimeout(() => {
            nextActiveDeck.dataset.status = 'active';
            currentId = nextId;
        })

        setTimeout(() => {
            allowClick=true;
        }, allowDelay)
    }
}