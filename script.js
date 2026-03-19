function openCard(card) {
    card.classList.toggle('open');
    const sound = document.getElementById('open-sound');
    if (card.classList.contains('open')) {
        sound.currentTime = 0;
        sound.play();
    }
}