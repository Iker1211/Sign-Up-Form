let greetings = document.querySelector('.greetings');

const d = new Date();
let hour = d.getHours();

if (0 <= hour && hour < 12 ) {
    greetings.textContent = 'Good Morning';
} else if ( 12 <= hour && hour < 21 ) {
    greetings.textContent  = 'Good Afternoon';
} else {
    greetings.textContent = 'Good Night';
}