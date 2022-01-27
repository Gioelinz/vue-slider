console.log('Vue OK', Vue);

Vue.config.devtools = true;

const app = new Vue({
    el: '#root',
    data: {
        currentMedia: 0,
        isActive: false,
        medias: [
            'images/image1.jpg',
            'images/image2.jpg',
            'images/image3.jpg',
            'images/image4.jpg',
        ],
    },
    methods: {

        changeMedia(index) {
            return this.currentMedia === index;
        },

        setMedia(index) {
            this.currentMedia = index;
        },

        prevMedia() {
            if (this.currentMedia === 0) this.currentMedia = this.medias.length - 1;
            else this.currentMedia--;
        },

        nextMedia() {
            if (this.currentMedia === this.medias.length - 1) this.currentMedia = 0;
            else this.currentMedia++;
        },
    }
})
