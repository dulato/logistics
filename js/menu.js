var app = new Vue({
    el: '#app',
    data() {
        return {
            isMenuOpen: false,
        }
    },
    methods: {
        openMenu() {
            this.isMenuOpen = true
        },
        closeMenu() {
            this.isMenuOpen = false
        }
    },
});