/**
 * Created by ZHOUSH on 11/11/2016.
 */
var _ = require('_');
var PivotModel = function () {
    this.rows = [];
    this.cols = [];
    this.filters = [];
    this.sorters = [];
};
var pmProto = PivotModel.prototype;