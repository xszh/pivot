/**
 * Created by ZHOUSH on 11/11/2016.
 */
var _ = require('_');
var PivotField = require('pivotField');
var PivotModel = function () {
    this.rows = [];
    this.cols = [];
    this.filters = [];
    this.values = [];
};
var pmProto = PivotModel.prototype;

pmProto.add = function (role, name, type, formatter, sorter) {
    var inRows = _.find(this.rows, {name: name});
    var inCols = _.find(this.cols, {name: name});
    var inFilters = _.find(this.filters, {name: name});
    var field;
    if (inRows) field = inRows;
    if (inCols) field = inCols;
    if (inFilters) field = inFilters;
    if (!field) field = new PivotField(name, type, formatter, sorter);
    this[role].push(field);
};
pmProto.addRows = function (name, type, formatter, sorter) {
    this.add.apply(this, ['rows'].concat(arguments));
};
pmProto.addCols = function (name, type, formatter, sorter) {
    this.add.apply(this, ['cols'].concat(arguments));
};
pmProto.addFilters = function (name, type, formatter, sorter) {
    this.add.apply(this, ['filters'].concat(arguments));
};