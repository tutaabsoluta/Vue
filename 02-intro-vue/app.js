

const { createApp, ref } = Vue;

const app = createApp({
    template: `
    <h1>{{ message }}</h1>
    <p>Desde app.js</p>
    `,
    
    // setup se ejecuta cuando la aplicacion se monta
    setup() {
        const message = `Im Batman`;

        // exponemos el message al template
        return {
            message
        }
    },
    

    
})


app.mount('#my-app');
