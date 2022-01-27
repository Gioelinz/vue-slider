console.log('Vue OK', Vue);

Vue.config.devtools = true;

const app = new Vue({
    el: '#root',
    data: {
        medias: [
            'images/image1.jpg',
        ]
    }
})
