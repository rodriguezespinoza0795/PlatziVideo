import MediaPlayer from './mediaPlayer.js'
import AutoPlay from './plugings/AutoPlay.js'

// guardar el selector video para interactuar
const video = document.querySelector('video');
// guardar el selector button para interactuar
const button = document.querySelector('button');
// Se define una "Clase"

// instanciamos un objeto de la clase MediaPlayer
const player = new MediaPlayer({media: video, plugins: [/*new AutoPlay()*/]})
// Reproducir video utilizando la instancia de MediaPlayer
button.onclick = () => player.play();