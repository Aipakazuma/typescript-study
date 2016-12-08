function useGenerics(string) {
    console.log(string);
}
// useGenerics<string>('Hello, world.');
// Operator '+' cannot be applied to types '10' and 'U'.
// function useMultipleGenerics<T, U>(string: T, number: U): void {
//   console.log(string);
//   console.log(10 + number);
// }
// これはセーフ
function useMultipleGenerics(string, number) {
    console.log(string);
    console.log(number);
}
// useMultipleGenerics<string, number>('Hello', 100);
var TestModel = (function () {
    function TestModel(_id, _name) {
        this._id = _id;
        this._name = _name;
    }
    TestModel.prototype.id = function () {
        return this._id;
    };
    TestModel.prototype.name = function () {
        return this._name;
    };
    TestModel.prototype.genericsTest = function (methodGenerics) {
        return methodGenerics;
    };
    return TestModel;
}());
// var testModel = new TestModel(10, 'Aipa');
// console.log(testModel.id());
// console.log(testModel.name());
// use generics
// var testModel = new TestModel<string>(10, 'Aipa', 'Aipa2');
// console.log(testModel.genericsTest());
// method generics
var testModel = new TestModel(10, 'Aipa');
console.log(testModel.genericsTest('Hello'));
