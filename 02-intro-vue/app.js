const quotes = [
    { quote: 'The night is darkest just before the dawn. And I promise you, the dawn is coming.', author: 'Harvey Dent, The Dark Knight' },
    { quote: 'I believe what doesn’t kill you simply makes you, stranger.', author: 'The Joker, The Dark Knight' },
    { quote: 'Your anger gives you great power. But if you let it, it will destroy you… As it almost did me', author: 'Henri Ducard, Batman Begins' },
    { quote: 'You either die a hero or live long enough to see yourself become the villain.', author: 'Harvey Dent, The Dark Knight' },
    { quote: 'If you’re good at something, never do it for free.', author: 'The Joker, The Dark Knight' },
    { quote: 'Yes, father. I shall become a bat.', author: 'Bruce Wayne/Batman, Batman: Year One' },
];


const { createApp, ref } = Vue;




const app = createApp({

    setup() {
        
        const showAuthor = ref(true);

        const toggleAuthor = () => {
            showAuthor.value = !showAuthor.value
        }


        return {
            quotes,
            showAuthor,
            toggleAuthor,
        }
    }
})

app.mount('#myApp')

// en v-if el elemento desaparece del DOM
// El v-show lo oculta pero sigue en el DOM, solo hace un display-none

// si es un componente pesado sirve el v show porque no destruye el component y no reinicia el ciclo de vida del component