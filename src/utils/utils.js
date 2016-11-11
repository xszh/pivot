/**
 * Created by ZHOUSH on 11/11/2016.
 */
var ret = {
    EMPTY_FUNC: function () {},
    EMPTY_FUNC_RET: function (type) {
        switch (type) {
            case typeof 0:
                return function () {return 0;};
            case typeof true:
                return function () {return false;};
            case typeof '':
                return function () {return '';};
            case typeof {}:
                return function () {return {};};
            case 'array':
                return function () {return [];};
            case typeof ret.EMPTY_FUNC:
                return function () {return ret.EMPTY_FUNC;};
            case 'null':
                return function () {return null;};
            case typeof (void 0):
                return function () {return void 0;};
            default:
                return function () {};
        }
    },
    extend: function (baseCls, config) {
        if (typeof baseCls == 'undefined') {
            throw 'NO_BASE_CLASS_ERROR';
        }
        var base = baseCls.prototype;
        function Func () {
            baseCls.apply(this, arguments);
            this.super = base;
        }
        var fProto = Func.prototype = Object.create(base);
        for (var key in config) {
            if (config.hasOwnProperty(key)) {
                var val = config[key];
                if (typeof val == 'function') {
                    fProto[key] = val;
                }
            }
        }
        return Func;
    }
};
module.exports = ret;