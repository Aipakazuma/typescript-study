function useGenerics<T>(string: T): void {
  console.log(string);
}

// useGenerics<string>('Hello, world.');

// Operator '+' cannot be applied to types '10' and 'U'.
// function useMultipleGenerics<T, U>(string: T, number: U): void {
//   console.log(string);
//   console.log(10 + number);
// }

// これはセーフ
function useMultipleGenerics<T, U>(string: T, number: U): void {
	console.log(string);
	console.log(number);
}

// useMultipleGenerics<string, number>('Hello', 100);

class TestModel<T> {
  constructor(
    private _id: number,
    private _name: string
  ) {
  }

  id() {
    return this._id;
  }

  name() {
    return this._name;
  }

  genericsTest(methodGenerics: T): T {
    return methodGenerics;
  }
}

// var testModel = new TestModel(10, 'Aipa');
// console.log(testModel.id());
// console.log(testModel.name());

// use generics
// var testModel = new TestModel<string>(10, 'Aipa', 'Aipa2');
// console.log(testModel.genericsTest());

// method generics
var testModel = new TestModel<string>(10, 'Aipa');
console.log(testModel.genericsTest('Hello'));
