class MediaPlayer{
    constructor(config){
    this.media=config.media
    this.plugins=config.plugins || []
    this._initPlugings()
    }

    _initPlugings = () => {
        this.plugins.forEach(plugin => {
            plugin.run(this)
        });
    }
    // se define el método para reproducir o pausar el video
    play = () => {this.media.paused ? this.media.play() : this.media.pause()}
    mute = () => {this.media.muted = true}
    unmute = () => {this.media.muted = false}
}

export default MediaPlayer