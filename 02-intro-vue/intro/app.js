

const { createApp, ref } = Vue;

const app = createApp({

    
    // setup se ejecuta cuando la aplicacion se monta
    setup() {
        const message = ref(`Im Batman`);

        const author = ref('Bruce Wayne');
        
        const changeQuote = () => {
            message.value = 'Im Goku';
            author.value = 'Goku'
        }

        // exponemos el message al template
        return {
            message,
            author,
            changeQuote,
        }
    },
    

    
})


app.mount('#my-app');
