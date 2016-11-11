/**
 * Created by ZHOUSH on 11/11/2016.
 */
var _ = require('_');
var utils = require('../utils/utils');
function PivotFunc(name) {
    this.name = name || '';
    this.params = [];
}
var pfProto = PivotFunc.prototype;
pfProto.init = function (params) {this.params = params;};
pfProto.push = function () {};
pfProto.value = function () {return 0;};
module.exports = {
    PivotFunc: PivotFunc,
    extendFunc: function (config, baseCls) {
        baseCls = baseCls || PivotFunc;
        return utils.extend.call(baseCls, config);
    }
};