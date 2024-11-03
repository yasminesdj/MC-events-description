class EventPage {
    constructor({ title, logoSrc, description, backgroundGradient, borderColor }) {
        this.title = title;
        this.logoSrc = logoSrc;
        this.description = description;
        this.backgroundGradient = backgroundGradient;
        this.borderColor = borderColor;
        this.eventHTML = this.createEventHTML();
    }

    createEventHTML() {
        const div = document.createElement('div');
        div.className = 'hero-section';
        div.style.background = this.backgroundGradient;
        div.innerHTML = `
            <div class="logo-container">
                <img src="${this.logoSrc}" alt="${this.title} Logo">
            </div>
            <div class="content">
                <div class="browser-frame" style="border: 2px solid ${this.borderColor};">
                    <div class="window-buttons">
                        <span class="red-button"></span>
                        <span class="yellow-button"></span>
                        <span class="green-button"></span>
                    </div>
                    <p class="description">${this.description}</p>
                </div>
            </div>
            <div class="icon-container">
                <img src="MC WHITE.png" alt="MC WHITE Icon">
            </div>
        `;
        return div;
    }

    render(container) {
        container.appendChild(this.eventHTML);
    }
}

// Container for events
const container = document.createElement('div');
container.className = 'carousel-content';
document.body.appendChild(container);

const events = [
    new EventPage({
        title: 'Micro Jam',
        logoSrc: 'logo1.png',
        description: 'Micro Jam is an internal event of the Micro Club. It lasts for three days and revolves around video game development. It is a competition that is both fun and educational, bringing together club members who are passionate about this field, which is still relatively rare in Algeria but has a potentially bright future! In addition, with coaching and collective activities, this event offers everything participants need to make the most of three days in their careers as game developers.',
        backgroundGradient: 'linear-gradient(135deg, #ba6f84,  #c21798, #626262)',
        borderColor: '#e24d97'
    }),
    new EventPage({
        title: 'Green Hat CTF',
        logoSrc: 'logo2.png',
        description: 'Green Hat CTF was a thrilling three-day cybersecurity event organized by the Micro Club at Dar Chabab. It brought together a large number of participants for a series of CTF challenges, workshops, and conferences. The event focused on solving cybersecurity problems in areas like cryptography and web security, with participants competing for the top spots. Alongside the competition, expert talks and hands-on activities provided valuable learning experiences. The event concluded with three standout winners and fostered a sense of community and growth in the field of cybersecurity!',
        backgroundGradient: 'linear-gradient(135deg, #000000,  #0a7602, #151515)',
        borderColor: '#0a7602'
    }),
    new EventPage({
        title: 'Micro Hack',
        logoSrc: 'logo3.png',
        description: 'Micro Hack is a hackathon hosted by Micro Club during three days where participants come together to tackle a real-world challenge. Teams brainstorm and develop creative solutions, racing against the clock to deliver their best ideas. At the end of the event, the top projects are recognized and rewarded for their innovation and impact. Micro Hack is a space for collaboration, creativity, and competition, where participants push their limits and turn bold ideas into reality!',
        backgroundGradient: 'linear-gradient(135deg, #54c0b2,  #16517b, #151515)',
        borderColor: '#14e7cb'
    }),
   
];

// Render the first event
let currentIndex = 0;
events[currentIndex].render(container);

document.getElementById('nextBtn').addEventListener('click', () => {
    // Remove the current event
    container.removeChild(events[currentIndex].eventHTML);
    // Increment the index
    currentIndex = (currentIndex + 1) % events.length;
    // Render the next event
    events[currentIndex].render(container);
});
