var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    },
    methods: {
        contextMenu: function () {
            console.log("contextMenu");
        }
    }
})
