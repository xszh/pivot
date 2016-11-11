/**
 * Created by ZHOUSH on 11/11/2016.
 */
var _ = require('_');
var utils = require('../utils/utils');
function PivotField (name, type, formatter, sorter) {
    this.name = _.isUndefined(name) ? '' : name;
    this.type = _.isUndefined(type) ? typeof '' : type;
    this.formatter = _.isUndefined(formatter) ? utils.EMPTY_FUNC_RET(typeof '') : formatter;
    this.sorter = _.isUndefined(sorter) ? utils.EMPTY_FUNC_RET(typeof 0) : sorter;
}
var pfProto = PivotField.prototype;

module.exports = PivotField;
