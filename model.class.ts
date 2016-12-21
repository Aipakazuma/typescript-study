export class Model {
  constructor(
    private _id: number,
    private _name: string
  ) {
  }

  get id(): number {
    return this._id;
  }

  get name(): string {
    return this._name;
  }
}


var model = new Model(1, 'test');
console.log(model.id);
console.log(model['id']);
