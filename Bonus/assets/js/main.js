// Istruzioni:
// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Bonus: Aggiungere un’immagine presa anch’essa da un data


//V-Model
let app = new Vue({
    //option object
    el: "#app",   
    data:{
        messaggio: "Primo esercizio bonus con Vue",
        //immagine che si trova nella cartella img
        immagineJs: "./assets/img/bo.jpg",
        //immagine presa dall' indirizzo 
        immagineLink: "https://www.1zoom.me/big2/51/161825-sweetangel.jpg"
    }
});