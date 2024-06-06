import showModal from './modal';

export default function showWinnerModal(fighter) {
    const title = `${fighter.name} is the winner!`;
    const bodyElement = document.createElement('div');
    const fighterImage = document.createElement('img');
    fighterImage.src = fighter.source;
    bodyElement.appendChild(fighterImage);

    showModal({ title, bodyElement });
}
