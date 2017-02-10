module.exports = OutputService = {
    display: null,
    showInput: function() {
        this.display.html(window.ecalc.term);
    },
    showResult: function(res) {
        this.display.html(this.display.html() + "=" + res);
    },
    init: function() {
        this.display = $('div.display');
    },
};