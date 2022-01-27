console.log('Vue OK', Vue);

Vue.config.devtools = true;

const app = new Vue({
    el: '#root',
    data: {
        currentMedia: 0,
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
        }
    }
})
