class CircleOfFifths {
    constructor() {
        this.outerNotes = ['C', 'G', 'D', 'A', 'E', 'B', 'F♯', 'D♭', 'A♭', 'E♭', 'B♭', 'F'];
        this.init();
    }

    init() {
        const outerCircle = document.querySelector('.outer-circle');

        // Create outer circle notes (Major keys) only
        this.outerNotes.forEach((note, index) => {
            const noteElement = this.createNoteElement(note, index);
            outerCircle.appendChild(noteElement);
        });
    }

    createNoteElement(note, index) {
        const noteElement = document.createElement('div');
        noteElement.className = 'note';
        noteElement.textContent = note;

        const radius = 230;
        const angle = (index * 30 - 90) * (Math.PI / 180);
        const centerOffset = 250;

        const left = centerOffset + radius * Math.cos(angle);
        const top = centerOffset + radius * Math.sin(angle);

        noteElement.style.left = `${left - 20}px`;
        noteElement.style.top = `${top - 20}px`;

        noteElement.addEventListener('click', () => this.handleNoteClick(note));

        return noteElement;
    }

    handleNoteClick(note) {
        // Navigate to keyboard.html with the selected note as a parameter
        window.location.href = `keyboard.html?note=${encodeURIComponent(note)}`;
    }
}

// Initialize the circle of fifths when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new CircleOfFifths();
}); 