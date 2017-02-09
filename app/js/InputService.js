module.exports = InputService = {
    init: function() {
        this.addEventListener();
    },
    addEventListener: function() {
        $('button.button').on('click', (event) => {
            console.log($(event.currentTarget).html());
        });
    }
};