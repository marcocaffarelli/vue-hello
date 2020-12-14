// Istruzioni:
// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Bonus: Aggiungere un’immagine presa anch’essa da un data


//V-Model
let app = new Vue({
    //option object
    el: "#app",   
    data:{
        messaggio: "Primo esercizio bonus con vue",
        //immagine che si trova nella cartella img
        immagineJs: "./assets/img/bo.jpg"
    }
});