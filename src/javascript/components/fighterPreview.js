import createElement from '../helpers/domHelper';

export function createFighterPreview(fighter, position) {
    const positionClassName = position === 'right' ? 'fighter-preview___right' : 'fighter-preview___left';
    const fighterElement = createElement({
        tagName: 'div',
        className: `fighter-preview___root ${positionClassName}`
    });

    if (fighter) {
        const { source, _id, ...detailsPowers } = fighter;
        const attributes = { src: source };
        const fighterImg = createElement({
            tagName: 'img',
            className: `fighter-preview___root ${positionClassName}`,
            attributes
        });

        if (position === 'right') {
            fighterImg.style.transform = 'scale(-1, 1)';
        }

        const fighterPowers = Object.keys(detailsPowers).map(key => {
            const powersElement = createElement('div');
            powersElement.textContent = `${key}: ${detailsPowers[key]}`;
            return powersElement;
        });

        fighterElement.append(...fighterPowers, fighterImg);
    }

    // todo: show fighter info (image, name, health, etc.)

    return fighterElement;
}

export function createFighterImage(fighter) {
    const { source, name } = fighter;
    const attributes = {
        src: source,
        title: name,
        alt: name
    };
    const imgElement = createElement({
        tagName: 'img',
        className: 'fighter-preview___img',
        attributes
    });

    return imgElement;
}
