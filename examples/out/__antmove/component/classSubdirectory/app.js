const utils = require('../utils');

module.exports = {
    processTransformationApp (_opts, options) {
        _opts = Object.assign(_opts, options);
        _opts.onLaunch = function (res) {
            tt.clearStorageSync({
                key: "logInfo"
            });
            tt.clearStorageSync({
                key: "_pageMsg"
            });       
            let body = {};
            function pre (params = {}) {
                return utils.defineGetter(params, body.params, function (obj, prop) {
                   // warnLife(`onLaunch's return value is not support ${prop} attribute!`, `onLaunch/${prop}`);
                });
            }
            if (options.onLaunch) {
                body = {
                    params: {
                        scene: {
                            type: 0,
                            desc: "missing"
                        },
                        shareTicket: {
                            type: 0,
                            desc: "missing"
                        }
                    }
                };
                res = pre(res);

                if (typeof options.data === 'function') {
                    options.data = options.data();
                }

                options.onLaunch.call(this, res);
            }
        };
        _opts.onShow = function (res) {
            let body = {};
            function pre (params = {}) {
                return utils.defineGetter(params, body.params, function (obj, prop) {
                    //warnLife(`onShow's return value is not support ${prop} attribute!`, `onShow/${prop}`);
                });
            }
            if (options.onShow) {
                body = {
                    params: {
                        scene: {
                            type: 0,
                            desc: "missing"
                        },
                        shareTicket: {
                            type: 0,
                            desc: "missing"
                        }
                    }
                };
                res = pre(res);
                options.onShow.call(this, res);
            }
        };
        _opts.onHide = function () {
            if (options.onHide) {
                //warnLife('', 'app/onHide');
                options.onHide.call(this);
            }
        };
        if (options.onError) {
            _opts.onError =function () {
                options.onError.call(this);
            };
        }
    }
};