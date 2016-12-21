"use strict";
var Model = (function () {
    function Model(_id, _name) {
        this._id = _id;
        this._name = _name;
    }
    Object.defineProperty(Model.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Model.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    return Model;
}());
exports.Model = Model;
var model = new Model(1, 'test');
console.log(model.id);
console.log(model['id']);
