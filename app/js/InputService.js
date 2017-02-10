module.exports = InputService = {
    addEventListener: function() {
        $('button.button').on('click', (event) => {
            let input = $(event.currentTarget).html();
            switch (input) {
                case '=':
                    window.ecalc.result(eval(window.ecalc.term));
                    break;
                case ',':
                    input = '.';
                default:
                    window.ecalc.term += input;
                    OutputService.showInput();
            }
        });
    },
    OutputService: null,
    init: function() {
        this.addEventListener();
        this.OutputService = require('./OutputService');
    },
};