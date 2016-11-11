/**
 * Created by ZHOUSH on 11/11/2016.
 */
var _ = require('_');
var utils = require('../utils/utils');
var PivotField = require('pivotField');
function PivotAggregator () {
    this.fields = [];
    this.function = '';
}
var paProto = PivotAggregator.prototype = Object.create(PivotField);
paProto.getField = function (name) {
    var def = this.fields[0];
    if (_.isUndefined(name)) return def;
    return _.find(this.fields, {name: name}) || def;
};
module.exports = PivotAggregator;
