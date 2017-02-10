(() => {
    InputService = require('./js/InputService');
    OutputService = require('./js/OutputService');
    InputService.init();
    OutputService.init();
    window.ecalc = {
        term: '',
        result: (res) => {
            OutputService.showResult(res);
            window.ecalc.term = '';
        }
    };

})();