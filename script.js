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

let btn = document.querySelector('button');
var medium_width = window.matchMedia("(max-width: 1330px)");

function less_arrows(x) {
    if (x.matches) { 
    btn.textContent = '➡️➡️➡️➡️➡️➡️➡️Send your message⬅️⬅️⬅️⬅️⬅️⬅️⬅️';
    } else {
    btn.textContent = '➡️➡️➡️➡️➡️➡️➡️➡️➡️➡️➡️➡️Send your message⬅️⬅️⬅️⬅️⬅️⬅️⬅️⬅️⬅️⬅️⬅️⬅️';
    }
}

less_arrows(medium_width);

medium_width.addEventListener("change", function() {
less_arrows(medium_width);
});

btn.addEventListener('click', (event) => {

    btn.style.height = '3rem';
    btn.style.fontSize = 'clamp(1rem, 4vw, 1.25rem )';

    function less_ballons(x) {
        if (x.matches) { 
        btn.textContent = '🎈🎈🎈🎈🎈🎈🦚🎈🎈🎈🎈🎈🎈';
        } else {
        btn.textContent = '🎈🎈🎈🎈🎈🎈🎈🎈🎈🦚🎈🎈🎈🎈🎈🎈🎈🎈🎈';
        }
    }

    less_ballons(medium_width);

    medium_width.addEventListener("change", function() {
    less_ballons(medium_width);
    });
});

var valid_input = document.querySelector('')